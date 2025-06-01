"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import type { Robot as RoboType } from "@/db/schema";

interface RobooProps {
  /** Array of robots to display */
  robots: RoboType[];
  /** Height of the map container */
  height?: string;
}

export default function Roboo({ robots, height = "400px" }: RobooProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const googleMap = useRef<google.maps.Map>(null);
  const infoWindow = useRef<google.maps.InfoWindow>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current || typeof window === "undefined" || !window.google?.maps) return;

    // Initialize map & shared InfoWindow
    if (!googleMap.current) {
      googleMap.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 2,
      });
      infoWindow.current = new window.google.maps.InfoWindow();
    }

    const map = googleMap.current!;
    const bounds = new window.google.maps.LatLngBounds();

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add new markers
    robots.forEach((robot) => {
      if (!robot.lastKnownLocation) return;  // ToDo: Clear the mess - Machete
      const [latStr, lngStr] = robot.lastKnownLocation.split(",").map((s) => s.trim());
      const lat = parseFloat(latStr);
      const lng = parseFloat(lngStr);
      if (isNaN(lat) || isNaN(lng)) return;

      const position = { lat, lng };
      const marker = new window.google.maps.Marker({
        position,
        map,
        title: robot.robotId,
      });
      markersRef.current.push(marker);
      bounds.extend(position);

      // On click: fetch address
      marker.addListener("click", async () => {
        try {
          const res = await fetch(`/api/geo?lat=${lat}&lng=${lng}`);
          const data = await res.json();
          const address = data.results?.[0]?.formatted_address || "Unknown address";
          infoWindow.current!.setContent(
            `<div><strong>${robot.robotId}</strong><br/>${address}</div>`
          );
          infoWindow.current!.open(map, marker);
        } catch (err) {
          console.error("Geocoding fetch failed:", err);
        }
      });
    });

    // Adjust view
    if (robots.length === 1) {
      const center = bounds.getCenter();
      map.setCenter(center);
      map.setZoom(14);
    } else if (robots.length > 1) {
      map.fitBounds(bounds);
    }
  }, [robots]);

  return (
    <>
      {/* Load Maps JS API */}
      <Script
        src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        strategy="beforeInteractive"
      />
      <div
        ref={mapRef}
        style={{ width: '100%', height }}
        className="rounded-lg shadow-md"
      />
    </>
  );
}
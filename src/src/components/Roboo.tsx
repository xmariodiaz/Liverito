// components/RobotMap.tsx
"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import type { Robot, RobotStatus } from "@/db/schema";

interface RobotMapProps {
  apiKey: string;
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  robots: Robot[];
  height?: string;
}

// Status to color mapping
const STATUS_COLORS: Record<RobotStatus, string> = {
  available: "#34D399", // green
  busy: "#ff0000", // red
  offline: "#B2ADAA", // grey
};

export default function Roboo({
  apiKey,
  center,
  zoom = 2,
  robots = [],
  height = "400px",
}: RobotMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: "weekly",
      libraries: ["marker"],
    });

    let map: google.maps.Map;

    loader.load().then(async () => {
      if (!mapRef.current) return;

      const { Map, InfoWindow } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement, PinElement } =
        (await google.maps.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;
      infoWindowRef.current = new InfoWindow();
      map = new Map(mapRef.current, {
        center,
        zoom,
        mapId: "Liverito", //
      });

      // Clear existing markers
      markerRefs.current.forEach((marker) => (marker.map = null));
      markerRefs.current = [];

      // Add robot markers
      robots.forEach((robot) => {
        if (!robot.lastKnownLocation) return;

        try {
          const [lat, lng] = robot.lastKnownLocation.split(",").map(parseFloat);
          const position = { lat, lng };

          // Create colored pin based on status
          const pin = new PinElement({
            background: STATUS_COLORS[robot.status],
            borderColor: "#1F2937",
            glyphColor: "#FFFFFF",
          });

          const marker = new AdvancedMarkerElement({
            map,
            position,
            title: robot.robotId,
            content: pin.element,
          });

          marker.addListener("click", async () => {
            try {
              const res = await fetch(`/api/geo?lat=${lat}&lng=${lng}`);
              const data = await res.json();
              console.log(data); // lets check this if it works
              const address =
                data.results?.[0]?.formatted_address || "Unknown address";
              infoWindowRef.current!.setContent(
                `<div class = "bg-cyan-950"><strong>${robot.robotId}</strong><br/>${address}</div>`
              );
              infoWindowRef.current!.open(map, marker);
            } catch (err) {
              console.error("Geocoding fetch failed:", err);
            }
          });

          // Store reference for cleanup
          markerRefs.current.push(marker);
        } catch (error) {
          console.error(
            `Invalid location for robot ${robot.robotId}:`,
            robot.lastKnownLocation , error
          );
        }
      });

      // Fit bounds to show all robots
      if (robots.length > 0) {
        const bounds = new google.maps.LatLngBounds();
        robots.forEach((robot) => {
          if (robot.lastKnownLocation) {
            const [lat, lng] = robot.lastKnownLocation
              .split(",")
              .map(parseFloat);
            bounds.extend({ lat, lng });
          }
        });

        if (robots.length === 1) {
          const center = bounds.getCenter();
          map.setCenter(center);
          map.setZoom(17);
        } else if (robots.length > 1) {
          map.fitBounds(bounds);
        }
      }
    });

    return () => {
      markerRefs.current.forEach((marker) => (marker.map = null));
    };
  }, [apiKey, center, zoom, robots]);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height }}
      className="rounded-lg shadow-md"
    />
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
//import Script from "next/script";
import Roboo from "@/components/Roboo";
import Loading from "@/components/Loading"
import type { Robot as RoboType, RobotStatus } from "@/db/schema";
import { robotStatusEnum } from "@/db/schema";

// Reverse geocode helper
const reverseGeocodeWithGoogle = async (
  lat: number,
  lng: number
): Promise<string> => {
  try {
    const res = await fetch(`/api/geo?lat=${lat}&lng=${lng}`);
    const data = await res.json();
    return data.results?.[0]?.formatted_address || `${lat},${lng}`;
  } catch {
    return `${lat},${lng}`;
  }
};

// Order info type
interface OrderInfo {
  id: number;
  status: string;
  client: { firstName: string };
  restaurant: { name: string };
  items: { description: string }[];
}

export default function RobotXPage() {
  const [robots, setRobots] = useState<(RoboType & { address: string })[]>([]);
  const [filtered, setFiltered] = useState<(RoboType & { address: string })[]>([]);
  const [selected, setSelected] = useState<(RoboType & { address: string }) | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | RobotStatus>('all');
  const [ordersMap, setOrdersMap] = useState<Record<number, OrderInfo[]>>({});
  const topRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load, attach addresses, and sort by ID
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/robot");
        const data: RoboType[] = await res.json();
        const valid = data.filter(r => r.lastKnownLocation);
        const withAddress = await Promise.all(
          valid.map(async r => {
            const [lat, lng] = r.lastKnownLocation!.split(",").map(Number);
            const address = await reverseGeocodeWithGoogle(lat, lng);
            return { ...r, address };
          })
        );
        //setIsLoading(false);
        // Sort by robot ID ascending
        withAddress.sort((a, b) => a.id - b.id);
        
        //await new Promise(resolve => setTimeout(resolve, 100)); // 2 second delay
        setRobots(withAddress);
        setFiltered(withAddress);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch robots:", err);
      }
    })();
  }, []);

  // Apply status filter and keep sorted by ID
  useEffect(() => {
    const list =
      statusFilter === 'all'
        ? [...robots]
        : robots.filter(r => r.status === statusFilter);
    // Ensure sorted by ID
    list.sort((a, b) => a.id - b.id);
    setFiltered(list);
    setSelected(null);
  }, [statusFilter, robots]);

  // Update status API
  const handleStatusChange = async (id: number, newStatus: RobotStatus) => {
    try {
      await fetch("/api/robot", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      setRobots(prev => {
        const updated = prev.map(r => (r.id === id ? { ...r, status: newStatus } : r));
        // Keep sorted
        updated.sort((a, b) => a.id - b.id);
        return updated;
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch orders for a busy robot
  const fetchOrders = async (robotId: number) => {
    try {
      const res = await fetch(`/api/robot?id=${robotId}`);
      const { orders }: { orders: OrderInfo[] } = await res.json();
      // filter out completed and sort by order ID
      const pending = orders
        .filter(o => o.status !== 'completed')
        .sort((a, b) => a.id - b.id);
      setOrdersMap(prev => ({ ...prev, [robotId]: pending }));
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  if (isLoading) {
    return <Loading fullScreen text="Loading..." spinnerSize="lg" />;
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Robot Locator</h1>
      <div className="pl-8 pr-8 flex flex-col items-center">
        <div ref={topRef} />
        <div className="h-80 w-full mb-6">
          <Roboo apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      robots={selected ? [selected] : filtered}
      center={{ lat: 0, lng: 0 }}  height="100%" />
        </div>
      </div>

      {/* Filter combobox */}
      <div className="pl-10 mb-4 w-full flex">
        <select
          id="status"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as 'all' | RobotStatus)}
          className="border border-gray-300 rounded p-2 bg-slate-700 text-white"
        >
          <option value="all">All Statuses</option>
          {robotStatusEnum.enumValues.map(status => (
            <option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Robot cards */}
      <div className="p-4 min-h-screen bg-slate-950">
        <div className="pl-6 pr-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(r => (
            <div
              key={r.id}
              className="p-4 rounded-lg shadow border border-gray-200 bg-slate-600 text-zinc-300"
            >
              <div className="font-bold text-xl font-mono mb-2">
                {r.id} - {r.robotId} 🤖
              </div>

              <div className="mb-2">
                <div className="italic font-semibold text-sm">Last location:</div>
                <div className="text-xs">{r.address}</div>
              </div>

              <select
                value={r.status}
                onChange={e => handleStatusChange(r.id, e.target.value as RobotStatus)}
                className={`mt-2 block w-full border border-gray-300 rounded p-2 text-white font-bold ${
                  r.status === 'busy'
                    ? 'bg-red-700'
                    : r.status === 'available'
                    ? 'bg-green-600'
                    : 'bg-gray-600'
                }`}
              >
                {robotStatusEnum.enumValues.map(status => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>

              {/* Show on map button */}
              <button
                onClick={() => {
                  topRef.current?.scrollIntoView({ behavior: 'smooth' });
                  setSelected(r);
                }}
                className="mt-4 w-full bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Show on map
              </button>

              {/* If busy, show View Orders button */}
              {r.status === 'busy' && (
                <>
                  <button
                    onClick={() => fetchOrders(r.id)}
                    className="mt-2 w-full bg-lime-700 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded"
                  >
                    View Orders
                  </button>

                  {/* Display orders if fetched */}
                  {ordersMap[r.id] && (
                    <ul className="mt-2 space-y-2 text-xs">
                      {ordersMap[r.id]!.map(o => (
                        <li key={o.id} className="border-t border-gray-500 pt-2">
                          <div><strong>Order #{o.id}</strong> — {o.status}</div>
                          <div>Client: {o.client.firstName}</div>
                          <div>Restaurant: {o.restaurant.name}</div>
                          <div>Items:</div>
                          <ul className="list-disc list-inside">
                            {o.items.map((it, i) => (
                              <li key={i}>{it.description}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

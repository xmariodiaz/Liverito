'use client';

import { useEffect, useState } from 'react';

export type Robot = {
  id: number;
  robotId: string;
  status: 'available' | 'busy' | 'offline';
  lastKnownLocation: string;
  address?: string;
};

const reverseGeocodeWithGoogle = async (lat: number, lng: number): Promise<string> => {
  try {
    const res = await fetch(`/api/geo?lat=${lat}&lng=${lng}`);
    const data = await res.json();
    return data.results?.[0]?.formatted_address || `${lat}, ${lng}`;
  } catch {
    return `${lat}, ${lng}`;
  }
};

export default function Page() {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [statusFilter, setStatusFilter] = useState<'all' | Robot['status']>('all');

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const res = await fetch('/api/robot');
        const data: Robot[] = await res.json();

        const robotsWithAddress = await Promise.all(
          data.map(async (robot) => {
            const [lat, lon] = robot.lastKnownLocation.split(',').map(Number);
            const address = await reverseGeocodeWithGoogle(lat, lon);
            return { ...robot, address };
          })
        );

        // Sort robots by id before setting state
        const sortedRobots = robotsWithAddress.sort((a, b) => a.id - b.id);
        setRobots(sortedRobots);
      } catch (err) {
        console.error('Failed to fetch robots:', err);
      }
    };
    fetchRobots();
  }, []);

  const updateStatus = async (id: number, newStatus: Robot['status']) => {
    try {
      await fetch('/api/robot', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      setRobots((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
      );
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  // Apply status filter for rendering
  const visibleRobots =
    statusFilter === 'all'
      ? robots
      : robots.filter((r) => r.status === statusFilter);

  return (
    <div className="p-4 min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-6 text-zinc-400">Robot Dashboard</h1>

      {/* Filter by status */}
      <div className="mb-4">
        <label htmlFor="statusFilter" className="text-zinc-300 mr-2">
          Status:
        </label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as 'all' | Robot['status'])}
          className="border border-gray-300 rounded p-2 bg-slate-700 text-white"
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="busy">Busy</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleRobots.map((robot) => (
          <div
            key={robot.id}
            className="p-4 rounded-lg shadow border border-gray-200 bg-slate-600 text-zinc-300"
          >
            <div className="font-bold text-xl font-mono mb-2">
              {robot.id} - {robot.robotId} 🤖
            </div>
            <div>
              <div className="italic font-semibold text-sm">Last location:</div>
              <div className="text-xs">
                {robot.address || robot.lastKnownLocation}
              </div>
            </div>
            <select
              value={robot.status}
              onChange={(e) =>
                updateStatus(robot.id, e.target.value as Robot['status'])
              }
              className={`mt-2 border border-gray-300 rounded p-2 w-full text-white font-bold ${
                robot.status === 'busy'
                  ? 'bg-red-700'
                  : robot.status === 'available'
                  ? 'bg-green-600'
                  : 'bg-gray-600'
              }`}
            >
              <option value="available">Available</option>
              <option value="busy">Busy</option>
              <option value="offline">Offline</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Roboo from "./components/Roboo";
import type { Robot as RoboType } from "@/db/schema";

export default function RobotsPage() {
  const [robots, setRobots] = useState<RoboType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const res = await fetch('/api/robot');
        const data: RoboType[] = await res.json();
        setRobots(data);
      } catch (err) {
        console.error('Failed to fetch robots:', err);
      }
    };
    fetchRobots();
  }, []);

  // Only show the robot whose numeric ID matches the search term
  const idFilter = parseInt(searchTerm, 10);
  const filteredRobots =
    searchTerm.trim() === '' || isNaN(idFilter)
      ? []
      : robots.filter(r => r.id === idFilter);

  return (
    <div className="p-6 bg-gray-500 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Robot Locator</h1>

      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Enter Robot Number (ID):
        </label>
        <input
          id="search"
          type="text"
          placeholder="e.g. 5"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="h-[500px]">
        <Roboo robots={filteredRobots} height="100%" />
      </div>
    </div>
  );
}

'use client';
import React, { useEffect, useMemo, useState } from "react";
import { order, restaurant, orderStatusEnum } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import type {OrderStatus} from "@/db/schema"
import Loading from "@/components/Loading"
const statusOptions: OrderStatus[] = orderStatusEnum.enumValues;

const statusDisplay: Record<OrderStatus, { color: string; emoji: string }> = {
  pending: { color: "text-amber-400", emoji: "⏳" },
  assigned: { color: "text-sky-400", emoji: "🤖" },
  picked_up: { color: "text-indigo-500", emoji: "🚚" },
  delivered: { color: "text-emerald-500", emoji: "📦" },
  completed: { color: "text-slate-500", emoji: "✅" },
};
const getStatusDisplay = (status: OrderStatus | null) => {
  return statusDisplay[status ?? "pending"]; // Default to "pending" if null
};

// Infer types from schema
type Order = InferSelectModel<typeof order> & {
  restaurant?: {
    name: string | null;
    category: string | null;
  };
  clientName?: string | null;
  clientAddress?: string | null;
  robotId?: number | null;
};
type Restaurant = InferSelectModel<typeof restaurant>;
type Robot = {
  id: number;
  robotId: string;
  status: string;
};

type Client = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};

export default function OrderDashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [robots, setRobots] = useState<Robot[]>([]);
  const [filter, setFilter] = useState<OrderStatus | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<string | "all">("all");
  const [restaurantFilter, setRestaurantFilter] = useState<number | "all">("all");
  const [assigningOrderId, setAssigningOrderId] = useState<number | null>(null);
  const [clientSearch, setClientSearch] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersRes, restaurantsRes] = await Promise.all([
          fetch(`/api/orders${filter !== "all" ? `?status=${filter}` : ""}`),
          fetch("/api/restaurants"),
        ]);

        const ordersData: Order[] = await ordersRes.json();
        const restaurantsData: Restaurant[] = await restaurantsRes.json();

        setRestaurants(restaurantsData);

        const ordersWithClientInfo = await Promise.all(
          ordersData.map(async (order) => {
            const match = restaurantsData.find((r) => r.id === order.restaurantId);
            let clientName = "Unknown";
            let clientAddress = "";
            try {
              const clientRes = await fetch(`/api/customer?id=${order.clientId}`);
              const clientList: Client[] = await clientRes.json();
              const client = clientList[0];
              if (client?.firstName && client?.lastName) {
                clientName = `${client.firstName} ${client.lastName}`;
              }
              if (client?.address) {
                clientAddress = client.address;
              }
              setClients((prev) => [...prev, client]);
            } catch (err) {
              console.error("Failed to fetch client info", err);
            }
            return {
              ...order,
              restaurant: match ? { name: match.name, category: match.category } : undefined,
              clientName,
              clientAddress,
            };
          })
        );
        setIsLoading(false);
        ordersWithClientInfo.sort((a, b) => a.id - b.id);
        setOrders(ordersWithClientInfo);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [filter]);

  const filteredOrders = useMemo(() => {
    return orders.filter(
      (order) =>
        (categoryFilter === "all" || order.restaurant?.category === categoryFilter) &&
        (restaurantFilter === "all" || order.restaurantId === restaurantFilter) &&
        (clientSearch === "" || order.clientName?.toLowerCase().includes(clientSearch.toLowerCase()))
    );
  }, [orders, categoryFilter, restaurantFilter, clientSearch]);

  const handleAssignRobot = async (orderId: number) => {
    setAssigningOrderId(orderId);
    try {
      const res = await fetch("/api/robot?status=available");
      const data: Robot[] = await res.json();
      setRobots(data);
    } catch (err) {
      console.error("Failed to fetch robots", err);
    }
  };

  const confirmAssign = async (robot: Robot, orderId: number, clientId: number) => {
    try {
      await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, clientId, robotId: robot.id, status: "assigned" }),
      });

      await fetch("/api/robot", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: robot.id, status: "busy" }),
      });

      setAssigningOrderId(null);
      location.reload();
    } catch (err) {
      console.error("Failed to assign robot", err);
    }
  };

  const updateStatus = async (orderId: number, clientId: number, status: OrderStatus) => {
    try {
      await fetch("/api/orders", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, clientId, status }),
      });

      if (status === "delivered" || status === "completed") {
        const order = orders.find((o) => o.id === orderId);
        const client = clients.find((c) => c.id === clientId);
        if (order?.robotId) {
          await fetch("/api/robot", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: order.robotId, status: "available", lastKnownLocation: client?.address ?? null }),
          });
        }
      }

      location.reload();
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };
  if (isLoading) {
    return <Loading fullScreen text="Loading..." spinnerSize="lg" />;
  }
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          className="p-2 border border-gray-300 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value as OrderStatus | "all")}
        >
          <option value="all">All Statuses</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          {[...new Set(restaurants.map((r) => r.category).filter((cat): cat is Exclude<typeof cat, null> => cat !== null))].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded"
          value={restaurantFilter}
          onChange={(e) => setRestaurantFilter(e.target.value === "all" ? "all" : parseInt(e.target.value))}
        >
          <option value="all">All Restaurants</option>
          {restaurants.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by client name"
          className="p-2 bg-gray-600 border border-gray-300 rounded"
          value={clientSearch}
          onChange={(e) => setClientSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="border p-4 rounded shadow bg-gray-800">
            <div className="font-bold">Order #{order.id}</div>
            <div>Client: {order.clientName}</div>
            <div>Restaurant: {order.restaurant?.name}</div>
            <div>Category: {order.restaurant?.category}</div>
            <div>Robot: {order.robotId ?? 'N/A'}</div>
            <div className={`mt-2 ${getStatusDisplay(order.status).color}`}>
              {getStatusDisplay(order.status).emoji}
              <select
                className={`ml-2 border p-1 rounded ${getStatusDisplay(order.status).color}`}
                value={order.status ?? "pending"}
                disabled={order.status === "completed"}
                onChange={(e) => updateStatus(order.id, order.clientId, e.target.value as OrderStatus)}
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            {order.status === "completed" && (
                <button
                className="mt-2 px-3 py-1 rounded border bg-red-500 text-white hover:bg-red-600 text-sm"
                onClick={async () => {
                  try {
                    await fetch("/api/orders", {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ orderId: order.id, clientId: order.clientId }),
                    });
                    location.reload();
                  } catch (err) {
                    console.error("Failed to delete order", err);
                  }
                }}
              >
                Delete Order
              </button>
            )}    


            {order.status === "pending" && (
              <button
                className="px-3 py-1 rounded border text-gray-800  bg-amber-400 hover:bg-amber-600  hover:text-white text-sm mt-2"
                onClick={() => handleAssignRobot(order.id)}
              >
                Assign Robot
              </button>
            )}
            {assigningOrderId === order.id && (
              <div className="mt-2">
                {robots.map((robot) => (
                  <button
                    key={robot.id}
                    className="block w-full text-left border p-2 my-1 rounded hover:bg-gray-500"
                    onClick={() => confirmAssign(robot, order.id, order.clientId)}
                  >
                    {robot.robotId}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

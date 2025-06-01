// Create src/lib/db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Create a connection pool (reuse connections)
const pool = new Pool({
  connectionString: process.env.DATABASE!,
  max: 10, // Maximum number of connections in pool
  idleTimeoutMillis: 30000, // Close idle connections after 30 seconds
  connectionTimeoutMillis: 15000, // Timeout for establishing connection
  keepAlive: true,
});

// Single database instance to export
export const db = drizzle(pool);

// Optional: Graceful shutdown
process.on('SIGINT', () => {
  pool.end();
});

process.on('SIGTERM', () => {
  pool.end();
});
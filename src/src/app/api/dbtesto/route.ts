// Create: src/app/api/test-db/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sql } from "drizzle-orm";

export async function GET() {
  try {
    const start = Date.now();
    
    // Test basic connection
    const result = await db.execute(sql`SELECT 1 as test`);
    
    // Test a simple query on your actual tables (optional)
    // const tableTest = await db.select().from(yourTable).limit(1);
    
    const duration = Date.now() - start;
    
    return NextResponse.json({
      status: "success",
      message: "Database connection working",
      queryTime: `${duration}ms`,
      result: result.rows[0],
      timestamp: new Date().toISOString(),
      // Optional: Show connection pool stats
      // poolStats: {
      //   totalCount: db.pool?.totalCount,
      //   idleCount: db.pool?.idleCount,
      //   waitingCount: db.pool?.waitingCount
      // }
    });
  } catch (error) {
    console.error("Database connection error:", error);
    
    return NextResponse.json(
      {
        status: "error",
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client as PgClient } from "pg";
import { client as clientTable } from "@/db/schema";
import { eq } from "drizzle-orm";

const pgClient = new PgClient({ connectionString: process.env.DATABASE });
await pgClient.connect();
const db = drizzle(pgClient);

///customer?id=1
/**
 * @swagger
 * /api/customer:
 *   get:
 *     summary: Get customer(s)
 *     tags:
 *       - Customers
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: false
 *         description: If provided, fetches a specific customer by ID - /customer?id=1
 *     responses:
 *       200:
 *         description: Customer(s) retrieved
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - type: array
 *                   items:
 *                     $ref: '#/components/schemas/Customer'
 *                 - $ref: '#/components/schemas/Customer'
 *       400:
 *         description: Invalid ID
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         address:
 *           type: string
 */

// GET /api/customer
export async function GET(req: NextRequest) {
  try {
    const idParam = req.nextUrl.searchParams.get("id");
    let result;

    if (idParam) {
      const id = parseInt(idParam, 10);
      if (isNaN(id)) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
      }

      result = await db.select().from(clientTable).where(eq(clientTable.id, id));
    } else {
      result = await db.select().from(clientTable);
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Customer fetch failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

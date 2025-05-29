import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { order, OrderStatus, orderStatusEnum } from "@/db/schema";
import "dotenv/config";
import { and, eq } from "drizzle-orm";

const client = new Client({ connectionString: process.env.DATABASE });
client.connect();
const db = drizzle(client);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     tags:
 *       - Orders
 *     summary: Create a new order
 *     description: Creates a new delivery order from a client to a restaurant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientId
 *               - restaurantId
 *               - items
 *             properties:
 *               clientId:
 *                 type: integer
 *               restaurantId:
 *                 type: integer
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     quantity:
 *                       type: integer
 *                     description:
 *                       type: string
 *                     unitPrice:
 *                       type: number
 *     responses:
 *       201:
 *         description: Created
 */

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { clientId, items, restaurantId } = body;

      //validate that there are items in the basket
      if (!items || items.length === 0) {
        return NextResponse.json(
          { error: "Items are required" },
          { status: 400 }
        );
      }

      const newOrder = await db
        .insert(order)
        .values({
          clientId: clientId,
          restaurantId: restaurantId,
          items: items, // array of { quantity, description, unitPrice }
          status: "pending",
          createdAt: new Date(),
          robotId:null
        })
        .returning();

      return NextResponse.json(
        { message: "Order created", newOrder },
        { status: 201 }
      );
    } catch (err) {
      console.error("----Order creation failed:", err);
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 500 });
  }
}

/**
 * @swagger
 * /api/orders:
 *   put:
 *     summary: Update an existing order (only if status is 'pending' and belongs to the client)
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderId
 *               - clientId
 *             properties:
 *               orderId:
 *                 type: integer
 *                 description: ID of the order to update
 *               clientId:
 *                 type: integer
 *                 description: ID of the client who owns the order
 *               restaurantId:
 *                 type: integer
 *                 description: New restaurant ID (optional)
 *               items:
 *                 type: array
 *                 description: Updated list of items (optional)
 *                 items:
 *                   type: object
 *                   required:
 *                     - quantity
 *                     - description
 *                     - unitPrice
 *                   properties:
 *                     quantity:
 *                       type: integer
 *                     description:
 *                       type: string
 *                     unitPrice:
 *                       type: number
 *                       format: float
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       400:
 *         description: Missing required fields or nothing to update
 *       403:
 *         description: Only pending orders can be updated
 *       404:
 *         description: Order not found or does not belong to client
 *       500:
 *         description: Internal server error
 */


export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId, items, restaurantId, robotId, clientId, status } = body;

    if (!orderId || !clientId) {
      console.log(`Issue client id ${orderId} - ${clientId}`);
      return NextResponse.json(
        { error: "Order ID  AND clientId are required" },
        { status: 400 }
      );
    }

    // Check if the order exists and get its status
    // also if the order belongs to the same customer
    const existing = await db
      .select()
      .from(order)
      .where(and(eq(order.id, orderId), eq(order.clientId, clientId)));
    if (existing.length === 0) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const currentOrder = existing[0];

    // Prevent update if not pending
    if (currentOrder.status == "completed") {
      return NextResponse.json(
        {
          error: `completed orders cant be updated (current status: '${currentOrder.status}'`,
        },
        { status: 403 }
      );
    }

    // Build update payload
    const updateData: Record<string, any> = {};
    if (items) updateData.items = items;
    if (restaurantId) updateData.restaurantId = restaurantId;
    if (robotId) updateData.robotId = robotId;
    if (status) updateData.status = status;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const result = await db
      .update(order)
      .set(updateData)
      .where(eq(order.id, orderId));

    return NextResponse.json({ message: "Order updated", result });
  } catch (error) {
    console.error("Update failed:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * @swagger
 * /api/orders:
 *   delete:
 *     summary: Delete an order (only if status is 'pending')
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [orderId, clientId]
 *             properties:
 *               orderId:
 *                 type: integer
 *               clientId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Order deleted
 *       400:
 *         description: Missing order ID or client ID
 *       403:
 *         description: Forbidden – only pending orders can be deleted
 *       404:
 *         description: Order not found
 *       500:
 *         description: Server error
 */
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { orderId,clientId } = body;

    if (!orderId || !clientId) {
      return NextResponse.json({ error: "Order ID And clientId are required" }, { status: 400 });
    }

    // Check if the order exists
    const existing = await db.select().from(order).where(and(eq(order.id, orderId), eq(order.clientId, clientId)));
    if (existing.length === 0) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const currentOrder = existing[0];

    // Only allow deletion if status is 'pending'
    if (currentOrder.status !== "completed") {
      console.log(currentOrder.status);
      return NextResponse.json(
        { error: `Only 'completed' orders can be deleted (current status: '${currentOrder.status}')` },
        { status: 403 }
      );
    }

    // Delete the order
    await db.delete(order).where(eq(order.id, orderId));

    return NextResponse.json({ message: "Order deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get list of orders (optionally filtered by clientId and/or status)
 *     tags:
 *       - Orders
 *     parameters:
 *       - in: query
 *         name: clientId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Filter orders by client ID
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, assigned, picked_up, delivered, completed]
 *         required: false
 *         description: Filter orders by order status
 *     responses:
 *       200:
 *         description: List of matching orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   clientId:
 *                     type: integer
 *                   restaurantId:
 *                     type: integer
 *                   robotId:
 *                     type: integer
 *                   items:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         quantity:
 *                           type: integer
 *                         description:
 *                           type: string
 *                         unitPrice:
 *                           type: number
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   completedAt:
 *                     type: string
 *                     format: date-time
 *                     nullable: true
 *                   status:
 *                     type: string
 *                     enum: [pending, assigned, picked_up, delivered, completed]
 *       500:
 *         description: Internal server error
 */

// GET /api/orders
const allowedStatuses: OrderStatus[] = orderStatusEnum.enumValues;
function isValidStatusOrder(value: any): value is OrderStatus {
  return allowedStatuses.includes(value);
}
export async function GET(req: NextRequest) {
  try {
    const clientIdParam = req.nextUrl.searchParams.get("clientId");
    const statusParam = req.nextUrl.searchParams.get("status");

    const whereClause = [];

    if (clientIdParam) {
      const clientId = parseInt(clientIdParam, 10);
      if (!isNaN(clientId)) {
        whereClause.push(eq(order.clientId, clientId));
      }
    }

    if (statusParam && isValidStatusOrder(statusParam) ) {
      whereClause.push(eq(order.status, statusParam));
    }

    const result =
      whereClause.length > 0
        ? await db.select().from(order).where(and(...whereClause))
        : await db.select().from(order);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Fetch orders failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
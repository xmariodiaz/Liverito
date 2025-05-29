import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { robot, order,client,restaurant, robotStatusEnum } from "@/db/schema";
import type { RobotStatus, Robot, NewRobot } from "@/db/schema";
import { eq } from "drizzle-orm";
import { inArray } from "drizzle-orm";

const pgclient = new Client({ connectionString: process.env.DATABASE });
await pgclient.connect();
const db = drizzle(pgclient);

// Declaring types for security reasons
/*const allowedStatuses: RobotStatus[] = robotStatusEnum.enumValues;
function isRobotStatus(value: any): value is RobotStatus {
  return allowedStatuses.includes(value);
}*/

/**
 * @swagger
 * tags:
 *   - name: Robots
 *     description: Robot management endpoints
 *
 * /api/robot:
 *   get:
 *     tags:
 *       - Robots
 *     summary: Get robots or a robot with its order
 *     description: >
 *       - No params returns all robots, optionally filtered by status.  
 *       - Using query params `?id=1` or `?status=busy`. 
 *       - Or use `?id=1` to fetch a specific robot and its orders (with client and restaurant info).
 *     parameters:
 *       - in: query
 *         name: status
 *         required: false
 *         description: Filter by robot status
 *         schema:
 *           type: string
 *           enum: [available, busy, offline]
 *       - in: query
 *         name: id
 *         required: false
 *         description: Fetch a robot by its ID and return its orders
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Robot or list of robots
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Robot not found
 *   post:
 *     tags:
 *       - Robots
 *     summary: Register a new robot
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             robotId: "OWL020"
 *             status: "available"
 *             lastKnownLocation: "43.6532, -79.3832"
 *     responses:
 *       201:
 *         description: Robot registered
 *       400:
 *         description: Missing or invalid input
 *   put:
 *     tags:
 *       - Robots
 *     summary: Update robot data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             id: 1
 *             status: "offline"
 *             lastKnownLocation: "43.6540, -79.3840"
 *     responses:
 *       200:
 *         description: Robot updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Robot not found
 */

// POST /api/robot
export async function POST(req: NextRequest) {
  try {
    const body: NewRobot = await req.json();
    const { robotId, status, lastKnownLocation } = body;

    if (!robotId || !status ) {
      return NextResponse.json({ error: "robotId, status are required" }, { status: 400 });
    }

    if (!isRobotStatus(status)) {
      return NextResponse.json({ error: "Invalid robot status" }, { status: 400 });
    }

    const result = await db.insert(robot).values({ robotId, status, lastKnownLocation: lastKnownLocation ?? null });
    return NextResponse.json({ message: "Robot registered", result }, { status: 201 });
  } catch (err) {
    console.error("Robot create failed:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// PUT /api/robot
export async function PUT(req: NextRequest) {
  try {
    const body: Partial<Robot> = await req.json();
    const { id,robotId, status, lastKnownLocation } = body;

    if (!id) {
      return NextResponse.json({ error: "Robot ID is required" }, { status: 400 });
    }

    const existing = await db.select().from(robot).where(eq(robot.id, id));
    if (existing.length === 0) {
      return NextResponse.json({ error: "Robot not found" }, { status: 404 });
    }

    const updateFields: Partial<Robot> = {};
    if (status) {
      if (!isRobotStatus(status)) {
        return NextResponse.json({ error: "Invalid robot status" }, { status: 400 });
      }
      updateFields.status = status;
    }
    if (lastKnownLocation) updateFields.lastKnownLocation = lastKnownLocation;
    if (robotId) updateFields.robotId = robotId;

    if (Object.keys(updateFields).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const result = await db.update(robot).set(updateFields).where(eq(robot.id, id));
    return NextResponse.json({ message: "Robot updated", result });
  } catch (err) {
    console.error("Robot update failed:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


//old api keep it just in case
// GET /api/robot 
/**
 * 
 * @param /robot?status=offline
 */
/*
export async function GET(req: NextRequest) {
  try {
    const status = req.nextUrl.searchParams.get("status");
    let result;
    console.log(status); ///Todo: lets check if status is querying

    if (status && isRobotStatus(status)) {
      result = await db.select().from(robot).where(eq(robot.status, status));
    } else {
      result = await db.select().from(robot);
    }

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error("Robot fetch failed:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
*/
const allowedRobotStatus: RobotStatus[] = robotStatusEnum.enumValues;
function isRobotStatus(value: string | null): value is RobotStatus {
  return value !== null && allowedRobotStatus.includes(value as RobotStatus);
}

// This new api will fetch the data creating joins with order restaurant and client and will throw a json with the data requested to avoid 
// making more api calls to the other endpoinds and bloating the frontend.
export async function GET(req: NextRequest) {
  try {
    const robotIdParam = req.nextUrl.searchParams.get("id");
    const statusParam = req.nextUrl.searchParams.get("status");
    //const includeOrders = req.nextUrl.searchParams.get("withOrders");

    // Case: Fetch robot + joined orders
    if (robotIdParam /*&& includeOrders*/) {
      const robots = await db
        .select()
        .from(robot)
        .where(eq(robot.id, parseInt(robotIdParam,10)));
      const robotMatch = robots[0];

      if (!robotMatch) {
        return NextResponse.json({ error: "Robot not found" }, { status: 404 });
      }

      const orders = await db
        .select()
        .from(order)
        .where(eq(order.robotId, robotMatch.id));

      if (orders.length === 0) {
        return NextResponse.json({ robot: robotMatch, orders: [] });
      }

      const clientIds = [...new Set(orders.map((o) => o.clientId))];
      const restaurantIds = [...new Set(orders.map((o) => o.restaurantId))];


      //TODO: SQL tag what a nightmare or make not null in order to avoid TS checking types --- Done
      const [clients, restaurants] = await Promise.all([
        db.select().from(client).where(inArray(client.id, clientIds)),
        db.select().from(restaurant).where(inArray(restaurant.id, restaurantIds)),
      ]);

      const clientMap = Object.fromEntries(clients.map((c) => [c.id, c]));
      const restaurantMap = Object.fromEntries(restaurants.map((r) => [r.id, r]));

      const enrichedOrders = orders.map((o) => ({
        ...o,
        client: clientMap[o.clientId],
        restaurant: {
          name: restaurantMap[o.restaurantId]?.name,
          address: restaurantMap[o.restaurantId]?.address,
          category: restaurantMap[o.restaurantId]?.category,
        },
      }));

      return NextResponse.json({ robot: robotMatch, orders: enrichedOrders });
    }

    // Case: Filter by robot status
    if (statusParam && isRobotStatus(statusParam)) {
      const result = await db
        .select()
        .from(robot)
        .where(eq(robot.status, statusParam));
      return NextResponse.json(result, { status: 200 });
    }

    //Default: return all robots
    if(!statusParam && !robotIdParam){
    const result = await db.select().from(robot);
    return NextResponse.json(result, { status: 200 });
    }
  } catch (err) {
    console.error("Robot fetch failed or bad request:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
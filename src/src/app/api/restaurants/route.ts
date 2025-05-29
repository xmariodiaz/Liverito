import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { restaurant, restoCategoryEnum } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { Restaurant, NewRestaurant, RestoCategory } from "@/db/schema";

const client = new Client({ connectionString: process.env.DATABASE });
await client.connect();
const db = drizzle(client);

/**
 * @swagger
 * /api/restaurants:
 *   post:
 *     summary: Create a new restaurant
 *     tags:
 *       - Restaurants
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, category, address]
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               address:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               url:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Restaurant created
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 *
 *   put:
 *     summary: Update a restaurant
 *     tags:
 *       - Restaurants
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [restaurantId]
 *             properties:
 *               restaurantId:
 *                 type: integer
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               address:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               url:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Restaurant updated
 *       400:
 *         description: Missing ID or no data to update
 *       404:
 *         description: Restaurant not found
 *       500:
 *         description: Server error
 *
 */



/**   delete:
 *     summary: Delete a restaurant
 *     tags:
 *       - Restaurants
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [restaurantId]
 *             properties:
 *               restaurantId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Restaurant deleted
 *       400:
 *         description: Missing restaurant ID
 *       404:
 *         description: Restaurant not found
 *       500:
 *         description: Server error
 */

// POST /api/restaurants
export async function POST(req: NextRequest) {
  try {
    const body: NewRestaurant = await req.json();
    const { name, category, address } = body;

    if (!name || !category || !address) {
      return NextResponse.json(
        { error: "Name, address and category are required" },
        { status: 400 }
      );
    }
    //console.log(body); // TODO: delete Flags logs
    const result = await db.insert(restaurant).values(body);

    return NextResponse.json(
      { message: "Restaurant created", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create failed:", error);
    return NextResponse.json({ error: "Server errorxxxxx" }, { status: 500 });
  }
}

//Put
export async function PUT(req: NextRequest) {
  try {
    const body: Partial<Restaurant> = await req.json();
    const { restaurantId, ...updateFields } = body as {
      restaurantId?: number;
    } & Partial<Restaurant>;

    if (!restaurantId) {
      return NextResponse.json(
        { error: "Restaurant ID is required" },
        { status: 400 }
      );
    }

    const existing = await db
      .select()
      .from(restaurant)
      .where(eq(restaurant.id, restaurantId));
    if (existing.length === 0) {
      return NextResponse.json(
        { error: "Restaurant not found" },
        { status: 404 }
      );
    }

    if (Object.keys(updateFields).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const result = await db
      .update(restaurant)
      .set(updateFields)
      .where(eq(restaurant.id, restaurantId));
    return NextResponse.json({ message: "Restaurant updated", result });
  } catch (error) {
    console.error("Update failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

//// DELETE /api/restaurants
/*export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { restaurantId } = body;

    if (!restaurantId) {
      return NextResponse.json(
        { error: "Restaurant ID is required" },
        { status: 400 }
      );
    }

    const existing = await db
      .select()
      .from(restaurant)
      .where(eq(restaurant.id, restaurantId));
    if (existing.length === 0) {
      return NextResponse.json(
        { error: "Restaurant not found" },
        { status: 404 }
      );
    }

    await db.delete(restaurant).where(eq(restaurant.id, restaurantId));
    return NextResponse.json({ message: "Restaurant deleted" });
  } catch (error) {
    console.error("Delete failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}*/

/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     summary: Get all restaurants or filter by category
 *     description: Returns all restaurants if no query param is provided. If `category` is passed, filters by that category.
 *     tags:
 *       - Restaurants
 *     parameters:
 *       - in: query
 *         name: category
 *         required: false
 *         schema:
 *           type: string
 *           enum:
 *             - Chicken
 *             - Burgers
 *             - AsianFood
 *             - IndianFood
 *             - CaribeanFood
 *             - Cuy
 *             - Mexican
 *             - Colombian
 *             - Steak
 *             - Icecream
 *             - Pizza
 *             - Vegan
 *             - Healthy
 *         description: Optional. If provided, filters the restaurants by this category.
 *     responses:
 *       200:
 *         description: A list of restaurants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   phoneNumber:
 *                     type: string
 *                   address:
 *                     type: string
 *                   url:
 *                     type: string
 *                   email:
 *                     type: string
 *                   category:
 *                     type: string
 *       500:
 *         description: Server error
 */

const allowedCategories: RestoCategory[] = restoCategoryEnum.enumValues;
function isRestoCategory(value: string | null): value is RestoCategory {
  return value !== null && allowedCategories.includes(value as RestoCategory);
}
/**
 * @param /restaurants?category=Colombian
 */
// GET /api/restaurants
export async function GET(req: NextRequest) {
  try {


    const categoryParam = req.nextUrl.searchParams.get("category");
    console.log("Query param: ", categoryParam);

    let results;
    if (categoryParam && isRestoCategory(categoryParam)) {
      results = await db
        .select()
        .from(restaurant)
        .where(eq(restaurant.category, categoryParam));
    } else {
      results = await db.select().from(restaurant);
    }

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("GET /api/restaurants failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

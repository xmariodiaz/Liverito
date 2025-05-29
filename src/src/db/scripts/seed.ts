import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { client as clients, restaurant, robot, order } from "../schema";
import {restaurantsList, clientsList, robotList, orderList } from "../scripts/seedData"
import "dotenv/config";



const client = new Client({
    connectionString: process.env.DATABASE,
  });
  
  const db = drizzle(client);
  
  async function seed() {
    try {
      await client.connect();
  
      await db.insert(clients).values(clientsList);
  
      await db.insert(restaurant).values(restaurantsList);
  
      await db.insert(robot).values(robotList);

      await db.insert(order).values(orderList);
  
      console.log("OK Seed complete");
    } catch (err) {
      console.error(":( Seed failed:", err);
    } finally {
      await client.end();
    }
  }
  
  seed();
import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core";

/**
 * CLient /user
 */

const client = pgTable("client", {
  id: serial("id").primaryKey(),
  firstName: varchar("firstName", { length: 50 }),
  lastName: varchar("lastName", { length: 50 }),
  phoneNumber: varchar("phoneNumber", { length: 20 }),
  address: varchar("address", { length: 255 }),
});

export type clientType = typeof client.$inferSelect; // to rewrite or update

/**
 * Restaurant
 */
//I seeded the categories manually
export const restoCategoryEnum = pgEnum("restoCategory", [
  "Chicken",
  "Burgers",
  "AsianFood",
  "IndianFood",
  "CaribeanFood",
  "Mexican",
  "Colombian",
  "Steak",
  "Icecream",
  "Pizza",
  "Vegan",
  "Healthy",
  "Italian"
]);
export type RestoCategory = (typeof restoCategoryEnum.enumValues)[number];
export type Restaurant = typeof restaurant.$inferSelect; // to rewrite or update
export type NewRestaurant = typeof restaurant.$inferInsert; // new item

const restaurant = pgTable("restaurant", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }),
  phoneNumber: varchar("phoneNumber", { length: 20 }),
  address: varchar("address", { length: 255 }),
  url: varchar("url", { length: 100 }),
  email: varchar("email", { length: 150 }),
  category: restoCategoryEnum("category"),
});



/**
 * Robot
 */
export const robotStatusEnum = pgEnum("robot_status", [
  "available",
  "busy",
  "offline",
]);
export type RobotStatus = (typeof robotStatusEnum.enumValues)[number];
export type Robot = typeof robot.$inferSelect;
export type NewRobot = typeof robot.$inferInsert;
const robot = pgTable("robot", {
  id: serial("id").primaryKey(),
  robotId: varchar("robotId", { length: 50 }),
  status: robotStatusEnum("status").notNull(),
  lastKnownLocation: varchar("lastKnownLocation", { length: 255 }),
});


/**
 * Orders
 */
export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "assigned",
  "picked_up",
  "delivered",
  "completed",
]);

export type OrderStatus =  (typeof orderStatusEnum.enumValues)[number]
const order = pgTable("order", {
  id: serial("id").primaryKey().notNull(),
  clientId: integer("clientId").references(() => client.id).notNull(),
  restaurantId: integer("restaurantId").references(() => restaurant.id).notNull(),
  robotId: integer("robotId").references(() => robot.id)/*.notNull()*/, // incase of new orders the dummy data comes with 0 instead of null
  items: jsonb("items").notNull(), // quantity, description, unitPrice
  createdAt: timestamp("createAt").defaultNow(),
  completedAt: timestamp("completedAt"),
  status: orderStatusEnum("status"),
});

export { order, restaurant, robot, client };

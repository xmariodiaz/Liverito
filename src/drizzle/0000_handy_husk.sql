CREATE TYPE "public"."order_status" AS ENUM('pending', 'assigned', 'picked_up', 'delivered', 'completed');--> statement-breakpoint
CREATE TYPE "public"."restoCategory" AS ENUM('Chicken', 'Burgers', 'AsianFood', 'IndianFood', 'CaribeanFood', 'Mexican', 'Colombian', 'Steak', 'Icecream', 'Pizza', 'Vegan', 'Healthy', 'Italian');--> statement-breakpoint
CREATE TYPE "public"."robot_status" AS ENUM('available', 'busy', 'offline');--> statement-breakpoint
CREATE TABLE "client" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstName" varchar(50),
	"lastName" varchar(50),
	"phoneNumber" varchar(20),
	"address" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "order" (
	"id" serial PRIMARY KEY NOT NULL,
	"clientId" integer NOT NULL,
	"restaurantId" integer NOT NULL,
	"robotId" integer,
	"items" jsonb NOT NULL,
	"createAt" timestamp DEFAULT now(),
	"completedAt" timestamp,
	"status" "order_status"
);
--> statement-breakpoint
CREATE TABLE "restaurant" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50),
	"phoneNumber" varchar(20),
	"address" varchar(255),
	"url" varchar(100),
	"email" varchar(150),
	"category" "restoCategory"
);
--> statement-breakpoint
CREATE TABLE "robot" (
	"id" serial PRIMARY KEY NOT NULL,
	"robotId" varchar(50),
	"status" "robot_status" NOT NULL,
	"lastKnownLocation" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "order" ADD CONSTRAINT "order_clientId_client_id_fk" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order" ADD CONSTRAINT "order_restaurantId_restaurant_id_fk" FOREIGN KEY ("restaurantId") REFERENCES "public"."restaurant"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order" ADD CONSTRAINT "order_robotId_robot_id_fk" FOREIGN KEY ("robotId") REFERENCES "public"."robot"("id") ON DELETE no action ON UPDATE no action;
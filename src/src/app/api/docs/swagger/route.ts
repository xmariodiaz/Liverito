import { createSwaggerSpec } from "next-swagger-doc";
import { NextResponse } from 'next/server';



export async function GET() {
  const spec = createSwaggerSpec({
    apiFolder: "src/app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Liverito API",
        version: "1.0.0",
        description: "Delivery order processing API for Liverito",
      },
    },
  });
  return NextResponse.json(spec);
}
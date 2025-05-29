import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * tags:
 *   - name: Geo
 *     description: Endpoints for geolocation and address lookup
 *
 * /api/geo:
 *   get:
 *     tags:
 *       - Geo
 *     summary: Reverse Geocode Coordinates to Address
 *     description: >
 *       Converts latitude and longitude into a human-readable address using the Google Maps Geocoding API.
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude of the location
 *       - in: query
 *         name: lng
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude of the location
 *     responses:
 *       200:
 *         description: Address returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       formatted_address:
 *                         type: string
 *                 status:
 *                   type: string
 *                   example: OK
 *       400:
 *         description: Missing or invalid parameters
 *       500:
 *         description: Internal server error or Google API failure
 */



export async function GET(req: NextRequest) {
  const lat = req.nextUrl.searchParams.get("lat");
  const lng = req.nextUrl.searchParams.get("lng");

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
  );

  const data = await res.json();
  return NextResponse.json(data);
}

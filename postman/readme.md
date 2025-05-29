# Postman Collection – Liverito API
# 📦 Liverito Postman Collection Overview

This Postman collection defines a RESTful API for the **Liverito Delivery Order System**. It manages delivery operations between clients, restaurants, and robots.

---

## 🔹 1. Orders

Handles creation, updates, and retrieval of food delivery orders.

**Endpoints:**
- `POST /orders` – Create a new order
- `PUT /orders` – Update an existing order
- `DELETE /orders` – Delete an order
- `GET /orders?status=pending` – Retrieve orders filtered by status

**Sample Payload:**
```json
{
  "clientId": 1,
  "restaurantId": 1,
  "items": [
    {
      "quantity": 1,
      "description": "Chicken nuggets",
      "unitPrice": 25
    }
  ]
}
```

---

## 🔹 2. Restaurants

Manages the list of partner restaurants.

**Endpoints:**
- `POST /restaurants` – Add a new restaurant
- `PUT /restaurants` – Update existing restaurant details
- `DELETE /restaurants` – Remove a restaurant
- `GET /restaurants?category=Colombian` – Filter restaurants by category

**Fields:** `name`, `category`, `address`, `phoneNumber`, `email`, `url`

---

## 🔹 3. Robots

Tracks robot availability and location.

**Endpoints:**
- `POST /robot` – Register a robot
- `PUT /robot` – Update a robot's location
- `GET /robot` – List all robots

**Fields:** `robotId`, `status` (`available`, `busy`, `offline`), `lastKnownLocation`

---

## 🔹 4. Customers

Provides customer profile information.

**Endpoint:**
- `GET /customer?id=1` – Get customer details by ID

**Fields:** `firstName`, `lastName`, `phoneNumber`, `address`

---

## 🌐 Environment Variables

- `{{baseUrl}}` → defaults to `http://localhost:3000/api`

Use this as a base URL for all endpoints when importing into Postman.

---

## ✅ How to Use

1. Open [Postman](https://www.postman.com/)
2. Click `Import`
3. Upload `Liverito.postman_collection.json`
4. Set the `baseUrl` environment variable
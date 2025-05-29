import { InferInsertModel } from "drizzle-orm";
import { restaurant, robot, order } from "../schema";

/**
 * The location selected is the great Toronto Area
 */

export const restaurantsList: InferInsertModel<typeof restaurant>[] = [
  {
    name: "Pollo Rico",
    phoneNumber: "416-2001",
    address: "43.6519, -79.3790",
    url: "https://pollorico.ca",
    email: "hello@pollorico.ca",
    category: "Chicken",
  },
  {
    name: "Smash Burger",
    phoneNumber: "416-2002",
    address: "43.6542, -79.3807",
    url: "https://smashburger.ca",
    email: "info@smashburger.ca",
    category: "Burgers",
  },
  {
    name: "Noodle House",
    phoneNumber: "416-2003",
    address: "43.6521, -79.3843",
    url: "https://noodlehouse.ca",
    email: "contact@noodlehouse.ca",
    category: "AsianFood",
  },
  {
    name: "Delhi Curry",
    phoneNumber: "416-2004",
    address: "43.6493, -79.3869",
    url: "https://delhicurry.ca",
    email: "order@delhicurry.ca",
    category: "IndianFood",
  },
  {
    name: "Island Bites",
    phoneNumber: "416-2005",
    address: "43.6477, -79.3795",
    url: "https://islandbites.ca",
    email: "support@islandbites.ca",
    category: "CaribeanFood",
  },
  {
    name: "SuperCuy",
    phoneNumber: "416-2006",
    address: "43.6436, -79.3770",
    url: "https://SuperCuy.ca",
    email: "team@SuperCuy.ca",
    category: "Colombian",
  },
  {
    name: "Taco Machine",
    phoneNumber: "416-2007",
    address: "43.6500, -79.3826",
    url: "https://tacomachine.ca",
    email: "hola@tacomachine.ca",
    category: "Mexican",
  },
  {
    name: "Arepa Bros",
    phoneNumber: "416-2008",
    address: "43.6459, -79.3851",
    url: "https://arepabros.ca",
    email: "arepaaa@arepabros.ca",
    category: "Colombian",
  },
  {
    name: "Grill Boss",
    phoneNumber: "416-2009",
    address: "43.6488, -79.3782",
    url: "https://grillboss.ca",
    email: "flame@grillboss.ca",
    category: "Steak",
  },
  {
    name: "Frost Factory",
    phoneNumber: "416-2010",
    address: "43.6512, -79.3876",
    url: "https://frostfactory.ca",
    email: "scoop@frostfactory.ca",
    category: "Icecream",
  },
  {
    name: "Slice Gang",
    phoneNumber: "416-2011",
    address: "43.6534, -79.3769",
    url: "https://slicegang.ca",
    email: "yo@slicegang.ca",
    category: "Pizza",
  },
  {
    name: "Leaf Life",
    phoneNumber: "416-2012",
    address: "43.6461, -79.3860",
    url: "https://leaflife.ca",
    email: "plant@leaflife.ca",
    category: "Vegan",
  },
  {
    name: "Fit Fuel",
    phoneNumber: "416-2013",
    address: "43.6504, -79.3788",
    url: "https://fitfuel.ca",
    email: "coach@fitfuel.ca",
    category: "Healthy",
  },
  {
    name: "Chicken Shot",
    phoneNumber: "416-2014",
    address: "43.6430, -79.3842",
    url: "https://chickenshot.ca",
    email: "boom@chickenshot.ca",
    category: "Chicken",
  },
  {
    name: "Burger Boost",
    phoneNumber: "416-2015",
    address: "43.6454, -79.3777",
    url: "https://burgerboost.ca",
    email: "bite@burgerboost.ca",
    category: "Burgers",
  },
  {
    name: "Kimchi Club",
    phoneNumber: "416-2016",
    address: "43.6482, -79.3833",
    url: "https://kimchiclub.ca",
    email: "club@kimchiclub.ca",
    category: "AsianFood",
  },
  {
    name: "Bombay Roots",
    phoneNumber: "416-2017",
    address: "43.6428, -79.3865",
    url: "https://bombayroots.ca",
    email: "spice@bombayroots.ca",
    category: "IndianFood",
  },
  {
    name: "Plátano Grill",
    phoneNumber: "416-2018",
    address: "43.6446, -79.3803",
    url: "https://platanogrill.ca",
    email: "platano@platanogrill.ca",
    category: "Colombian",
  },
];

export const clientsList = [
  {
    firstName: "Mario",
    lastName: "D",
    phoneNumber: "555-1001",
    address: "43.650123, -79.381234",
  },
  {
    firstName: "Eva",
    lastName: "Diaz",
    phoneNumber: "555-1002",
    address: "43.648392, -79.384290",
  },
  {
    firstName: "Carla",
    lastName: "Rodriguez",
    phoneNumber: "555-1003",
    address: "43.644857, -79.378210",
  },
  {
    firstName: "David",
    lastName: "Singh",
    phoneNumber: "555-1004",
    address: "43.643321, -79.379512",
  },
  {
    firstName: "Emma",
    lastName: "Chen",
    phoneNumber: "555-1005",
    address: "43.651012, -79.386012",
  },
  {
    firstName: "Frank",
    lastName: "O'Neill",
    phoneNumber: "555-1006",
    address: "43.642799, -79.380100",
  },
  {
    firstName: "Grace",
    lastName: "Kim",
    phoneNumber: "555-1007",
    address: "43.647250, -79.382980",
  },
  {
    firstName: "Hector",
    lastName: "Lee",
    phoneNumber: "555-1008",
    address: "43.645873, -79.387000",
  },
  {
    firstName: "Isabelle",
    lastName: "Patel",
    phoneNumber: "555-1009",
    address: "43.649410, -79.377900",
  },
  {
    firstName: "Jason",
    lastName: "Garcia",
    phoneNumber: "555-1010",
    address: "43.653800, -79.385700",
  },
  {
    firstName: "Kylie",
    lastName: "Wang",
    phoneNumber: "555-1011",
    address: "43.646200, -79.376800",
  },
  {
    firstName: "Leo",
    lastName: "Brown",
    phoneNumber: "555-1012",
    address: "43.655000, -79.383300",
  },
  {
    firstName: "Maria",
    lastName: "Ali",
    phoneNumber: "555-1013",
    address: "43.643700, -79.378400",
  },
  {
    firstName: "Nathan",
    lastName: "Wilson",
    phoneNumber: "555-1014",
    address: "43.651300, -79.379000",
  },
  {
    firstName: "Olivia",
    lastName: "Tran",
    phoneNumber: "555-1015",
    address: "43.650400, -79.386200",
  },
  {
    firstName: "Peter",
    lastName: "Lopez",
    phoneNumber: "555-1016",
    address: "43.644400, -79.375900",
  },
  {
    firstName: "Queenie",
    lastName: "Hassan",
    phoneNumber: "555-1017",
    address: "43.647700, -79.384900",
  },
  {
    firstName: "Ryan",
    lastName: "Chow",
    phoneNumber: "555-1018",
    address: "43.649800, -79.376500",
  },
  {
    firstName: "Sophia",
    lastName: "Duarte",
    phoneNumber: "555-1019",
    address: "43.645100, -79.381100",
  },
  {
    firstName: "Tom",
    lastName: "Scott",
    phoneNumber: "555-1020",
    address: "43.652400, -79.377300",
  },
  {
    firstName: "Uma",
    lastName: "Ahmed",
    phoneNumber: "555-1021",
    address: "43.648600, -79.385000",
  },
  {
    firstName: "Victor",
    lastName: "Ng",
    phoneNumber: "555-1022",
    address: "43.643900, -79.379800",
  },
  {
    firstName: "Wendy",
    lastName: "Fernandez",
    phoneNumber: "555-1023",
    address: "43.654100, -79.386500",
  },
  {
    firstName: "Xander",
    lastName: "Lam",
    phoneNumber: "555-1024",
    address: "43.642900, -79.380500",
  },
  {
    firstName: "Yasmin",
    lastName: "Taylor",
    phoneNumber: "555-1025",
    address: "43.646900, -79.378300",
  },
];

export const robotList: InferInsertModel<typeof robot>[] = [
  {
    robotId: "OWL001",
    status: "available",
    lastKnownLocation: "43.6519, -79.3790", // near Pollo Rico
  },
  {
    robotId: "OWL002",
    status: "busy",
    lastKnownLocation: "43.6542, -79.3807", // near Smash Burger
  },
  {
    robotId: "OWL003",
    status: "available",
    lastKnownLocation: "43.6521, -79.3843", // Noodle House
  },
  {
    robotId: "OWL004",
    status: "available",
    lastKnownLocation: "43.6426, -79.3871", // CN Tower
  },
  {
    robotId: "OWL005",
    status: "offline",
    lastKnownLocation: "43.6534, -79.3780", // Slice Gang area
  },
  {
    robotId: "OWL006",
    status: "busy",
    lastKnownLocation: "43.6530, -79.3835", // close to Pizza & Chill Cream
  },
  {
    robotId: "OWL007",
    status: "available",
    lastKnownLocation: "43.6501, -79.3802", // Taco Machine area
  },
  {
    robotId: "OWL008",
    status: "offline",
    lastKnownLocation: "43.6512, -79.3470", // Nathan Phillips Square
  },
  {
    robotId: "OWL009",
    status: "available",
    lastKnownLocation: "43.6454, -79.3777", // Burger Boost
  },
  {
    robotId: "OWL010",
    status: "busy",
    lastKnownLocation: "43.6509, -79.3764", // Fit Fuel
  },
  {
    robotId: "OWL011",
    status: "offline",
    lastKnownLocation: "43.6550, -79.3795", // just outside the range
  },
  {
    robotId: "OWL012",
    status: "available",
    lastKnownLocation: "43.6488, -79.3782", // Grill Boss
  },
  {
    robotId: "OWL013",
    status: "busy",
    lastKnownLocation: "43.6430, -79.3842", // Chicken Shot
  },
  {
    robotId: "OWL014",
    status: "available",
    lastKnownLocation: "43.6461, -79.3860", // Leaf Life
  },
  {
    robotId: "OWL015",
    status: "offline",
    lastKnownLocation: "43.6590, -79.3800", // north GTA, testing outlier
  },
  {
    robotId: "OWL026",
    status: "available",
    lastKnownLocation: "43.6485, -79.3762", // St. Lawrence Market
  },
  {
    robotId: "OWL027",
    status: "busy",
    lastKnownLocation: "43.6472, -79.3778", // King & Jarvis
  },
  {
    robotId: "OWL028",
    status: "offline",
    lastKnownLocation: "43.6501, -79.3783", // Queen & Church
  },
  {
    robotId: "OWL029",
    status: "available",
    lastKnownLocation: "43.6523, -79.3796", // Dundas & Church
  },
  {
    robotId: "OWL030",
    status: "busy",
    lastKnownLocation: "43.6530, -79.3805", // Yonge-Dundas Square
  },
  {
    robotId: "OWL031",
    status: "available",
    lastKnownLocation: "43.6547, -79.3789", // Bay & Dundas
  },
  {
    robotId: "OWL032",
    status: "offline",
    lastKnownLocation: "43.6562, -79.3803", // Bay & Edward
  },
  {
    robotId: "OWL033",
    status: "busy",
    lastKnownLocation: "43.6574, -79.3811", // College Park
  },
  {
    robotId: "OWL034",
    status: "available",
    lastKnownLocation: "43.6591, -79.3824", // Carlton & Bay
  },
  {
    robotId: "OWL035",
    status: "busy",
    lastKnownLocation: "43.6603, -79.3840", // Wellesley Station
  },
  {
    robotId: "OWL036",
    status: "offline",
    lastKnownLocation: "43.6481, -79.3815", // Front & Yonge
  },
  {
    robotId: "OWL037",
    status: "available",
    lastKnownLocation: "43.6462, -79.3821", // Union Station
  },
  {
    robotId: "OWL038",
    status: "busy",
    lastKnownLocation: "43.6450, -79.3833", // Scotiabank Arena
  },
  {
    robotId: "OWL039",
    status: "available",
    lastKnownLocation: "43.6475, -79.3860", // CN Tower
  },
  {
    robotId: "OWL040",
    status: "offline",
    lastKnownLocation: "43.6498, -79.3880", // King & John
  },
  {
    robotId: "OWL041",
    status: "busy",
    lastKnownLocation: "43.6510, -79.3891", // Queen & University
  },
  {
    robotId: "OWL042",
    status: "available",
    lastKnownLocation: "43.6531, -79.3902", // Osgoode Hall
  },
  {
    robotId: "OWL043",
    status: "offline",
    lastKnownLocation: "43.6545, -79.3920", // City Hall
  },
  {
    robotId: "OWL044",
    status: "busy",
    lastKnownLocation: "43.6556, -79.3935", // Nathan Phillips Square
  },
  {
    robotId: "OWL045",
    status: "available",
    lastKnownLocation: "43.6568, -79.3947", // Toronto Eaton Centre west
  }
  
];

export const orderList: InferInsertModel<typeof order>[] = [
  {
    clientId: 17,
    restaurantId: 8,
    robotId: 1,
    items: [{ quantity: 1, description: "Vegan Bowl", unitPrice: 10.0 }],
    createdAt: new Date("2025-05-21T04:39:39.002744"),
    status: "pending",
  },
  {
    clientId: 6,
    restaurantId: 3,
    robotId: 1,
    items: [{ quantity: 2, description: "Grilled Steak", unitPrice: 14.0 }],
    createdAt: new Date("2025-05-19T04:39:39.002789"),
    completedAt: new Date("2025-05-19T06:39:39.002789"),
    status: "completed",
  },
  {
    clientId: 1,
    restaurantId: 3,
    robotId: 3,
    items: [{ quantity: 3, description: "Noodles", unitPrice: 7.5 }],
    createdAt: new Date("2025-05-23T04:39:39.002829"),
    status: "delivered",
  },
  {
    clientId: 23,
    restaurantId: 10,
    robotId: 4,
    items: [{ quantity: 2, description: "Grilled Steak", unitPrice: 14.0 }],
    createdAt: new Date("2025-05-22T04:39:39.002846"),
    status: "assigned",
  },
  {
    clientId: 20,
    restaurantId: 15,
    robotId: 10,
    items: [{ quantity: 2, description: "Grilled Steak", unitPrice: 14.0 }],
    createdAt: new Date("2025-05-27T04:39:39.002862"),
    status: "picked_up",
  },
  {
    clientId: 15,
    restaurantId: 6,
    robotId: 5,
    items: [{ quantity: 2, description: "Arepa", unitPrice: 5.5 }],
    createdAt: new Date("2025-05-22T04:39:39.002877"),
    status: "picked_up",
  },
  {
    clientId: 8,
    restaurantId: 1,
    robotId: 13,
    items: [{ quantity: 2, description: "Burger", unitPrice: 9.99 }],
    createdAt: new Date("2025-05-24T04:39:39.002886"),
    status: "delivered",
  },
  {
    clientId: 1,
    restaurantId: 18,
    robotId: 1,
    items: [{ quantity: 1, description: "Vegan Bowl", unitPrice: 10.0 }],
    createdAt: new Date("2025-05-22T04:39:39.002896"),
    status: "pending",
  },
  {
    clientId: 3,
    restaurantId: 2,
    robotId: 7,
    items: [{ quantity: 1, description: "Vegan Bowl", unitPrice: 10.0 }],
    createdAt: new Date("2025-05-22T04:39:39.002906"),
    completedAt: new Date("2025-05-22T06:39:39.002906"),
    status: "completed",
  },
  {
    clientId: 16,
    restaurantId: 3,
    robotId: 8,
    items: [{ quantity: 2, description: "Pizza Slice", unitPrice: 4.5 }],
    createdAt: new Date("2025-05-27T04:39:39.002920"),
    status: "pending",
  },
  {
    clientId: 10,
    restaurantId: 1,
    robotId: 9,
    items: [{ quantity: 2, description: "Pizza Slice", unitPrice: 4.5 }],
    createdAt: new Date("2025-05-20T04:39:39.002928"),
    status: "delivered",
  },
  {
    clientId: 10,
    restaurantId: 12,
    robotId: 15,
    items: [{ quantity: 1, description: "Fried Chicken", unitPrice: 12.99 }],
    createdAt: new Date("2025-05-25T04:39:39.002935"),
    status: "delivered",
  },
  {
    clientId: 12,
    restaurantId: 7,
    robotId: 9,
    items: [{ quantity: 1, description: "Vegan Bowl", unitPrice: 10.0 }],
    createdAt: new Date("2025-05-19T04:39:39.002942"),
    status: "pending",
  },
  {
    clientId: 3,
    restaurantId: 15,
    robotId: 13,
    items: [{ quantity: 1, description: "Curry", unitPrice: 11.75 }],
    createdAt: new Date("2025-05-26T04:39:39.002950"),
    status: "assigned",
  },
  {
    clientId: 11,
    restaurantId: 9,
    robotId: 8,
    items: [{ quantity: 1, description: "Fried Chicken", unitPrice: 12.99 }],
    createdAt: new Date("2025-05-18T04:39:39.002957"),
    status: "assigned",
  },
  {
    clientId: 13,
    restaurantId: 5,
    robotId: 14,
    items: [{ quantity: 3, description: "Noodles", unitPrice: 7.5 }],
    createdAt: new Date("2025-05-20T04:39:39.002964"),
    status: "delivered",
  },
  {
    clientId: 11,
    restaurantId: 13,
    robotId: 3,
    items: [{ quantity: 1, description: "Curry", unitPrice: 11.75 }],
    createdAt: new Date("2025-05-21T04:39:39.002971"),

    status: "delivered",
  },
  {
    clientId: 18,
    restaurantId: 13,
    robotId: 13,
    items: [{ quantity: 1, description: "Curry", unitPrice: 11.75 }],
    createdAt: new Date("2025-05-18T04:39:39.002979"),
    status: "assigned",
  },
  {
    clientId: 11,
    restaurantId: 17,
    robotId: 9,
    items: [{ quantity: 1, description: "Vegan Bowl", unitPrice: 10.0 }],
    createdAt: new Date("2025-05-20T04:39:39.003002"),
    status: "picked_up",
  },
  {
    clientId: 21,
    restaurantId: 7,
    robotId: 11,
    items: [{ quantity: 3, description: "Noodles", unitPrice: 7.5 }],
    createdAt: new Date("2025-05-18T04:39:39.003011"),
    status: "delivered",
  },
  {
    clientId: 20,
    restaurantId: 13,
    robotId: 12,
    items: [{ quantity: 2, description: "Pizza Slice", unitPrice: 4.5 }],
    createdAt: new Date("2025-05-26T04:39:39.003018"),

    status: "delivered",
  },
  {
    clientId: 2,
    restaurantId: 7,
    robotId: 13,
    items: [{ quantity: 1, description: "Fried Chicken", unitPrice: 12.99 }],
    createdAt: new Date("2025-05-27T04:39:39.003025"),
    status: "pending",
  },
  {
    clientId: 25,
    restaurantId: 1,
    robotId: 13,
    items: [{ quantity: 2, description: "Pizza Slice", unitPrice: 4.5 }],
    createdAt: new Date("2025-05-23T04:39:39.003032"),
    completedAt: new Date("2025-05-23T06:39:39.003032"),
    status: "completed",
  },
  {
    clientId: 7,
    restaurantId: 2,
    robotId: 14,
    items: [{ quantity: 3, description: "Noodles", unitPrice: 7.5 }],
    createdAt: new Date("2025-05-21T04:39:39.003044"),
    status: "pending",
  },
  {
    clientId: 9,
    restaurantId: 8,
    robotId: 15,
    items: [{ quantity: 1, description: "Fried Chicken", unitPrice: 12.99 }],
    createdAt: new Date("2025-05-19T04:39:39.003056"),
    status: "pending",
  },
  {
    clientId: 9,
    restaurantId: 4,
    robotId: 15,
    items: [{ quantity: 1, description: "Fried Chicken", unitPrice: 12.99 }],
    createdAt: new Date("2025-05-27T04:39:39.003070"),
    status: "assigned",
  },
  {
    clientId: 1,
    restaurantId: 1,
    robotId: 14,
    items: [{ quantity: 1, description: "Fried Chicken", unitPrice: 12.99 }],
    createdAt: new Date("2025-05-20T04:39:39.003083"),
    status: "delivered",
  },
  {
    clientId: 3,
    restaurantId: 11,
    robotId: 7,
    items: [{ quantity: 1, description: "Curry", unitPrice: 11.75 }],
    createdAt: new Date("2025-05-22T04:39:39.003091"),
    status: "assigned",
  },
  {
    clientId: 1,
    restaurantId: 8,
    robotId: 9,
    items: [{ quantity: 1, description: "Vegan Bowl", unitPrice: 10.0 }],
    createdAt: new Date("2025-05-19T04:39:39.003099"),
    status: "assigned",
  },
  {
    clientId: 8,
    restaurantId: 16,
    robotId: 11,
    items: [{ quantity: 1, description: "Ice Cream", unitPrice: 3.25 }],
    createdAt: new Date("2025-05-21T04:39:39.003106"),
    status: "picked_up",
  },
  {
    clientId: 13,
    restaurantId: 5,
    robotId: 13,
    items: [{ quantity: 3, description: "Noodles", unitPrice: 7.5 }],
    createdAt: new Date("2025-05-27T04:39:39.003113"),
    status: "assigned",
  },
  {
    clientId: 11,
    restaurantId: 9,
    robotId: 7,
    items: [{ quantity: 1, description: "Vegan Bowl", unitPrice: 10.0 }],
    createdAt: new Date("2025-05-19T04:39:39.003120"),
    status: "assigned",
  },
  {
    clientId: 4,
    restaurantId: 4,
    robotId: 8,
    items: [{ quantity: 1, description: "Ice Cream", unitPrice: 3.25 }],
    createdAt: new Date("2025-05-18T04:39:39.003127"),
    completedAt: new Date("2025-05-18T06:39:39.003127"),
    status: "completed",
  },
  {
    clientId: 14,
    restaurantId: 4,
    robotId: 5,
    items: [{ quantity: 2, description: "Grilled Steak", unitPrice: 14.0 }],
    createdAt: new Date("2025-05-20T04:39:39.003143"),
    status: "pending",
  },
  {
    clientId: 13,
    restaurantId: 11,
    robotId: 4,
    items: [{ quantity: 2, description: "Arepa", unitPrice: 5.5 }],
    createdAt: new Date("2025-05-23T04:39:39.003153"),
    status: "assigned",
  },
];

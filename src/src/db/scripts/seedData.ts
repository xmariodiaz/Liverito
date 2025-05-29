import { InferInsertModel } from "drizzle-orm";
import { restaurant, robot, order } from "../schema";
import { date } from "drizzle-orm/mysql-core";

/**
 * The location selected is the great Toronto Area
 */

export const restaurantsList : InferInsertModel<typeof restaurant>[] = [
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
  //new
  {
    name: "Piri Piri Chicken",
    category: "Chicken",
    phoneNumber: "416-2006",
    url: "https://piripirichicken.ca",
    email: "info@piripirichicken.ca",
    address: "43.731500, -79.762400", // Brampton
  },
  {
    name: "Big Bite Burgers",
    category: "Burgers",
    phoneNumber: "905-501-1002",
    url: "https://bigbiteburgers.ca",
    email: "contact@bigbiteburgers.ca",
    address: "43.589000, -79.644100", // Mississauga
  },
  {
    name: "Wok This Way",
    category: "AsianFood",
    phoneNumber: "416-2003",
    url: "https://wokthisway.ca",
    email: "hi@wokthisway.ca",
    address: "43.651070, -79.347015", // Downtown Toronto
  },
  {
    name: "Downtown Dumplings",
    category: "AsianFood",
    phoneNumber: "416-2004",
    url: "https://downtowndumplings.ca",
    email: "support@downtowndumplings.ca",
    address: "43.652900, -79.384300", // Spadina Ave, Downtown Toronto
  },
  {
    name: "Fried Chicken Spot",
    category: "Chicken",
    phoneNumber: "905-640-1005",
    url: "https://friedchickenspot.ca",
    email: "hello@friedchickenspot.ca",
    address: "43.850000, -79.020400", // Ajax
  },
  {
    name: "Burger Barn",
    category: "Burgers",
    phoneNumber: "416-2007",
    url: "https://burgerbarn.ca",
    email: "info@burgerbarn.ca",
    address: "43.658600, -79.379400", // King West, Downtown Toronto
  },
  {
    name: "Pollo Rico",
    category: "Chicken",
    phoneNumber: "416-2001",
    url: "https://pollorico.ca",
    email: "hello@pollorico.ca",
    address: "43.651900, -79.379000", // Downtown Toronto
  },
  {
    name: "Saucy Szechuan",
    category: "AsianFood",
    phoneNumber: "416-2008",
    url: "https://saucyszechuan.ca",
    email: "orders@saucyszechuan.ca",
    address: "43.646500, -79.373100", // Chinatown, Downtown Toronto
  },
  {
    name: "Northern Nuggets",
    category: "Chicken",
    phoneNumber: "905-501-1009",
    url: "https://northernnuggets.ca",
    email: "contact@northernnuggets.ca",
    address: "43.722200, -79.602200", // Oakville
  },
  {
    name: "Queen West Quesadillas",
    category: "AsianFood",
    phoneNumber: "416-2010",
    url: "https://queenwestquesadillas.ca",
    email: "hello@queenwestquesadillas.ca",
    address: "43.643500, -79.424500", // Queen West, Downtown Toronto
  },
  {
    name: "Suburban Sliders",
    category: "Burgers",
    phoneNumber: "905-640-1011",
    url: "https://suburbansliders.ca",
    email: "info@suburbansliders.ca",
    address: "43.773300, -79.774900", // Milton
  },
  {
    name: "Maple Wings",
    category: "Chicken",
    phoneNumber: "416-2012",
    url: "https://maplewings.ca",
    email: "support@maplewings.ca",
    address: "43.589600, -79.644800", // Mississauga
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
    firstName: "Drake",
    lastName: "Graham",
    phoneNumber: "555-1024",
    address: "43.642900, -79.380500",
  },
  {
    firstName: "Marilyn",
    lastName: "Manson",
    phoneNumber: "555-1025",
    address: "43.646900, -79.378300",
  },
  // New entries
  {
    firstName: "Justin",
    lastName: "Trudeau",
    phoneNumber: "555-1026",
    address: "43.850000, -79.016000",
  },
  {
    firstName: "Celine",
    lastName: "Dion",
    phoneNumber: "555-1027",
    address: "43.838000, -79.088000",
  },
  {
    firstName: "Wayne",
    lastName: "Gretzky",
    phoneNumber: "555-1028",
    address: "43.897000, -78.946000",
  },
  {
    firstName: "Ryan",
    lastName: "Reynolds",
    phoneNumber: "555-1029",
    address: "43.897000, -78.865000",
  },
  {
    firstName: "Michael",
    lastName: "Bublé",
    phoneNumber: "555-1030",
    address: "43.783300, -79.183300",
  },
  {
    firstName: "Margaret",
    lastName: "Atwood",
    phoneNumber: "555-1031",
    address: "43.761500, -79.411100",
  },
  {
    firstName: "Abel",
    lastName: "Tesfaye",
    phoneNumber: "555-1032",
    address: "43.608500, -79.533300",
  },
  {
    firstName: "Ryan",
    lastName: "Gosling",
    phoneNumber: "555-1033",
    address: "43.589000, -79.644100",
  },
  {
    firstName: "Shawn",
    lastName: "Mendes",
    phoneNumber: "555-1034",
    address: "43.731500, -79.762400",
  },
  {
    firstName: "Neil",
    lastName: "Young",
    phoneNumber: "555-1035",
    address: "43.519100, -79.877700",
  },
  {
    firstName: "Jim",
    lastName: "Carrey",
    phoneNumber: "555-1036",
    address: "43.467500, -79.687700",
  },
  {
    firstName: "Mike",
    lastName: "Myers",
    phoneNumber: "555-1037",
    address: "43.318500, -79.799000",
  },
  {
    firstName: "Keanu",
    lastName: "Reeves",
    phoneNumber: "555-1038",
    address: "43.836500, -79.508300",
  },
  {
    firstName: "Shakira",
    lastName: "Mebarak",
    phoneNumber: "555-1039",
    address: "43.856100, -79.337000",
  },
  {
    firstName: "José",
    lastName: "Balvin",
    phoneNumber: "555-1040",
    address: "43.882800, -79.440300",
  },
  {
    firstName: "Juan",
    lastName: "Londoño",
    phoneNumber: "555-1041",
    address: "44.000000, -79.466700",
  },
  {
    firstName: "James",
    lastName: "Rodríguez",
    phoneNumber: "555-1042",
    address: "44.059200, -79.461200",
  },
  {
    firstName: "Gabriel",
    lastName: "Garcia Marquez",
    phoneNumber: "555-1043",
    address: "43.773500, -79.257800",
  },
  {
    firstName: "Sofía",
    lastName: "Vergara",
    phoneNumber: "555-1044",
    address: "43.693800, -79.333900",
  },
  {
    firstName: "Juan",
    lastName: "Aristizábal",
    phoneNumber: "555-1045",
    address: "43.789000, -79.306000",
  },
  {
    firstName: "Carlos",
    lastName: "Vives",
    phoneNumber: "555-1046",
    address: "43.718100, -79.460000",
  },
  {
    firstName: "Fernando",
    lastName: "Botero",
    phoneNumber: "555-1047",
    address: "43.753800, -79.329900",
  },
  {
    firstName: "Egan",
    lastName: "Bernal",
    phoneNumber: "555-1048",
    address: "43.682600, -79.766300",
  },
  {
    firstName: "Mariana",
    lastName: "Pajón",
    phoneNumber: "555-1049",
    address: "43.602100, -79.770000",
  },
  {
    firstName: "Radamel",
    lastName: "Falcao",
    phoneNumber: "555-1050",
    address: "43.735500, -79.574100",
  },
];


export const robotList: InferInsertModel<typeof robot>[] = [
  {
    "robotId":"OWL001",
    "status":"available",
    "lastKnownLocation":"43.731500, -79.762400"
  },
  {
    "robotId":"OWL002",
    "status":"busy",
    "lastKnownLocation":"43.650123, -79.381234"
  },
  {
    "robotId":"OWL003",
    "status":"busy",
    "lastKnownLocation":"43.651070, -79.347015"
  },
  {
    "robotId":"OWL004",
    "status":"available",
    "lastKnownLocation":"43.652900, -79.384300"
  },
  {
    "robotId":"OWL005",
    "status":"busy",
    "lastKnownLocation":"43.648392, -79.384290"
  },
  {
    "robotId":"OWL006",
    "status":"available",
    "lastKnownLocation":"43.658600, -79.379400"
  },
  {
    "robotId":"OWL007",
    "status":"available",
    "lastKnownLocation":"43.651900, -79.379000"
  },
  {
    "robotId":"OWL008",
    "status":"busy",
    "lastKnownLocation":"43.838000, -79.285000"
  },
  {
    "robotId":"OWL009",
    "status":"busy",
    "lastKnownLocation":"43.644857, -79.378210"
  },
  {
    "robotId":"OWL010",
    "status":"available",
    "lastKnownLocation":"43.700000, -79.416700"
  },
  {
    "robotId":"OWL011",
    "status":"available",
    "lastKnownLocation":"43.674500, -79.421700"
  },
  {
    "robotId":"OWL012",
    "status":"available",
    "lastKnownLocation":"43.708100, -79.397200"
  },
  {
    "robotId":"OWL013",
    "status":"available",
    "lastKnownLocation":"43.653300, -79.495000"
  },
  {
    "robotId":"OWL014",
    "status":"offline",
    "lastKnownLocation":"43.747700, -79.529200"
  },
  {
    "robotId":"OWL015",
    "status":"busy",
    "lastKnownLocation":"43.643321, -79.379512"
  },
  {
    "robotId":"OWL016",
    "status":"available",
    "lastKnownLocation":"43.835200, -79.453600"
  },
  {
    "robotId":"OWL017",
    "status":"busy",
    "lastKnownLocation":"43.651012, -79.386012"
  },
  {
    "robotId":"OWL018",
    "status":"busy",
    "lastKnownLocation":"43.830000, -79.233000"
  },
  {
    "robotId":"OWL019",
    "status":"offline",
    "lastKnownLocation":"43.689000, -79.763000"
  },
  {
    "robotId":"OWL020",
    "status":"busy",
    "lastKnownLocation":"43.818600, -79.225500"
  },
  {
    "robotId":"OWL021",
    "status":"busy",
    "lastKnownLocation":"43.642799, -79.380100"
  },
  {
    "robotId":"OWL022",
    "status":"busy",
    "lastKnownLocation":"43.773700, -79.501900"
  },
  {
    "robotId":"OWL023",
    "status":"available",
    "lastKnownLocation":"43.782500, -79.493700"
  },
  {
    "robotId":"OWL024",
    "status":"busy",
    "lastKnownLocation":"43.653800, -79.385700"
  },
  {
    "robotId":"OWL025",
    "status":"busy",
    "lastKnownLocation":"43.653200, -79.383200"
  },
  {
    "robotId":"OWL026",
    "status":"busy",
    "lastKnownLocation":"43.653200, -79.383200"
  },
  {
    "robotId":"OWL027",
    "status":"available",
    "lastKnownLocation":"43.653200, -79.383200"
  },
  {
    "robotId":"OWL028",
    "status":"busy",
    "lastKnownLocation":"43.647250, -79.382980"
  },
  {
    "robotId":"OWL029",
    "status":"offline",
    "lastKnownLocation":"43.653200, -79.383200"
  },
  {
    "robotId":"OWL030",
    "status":"busy",
    "lastKnownLocation":"43.645873, -79.387000"
  },
  {
    "robotId":"OWL031",
    "status":"busy",
    "lastKnownLocation":"43.646200, -79.376800"
  },
  {
    "robotId":"OWL032",
    "status":"busy",
    "lastKnownLocation":"43.653200, -79.383200"
  },
  {
    "robotId":"OWL033",
    "status":"busy",
    "lastKnownLocation":"43.649410, -79.377900"
  },
  {
    "robotId":"OWL034",
    "status":"offline",
    "lastKnownLocation":"43.653200, -79.383200"
  },
  {
    "robotId":"OWL035",
    "status":"available",
    "lastKnownLocation":"43.653200, -79.383200"
  },
  {
    "robotId":"OWL036",
    "status":"busy",
    "lastKnownLocation":"43.655000, -79.383300"
  }
  ];

export const orderList: InferInsertModel<typeof order>[] = [
  {
    "clientId": 8,
    "restaurantId": 20,
    "robotId": 8,
    "items": [
      {
        "quantity": 1,
        "description": "Sundae",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:00:00"),
    "status": "assigned"
  },
  {
    "clientId": 15,
    "restaurantId": 15,
    "robotId": 17,
    "items": [
      {
        "quantity": 1,
        "description": "Butter Chicken",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:01:00"),
    "status": "assigned"
  },
  {
    "clientId": 20,
    "restaurantId": 10,
    "robotId": 25,
    "items": [
      {
        "quantity": 1,
        "description": "Vegan Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:02:00"),
    "status": "delivered"
  },
  {
    "clientId": 13,
    "restaurantId": 1,
    "robotId": 24,
    "items": [
      {
        "quantity": 1,
        "description": "Double Cheeseburger",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:03:00"),
    "status": "picked_up"
  },
  {
    "clientId": 20,
    "restaurantId": 21,
    "robotId": 26,
    "items": [
      {
        "quantity": 1,
        "description": "Slice Combo",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:04:00"),
    "status": "picked_up"
  },
  {
    "clientId": 7,
    "restaurantId": 24,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Grilled Chicken Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:05:00"),
    "status": "pending"
  },
  {
    "clientId": 5,
    "restaurantId": 6,
    "robotId": 5,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:06:00"),
    "status": "completed"
  },
  {
    "clientId": 31,
    "restaurantId": 20,
    "robotId": 16,
    "items": [
      {
        "quantity": 1,
        "description": "Sundae",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:07:00"),
    "status": "delivered"
  },
  {
    "clientId": 10,
    "restaurantId": 23,
    "robotId": 3,
    "items": [
      {
        "quantity": 1,
        "description": "Quinoa Salad",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:08:00"),
    "status": "completed"
  },
  {
    "clientId": 11,
    "restaurantId": 1,
    "robotId": 3,
    "items": [
      {
        "quantity": 1,
        "description": "Double Cheeseburger",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:09:00"),
    "status": "picked_up"
  },
  {
    "clientId": 7,
    "restaurantId": 5,
    "robotId": 15,
    "items": [
      {
        "quantity": 1,
        "description": "Arepa Rellena",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:10:00"),
    "status": "delivered"
  },
  {
    "clientId": 47,
    "restaurantId": 3,
    "robotId": 5,
    "items": [
      {
        "quantity": 1,
        "description": "Butter Chicken",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:11:00"),
    "status": "assigned"
  },
  {
    "clientId": 4,
    "restaurantId": 10,
    "robotId": 15,
    "items": [
      {
        "quantity": 1,
        "description": "Vegan Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:12:00"),
    "status": "picked_up"
  },
  {
    "clientId": 4,
    "restaurantId": 23,
    "robotId": 8,
    "items": [
      {
        "quantity": 1,
        "description": "Quinoa Salad",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:13:00"),
    "status": "assigned"
  },
  {
    "clientId": 22,
    "restaurantId": 22,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Vegan Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:14:00"),
    "status": "pending"
  },
  {
    "clientId": 42,
    "restaurantId": 7,
    "robotId": 6,
    "items": [
      {
        "quantity": 1,
        "description": "Steak Plate",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:15:00"),
    "status": "completed"
  },
  {
    "clientId": 30,
    "restaurantId": 5,
    "robotId": 24,
    "items": [
      {
        "quantity": 1,
        "description": "Arepa Rellena",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:16:00"),
    "status": "picked_up"
  },
  {
    "clientId": 22,
    "restaurantId": 7,
    "robotId": 33,
    "items": [
      {
        "quantity": 1,
        "description": "Steak Plate",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:17:00"),
    "status": "picked_up"
  },
  {
    "clientId": 38,
    "restaurantId": 20,
    "robotId": 16,
    "items": [
      {
        "quantity": 1,
        "description": "Sundae",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:18:00"),
    "status": "completed"
  },
  {
    "clientId": 48,
    "restaurantId": 24,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Grilled Chicken Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:19:00"),
    "status": "pending"
  },
  {
    "clientId": 36,
    "restaurantId": 23,
    "robotId": 12,
    "items": [
      {
        "quantity": 1,
        "description": "Quinoa Salad",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:20:00"),
    "status": "completed"
  },
  {
    "clientId": 19,
    "restaurantId": 13,
    "robotId": 32,
    "items": [
      {
        "quantity": 1,
        "description": "Double Cheeseburger",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:21:00"),
    "status": "assigned"
  },
  {
    "clientId": 45,
    "restaurantId": 5,
    "robotId": 21,
    "items": [
      {
        "quantity": 1,
        "description": "Arepa Rellena",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:22:00"),
    "status": "picked_up"
  },
  {
    "clientId": 18,
    "restaurantId": 8,
    "robotId": 10,
    "items": [
      {
        "quantity": 1,
        "description": "Sundae",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:23:00"),
    "status": "completed"
  },
  {
    "clientId": 37,
    "restaurantId": 13,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Double Cheeseburger",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:24:00"),
    "status": "pending"
  },
  {
    "clientId": 24,
    "restaurantId": 6,
    "robotId": 31,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:25:00"),
    "status": "assigned"
  },
  {
    "clientId": 12,
    "restaurantId": 4,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Jerk Chicken",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:26:00"),
    "status": "pending"
  },
  {
    "clientId": 42,
    "restaurantId": 4,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Jerk Chicken",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:27:00"),
    "status": "pending"
  },
  {
    "clientId": 19,
    "restaurantId": 20,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Sundae",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:28:00"),
    "status": "pending"
  },
  {
    "clientId": 32,
    "restaurantId": 19,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Steak Plate",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:29:00"),
    "status": "pending"
  },
  {
    "clientId": 30,
    "restaurantId": 9,
    "robotId": 25,
    "items": [
      {
        "quantity": 1,
        "description": "Slice Combo",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:30:00"),
    "status": "completed"
  },
  {
    "clientId": 47,
    "restaurantId": 6,
    "robotId": 2,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:31:00"),
    "status": "assigned"
  },
  {
    "clientId": 11,
    "restaurantId": 6,
    "robotId": 30,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:32:00"),
    "status": "picked_up"
  },
  {
    "clientId": 23,
    "restaurantId": 3,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Butter Chicken",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:33:00"),
    "status": "pending"
  },
  {
    "clientId": 42,
    "restaurantId": 17,
    "robotId": 26,
    "items": [
      {
        "quantity": 1,
        "description": "Arepa Rellena",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:34:00"),
    "status": "delivered"
  },
  {
    "clientId": 21,
    "restaurantId": 13,
    "robotId": 15,
    "items": [
      {
        "quantity": 1,
        "description": "Double Cheeseburger",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:35:00"),
    "status": "completed"
  },
  {
    "clientId": 11,
    "restaurantId": 18,
    "robotId": 22,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:36:00"),
    "status": "completed"
  },
  {
    "clientId": 38,
    "restaurantId": 22,
    "robotId": 36,
    "items": [
      {
        "quantity": 1,
        "description": "Vegan Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:37:00"),
    "status": "assigned"
  },
  {
    "clientId": 34,
    "restaurantId": 10,
    "robotId": 35,
    "items": [
      {
        "quantity": 1,
        "description": "Vegan Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:38:00"),
    "status": "assigned"
  },
  {
    "clientId": 46,
    "restaurantId": 9,
    "robotId": 30,
    "items": [
      {
        "quantity": 1,
        "description": "Slice Combo",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:39:00"),
    "status": "assigned"
  },
  {
    "clientId": 14,
    "restaurantId": 21,
    "robotId": 3,
    "items": [
      {
        "quantity": 1,
        "description": "Slice Combo",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:40:00"),
    "status": "assigned"
  },
  {
    "clientId": 20,
    "restaurantId": 14,
    "robotId": 2,
    "items": [
      {
        "quantity": 1,
        "description": "Spicy Ramen",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:41:00"),
    "status": "completed"
  },
  {
    "clientId": 8,
    "restaurantId": 12,
    "robotId": 28,
    "items": [
      {
        "quantity": 1,
        "description": "Grilled Chicken Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:42:00"),
    "status": "picked_up"
  },
  {
    "clientId": 11,
    "restaurantId": 4,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Jerk Chicken",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:43:00"),
    "status": "pending"
  },
  {
    "clientId": 26,
    "restaurantId": 6,
    "robotId": 17,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:44:00"),
    "status": "picked_up"
  },
  {
    "clientId": 33,
    "restaurantId": 24,
    "robotId": 16,
    "items": [
      {
        "quantity": 1,
        "description": "Grilled Chicken Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:45:00"),
    "status": "assigned"
  },
  {
    "clientId": 25,
    "restaurantId": 7,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Steak Plate",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:46:00"),
    "status": "pending"
  },
  {
    "clientId": 2,
    "restaurantId": 20,
    "robotId": 14,
    "items": [
      {
        "quantity": 1,
        "description": "Sundae",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:47:00"),
    "status": "assigned"
  },
  {
    "clientId": 31,
    "restaurantId": 12,
    "robotId": 18,
    "items": [
      {
        "quantity": 1,
        "description": "Grilled Chicken Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:48:00"),
    "status": "completed"
  },
  {
    "clientId": 36,
    "restaurantId": 7,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Steak Plate",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:49:00"),
    "status": "pending"
  },
  {
    "clientId": 33,
    "restaurantId": 13,
    "robotId": 22,
    "items": [
      {
        "quantity": 1,
        "description": "Double Cheeseburger",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:50:00"),
    "status": "picked_up"
  },
  {
    "clientId": 50,
    "restaurantId": 18,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:51:00"),
    "status": "pending"
  },
  {
    "clientId": 1,
    "restaurantId": 16,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Jerk Chicken",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:52:00"),
    "status": "pending"
  },
  {
    "clientId": 7,
    "restaurantId": 10,
    "robotId": 20,
    "items": [
      {
        "quantity": 1,
        "description": "Vegan Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:53:00"),
    "status": "delivered"
  },
  {
    "clientId": 6,
    "restaurantId": 1,
    "robotId": 4,
    "items": [
      {
        "quantity": 1,
        "description": "Double Cheeseburger",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:54:00"),
    "status": "assigned"
  },
  {
    "clientId": 34,
    "restaurantId": 6,
    "robotId": 26,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:55:00"),
    "status": "completed"
  },
  {
    "clientId": 2,
    "restaurantId": 12,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Grilled Chicken Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:56:00"),
    "status": "pending"
  },
  {
    "clientId": 1,
    "restaurantId": 16,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Jerk Chicken",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:57:00"),
    "status": "pending"
  },
  {
    "clientId": 28,
    "restaurantId": 22,
    "robotId": 21,
    "items": [
      {
        "quantity": 1,
        "description": "Vegan Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:58:00"),
    "status": "assigned"
  },
  {
    "clientId": 16,
    "restaurantId": 14,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Spicy Ramen",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T10:59:00"),
    "status": "pending"
  },
  {
    "clientId": 16,
    "restaurantId": 7,
    "robotId": 1,
    "items": [
      {
        "quantity": 1,
        "description": "Steak Plate",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:00:00"),
    "status": "completed"
  },
  {
    "clientId": 12,
    "restaurantId": 12,
    "robotId": 21,
    "items": [
      {
        "quantity": 1,
        "description": "Grilled Chicken Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:01:00"),
    "status": "delivered"
  },
  {
    "clientId": 23,
    "restaurantId": 18,
    "robotId": null,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:02:00"),
    "status": "pending"
  },
  {
    "clientId": 6,
    "restaurantId": 10,
    "robotId": 18,
    "items": [
      {
        "quantity": 1,
        "description": "Vegan Bowl",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:03:00"),
    "status": "assigned"
  },
  {
    "clientId": 28,
    "restaurantId": 8,
    "robotId": 22,
    "items": [
      {
        "quantity": 1,
        "description": "Sundae",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:04:00"),
    "status": "assigned"
  },
  {
    "clientId": 50,
    "restaurantId": 17,
    "robotId": 30,
    "items": [
      {
        "quantity": 1,
        "description": "Arepa Rellena",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:05:00"),
    "status": "delivered"
  },
  {
    "clientId": 32,
    "restaurantId": 20,
    "robotId": 25,
    "items": [
      {
        "quantity": 1,
        "description": "Sundae",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:06:00"),
    "status": "delivered"
  },
  {
    "clientId": 31,
    "restaurantId": 5,
    "robotId": 28,
    "items": [
      {
        "quantity": 1,
        "description": "Arepa Rellena",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:07:00"),
    "status": "completed"
  },
  {
    "clientId": 36,
    "restaurantId": 5,
    "robotId": 22,
    "items": [
      {
        "quantity": 1,
        "description": "Arepa Rellena",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:08:00"),
    "status": "delivered"
  },
  {
    "clientId": 34,
    "restaurantId": 6,
    "robotId": 9,
    "items": [
      {
        "quantity": 1,
        "description": "Taco Platter",
        "unitPrice": 10.0
      }
    ],
    "createdAt": new Date("2025-05-21T11:09:00"),
    "status": "assigned"
  } 
];

// src/lib/swaggerConfig.ts

export const swaggerConfig = {
    openapi: "3.0.0",
    info: {
      title: "Liverito API",
      version: "1.0.0",
      description: "Delivery order API for Liverito",
    },
    tags: [
      { name: "Orders", description: "Endpoints related to delivery orders" },
      { name: "Robots", description: "Robot management" },
    ],
  };
  

  export const swaggerSpec = {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: '/api',
        description: 'Development server',
      },
    ],
    paths: {
      // Your API paths here
    }
  };
  
  export const createSwaggerSpec = () => swaggerSpec;
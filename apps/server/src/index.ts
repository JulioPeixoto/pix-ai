import "dotenv/config";
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { appRouter } from "./routers";

const app = new Elysia()
  .use(
    cors({
      origin: process.env.CORS_ORIGIN || "",
      methods: ["GET", "POST", "OPTIONS"],
    }),
  )
  .use(swagger({
    path: "/docs",
    documentation: {
      info: {
        title: "API Documentation",
        version: "1.0.0",
      },
    },
  }))
  .use(appRouter)
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });

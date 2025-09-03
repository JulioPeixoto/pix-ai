import "dotenv/config";
import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { usersRouter } from "./users/routes";

const app = new Elysia({
  prefix: "/api/v1",
})
  .use(
    cors({
      origin: process.env.CORS_ORIGIN || "",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    }),
  )
  .use(swagger({
    path: "/docs",
    documentation: {
      info: {
        title: "Pix AI API",
        version: "1.0.0",
      },
    },
  }))
  .get('/', ({ redirect }) => {
    return redirect('/api/v1/docs')
})  .get("/health", () => "OK")
  .use(usersRouter)
  .listen(3000, () => {
    console.log("Server is running on http://localhost:3000/api/v1");
  });

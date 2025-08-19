import { Elysia } from "elysia";

export const healthRouter = new Elysia()
  .get("/", () => "OK")
  .get("/liveness", () => "OK")
  .get("/health", () => "OK");
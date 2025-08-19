import { Elysia } from "elysia";
import { healthRouter } from "./health";

export const appRouter = new Elysia()
  .use(healthRouter)

export type AppRouter = typeof appRouter;

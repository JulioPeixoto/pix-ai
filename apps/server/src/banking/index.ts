import Elysia from "elysia"
import { bankAccountRouter } from "./accounts/routes"

export const bankingRouter = new Elysia({ prefix: "/banking" }).use(bankAccountRouter)

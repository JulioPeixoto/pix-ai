import {
  BankAccountPlain,
  BankAccountPlainInputCreate,
  BankAccountPlainInputUpdate,
} from "../../../external/prisma/generated/prismabox/BankAccount"
import { t } from "elysia"

export const CreateBankAccountSchema = BankAccountPlainInputCreate
export const UpdateBankAccountSchema = BankAccountPlainInputUpdate
export const BankAccountResponseSchema = BankAccountPlain

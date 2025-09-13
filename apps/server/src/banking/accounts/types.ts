import type { Prisma } from '../../../prisma/generated/client'

export type { BankAccount, AccountType, PersonType } from '../../../prisma/generated/client'

export type CreateBankAccountRequest = Prisma.BankAccountCreateInput
export type UpdateBankAccountRequest = Prisma.BankAccountUpdateInput

export interface BankAccountValidation {
  isValid: boolean
  errors: string[]
  bankName?: string
}

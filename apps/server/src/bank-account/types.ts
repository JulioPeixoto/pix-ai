import type { UUID } from "node:crypto"

export interface BankAccount {
  id: UUID
  userId: UUID
  banco: string
  agencia: string
  conta: string
  tipo: "CC" | "CP" | "PP"
  tipoPessoa: "F" | "J"
  createdAt: Date
  updatedAt: Date
}

export interface CreateBankAccountRequest {
  userId: string
  banco: string
  agencia: string
  conta: string
  tipo: "CC" | "CP" | "PP"
  tipoPessoa: "F" | "J"
}

export interface UpdateBankAccountRequest {
  banco?: string
  agencia?: string
  conta?: string
  tipo?: "CC" | "CP" | "PP"
  tipoPessoa?: "F" | "J"
}

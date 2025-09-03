import type { UUID } from "node:crypto"

export interface User {
  id: UUID
  name: string
  email: string
  pixKey: string
  cpf: string
  createdAt: Date
  updatedAt: Date
}

export interface PixHistory {
  id: string
  userId: string
  recipientName: string
  recipientPixKey: string
  amount: number
  description?: string
  createdAt: Date
}

export interface CreateUserRequest {
  name: string
  email: string
  pixKey: string
  cpf: string
}

export interface UpdateUserRequest {
  name?: string
  email?: string
  pixKey?: string
  cpf?: string
}

export interface ContaBancaria {
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

export interface CreateContaBancariaRequest {
  banco: string
  agencia: string
  conta: string
  tipo: "CC" | "CP" | "PP"
  tipoPessoa: "F" | "J"
}

export interface UpdateContaBancariaRequest {
  banco?: string
  agencia?: string
  conta?: string
  tipo?: "CC" | "CP" | "PP"
  tipoPessoa?: "F" | "J"
}
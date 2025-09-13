export interface User {
  id: string
  name: string
  email: string
  pixKey: string
  cpf: string
  createdAt: Date
  updatedAt: Date
}

export interface PixHistory {
  id: string
  bankAccountId: string
  recipientName: string
  recipientPixKey: string
  amount: number
  description: string | null
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

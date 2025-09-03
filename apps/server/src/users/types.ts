export interface User {
  id: string
  name: string
  email: string
  pixKey: string
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
}

export interface UpdateUserRequest {
  name?: string
  email?: string
  pixKey?: string
}

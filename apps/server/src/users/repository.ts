import type { User, CreateUserRequest, UpdateUserRequest, PixHistory, CreateBankAccountRequest, UpdateBankAccountRequest, BankAccount } from './types'

export class UserRepository {
  static async findById(id: string): Promise<User | null> {
    return null
  }

  static async findByEmail(email: string): Promise<User | null> {
    return null
  }

  static async createUser(data: CreateUserRequest): Promise<User> {
    throw new Error('Implementar com Prisma')
  }

  static async updateUser(id: string, data: UpdateUserRequest): Promise<User | null> {
    throw new Error('Implementar com Prisma')
  }

  static async deleteUser(id: string): Promise<boolean> {
    throw new Error('Implementar com Prisma')
  }

  static async getPixHistory(userId: string, limit = 10): Promise<PixHistory[]> {
    throw new Error('Implementar com Prisma')
  }

  static async addPixHistory(userId: string, pixData: Omit<PixHistory, 'id' | 'userId' | 'createdAt'>): Promise<PixHistory> {
    throw new Error('Implementar com Prisma')
  }
}

export class BankAccountRepository {
  static async findById(id: string): Promise<BankAccount | null> {
    return null
  }

  static async findByConta(conta: string): Promise<BankAccount | null> {
    return null
  }

  static async createBankAccount(data: CreateBankAccountRequest): Promise<BankAccount> {
    throw new Error('Implementar com Prisma')
  }

  static async updateBankAccount(id: string, data: UpdateBankAccountRequest): Promise<BankAccount | null> {
    throw new Error('Implementar com Prisma')
  }

  static async deleteBankAccount(id: string): Promise<boolean> {
    throw new Error('Implementar com Prisma')
  }
}
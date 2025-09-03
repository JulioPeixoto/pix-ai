import type { User, CreateUserRequest, UpdateUserRequest, PixHistory, ContaBancaria, CreateContaBancariaRequest, UpdateContaBancariaRequest } from './types'

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

export class ContaBancariaRepository {
  static async findById(id: string): Promise<ContaBancaria | null> {
    return null
  }

  static async findByConta(conta: string): Promise<ContaBancaria | null> {
    return null
  }

  static async createContaBancaria(data: CreateContaBancariaRequest): Promise<ContaBancaria> {
    throw new Error('Implementar com Prisma')
  }

  static async updateContaBancaria(id: string, data: UpdateContaBancariaRequest): Promise<ContaBancaria | null> {
    throw new Error('Implementar com Prisma')
  }

  static async deleteContaBancaria(id: string): Promise<boolean> {
    throw new Error('Implementar com Prisma')
  }
}
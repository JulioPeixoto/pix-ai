import type { User, CreateUserRequest, UpdateUserRequest, PixHistory } from './types'

export class UserRepository {
  static async findById(id: string): Promise<User | null> {
    return null
  }

  static async findByEmail(email: string): Promise<User | null> {
    return null
  }

  static async create(data: CreateUserRequest): Promise<User> {
    throw new Error('Implementar com Prisma')
  }

  static async update(id: string, data: UpdateUserRequest): Promise<User | null> {
    throw new Error('Implementar com Prisma')
  }

  static async delete(id: string): Promise<boolean> {
    throw new Error('Implementar com Prisma')
  }

  static async getPixHistory(userId: string, limit = 10): Promise<PixHistory[]> {
    throw new Error('Implementar com Prisma')
  }

  static async addPixHistory(userId: string, pixData: Omit<PixHistory, 'id' | 'userId' | 'createdAt'>): Promise<PixHistory> {
    throw new Error('Implementar com Prisma')
  }
}

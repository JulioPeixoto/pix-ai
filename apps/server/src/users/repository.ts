import type { User, CreateUserRequest, UpdateUserRequest, PixHistory } from './types'
import prisma from '../../prisma'
import { PixStatus } from '../../prisma/generated/enums'

export class UserRepository {
  static async findById(id: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id }
      })
      return user
    } catch (error) {
      console.error('Error finding user by id:', error)
      return null
    }
  }

  static async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { email }
      })
      return user
    } catch (error) {
      console.error('Error finding user by email:', error)
      return null
    }
  }

  static async createUser(data: CreateUserRequest): Promise<User> {
    try {
      
      const existingEmail = await prisma.user.findFirst({
        where: { email: data.email }
      })
      if (existingEmail) {
        throw new Error('Email already in use')
      }

      const existingCpf = await prisma.user.findFirst({
        where: { cpf: data.cpf }
      })
      if (existingCpf) {
        throw new Error('CPF already in use')
      }

      const user = await prisma.user.create({
        data
      })
      return user
    } catch (error) {
      console.error('Error creating user:', error)
      throw new Error('Failed to create user')
    }
  }

  static async updateUser(id: string, data: UpdateUserRequest): Promise<User | null> {
    try {
      const user = await prisma.user.update({
        where: { id },
        data
      })
      return user
    } catch (error) {
      console.error('Error updating user:', error)
      return null
    }
  }

  static async deleteUser(id: string): Promise<User> {
    try {
      return await prisma.user.delete({
        where: { id }
      })
    } catch (error) {
      console.error('Error deleting user:', error)
      throw new Error('Failed to delete user')
    }
  }

  static async getPixHistory(userId: string, limit = 10): Promise<PixHistory[]> {
    try {
      const transactions = await prisma.pixTransaction.findMany({
        where: { userId },
        take: limit,
        orderBy: { createdAt: 'desc' }
      })
      return transactions
    } catch (error) {
      console.error('Error getting pix history:', error)
      return []
    }
  }

  static async addPixHistory(userId: string, pixData: Omit<PixHistory, 'id' | 'userId' | 'createdAt'>): Promise<PixHistory> {
    try {
      const transaction = await prisma.pixTransaction.create({
        data: {
          ...pixData,
          userId,
          status: PixStatus.PENDING
        }
      })
      return transaction
    } catch (error) {
      console.error('Error adding pix history:', error)
      throw new Error('Failed to add pix transaction')
    }
  }
}

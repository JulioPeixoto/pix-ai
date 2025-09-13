import type { BankAccount, CreateBankAccountRequest, UpdateBankAccountRequest } from './types'

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

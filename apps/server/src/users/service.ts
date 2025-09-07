import { BankAccountRepository, UserRepository } from './repository'
import type { User, CreateUserRequest, UpdateUserRequest, PixHistory, UpdateBankAccountRequest, BankAccount, CreateBankAccountRequest } from './types'

export class UserService {
    static async getUser(id: string): Promise<User | null> {
        return await UserRepository.findById(id)
    }

    static async createUser(data: CreateUserRequest): Promise<User> {
        const existingUser = await UserRepository.findByEmail(data.email)
        if (existingUser) {
            throw new Error('Email already in use')
        }

        return await UserRepository.createUser(data)
    }

    static async updateUser(id: string, data: UpdateUserRequest): Promise<User | null> {
        const user = await UserRepository.findById(id)
        if (!user) {
            throw new Error('User not found')
        }

        return await UserRepository.updateUser(id, data)
    }

    static async deleteUser(id: string): Promise<boolean> {
        const user = await UserRepository.findById(id)
        if (!user) {
            throw new Error('User not found')
        }

        return await UserRepository.deleteUser(id)
    }

    static async getUserPixHistory(userId: string): Promise<PixHistory[]> {
        return await UserRepository.getPixHistory(userId)
    }

    static async addToPixHistory(userId: string, pixData: { recipientName: string, recipientPixKey: string, amount: number, description?: string }): Promise<PixHistory> {
        return await UserRepository.addPixHistory(userId, pixData)
    }

}

export class BankAccountService {
    static async getBankAccount(id: string): Promise<BankAccount | null> {
        return await BankAccountRepository.findById(id)
    }

    static async createBankAccount(data: CreateBankAccountRequest): Promise<BankAccount> {
        const existingUser = await BankAccountRepository.findByConta(data.conta)
        if (existingUser) {
            throw new Error('Account already exists')
        }

        return await BankAccountRepository.createBankAccount(data)
    }

    static async updateBankAccount(id: string, data: UpdateBankAccountRequest): Promise<BankAccount | null> {
        const user = await BankAccountRepository.findById(id)
        if (!user) {
            throw new Error('Account not found')
        }

        return await BankAccountRepository.updateBankAccount(id, data)
    }

    static async deleteBankAccount(id: string): Promise<boolean> {
        const user = await BankAccountRepository.findById(id)
        if (!user) {
            throw new Error('Account not found')
        }

        return await BankAccountRepository.deleteBankAccount(id)
    }
}
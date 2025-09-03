import { ContaBancariaRepository, UserRepository } from './repository'
import type { User, CreateUserRequest, UpdateUserRequest, PixHistory, UpdateContaBancariaRequest, ContaBancaria, CreateContaBancariaRequest } from './types'

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

export class ContaBancariaService {
    static async getContaBancaria(id: string): Promise<ContaBancaria | null> {
        return await ContaBancariaRepository.findById(id)
    }

    static async createContaBancaria(data: CreateContaBancariaRequest): Promise<ContaBancaria> {
        const existingUser = await ContaBancariaRepository.findByConta(data.conta)
        if (existingUser) {
            throw new Error('Account already exists')
        }

        return await ContaBancariaRepository.createContaBancaria(data)
    }

    static async updateContaBancaria(id: string, data: UpdateContaBancariaRequest): Promise<ContaBancaria | null> {
        const user = await ContaBancariaRepository.findById(id)
        if (!user) {
            throw new Error('Account not found')
        }

        return await ContaBancariaRepository.updateContaBancaria(id, data)
    }

    static async deleteContaBancaria(id: string): Promise<boolean> {
        const user = await ContaBancariaRepository.findById(id)
        if (!user) {
            throw new Error('Account not found')
        }

        return await ContaBancariaRepository.deleteContaBancaria(id)
    }
}
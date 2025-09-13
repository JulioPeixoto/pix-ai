import type { Prisma } from '../../prisma/generated/client'

export type { User, PixTransaction as PixHistory } from '../../prisma/generated/client'

export type CreateUserRequest = Prisma.UserCreateInput
export type UpdateUserRequest = Prisma.UserUpdateInput

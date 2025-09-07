import { Elysia } from 'elysia'
import { BankAccountService, UserService } from './service'
import { BankAccountParamsSchema, CreateBankAccountSchema, CreateUserSchema, UpdateBankAccountSchema, UpdateUserSchema, UserParamsSchema } from './schema'

export const usersRouter = new Elysia({ prefix: '/users' })
  .get('/:id', async ({ params }) => {
    const user = await UserService.getUser(params.id)
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }, {
    params: UserParamsSchema
  })

  .post('/', async ({ body }) => {
    return await UserService.createUser(body)
  }, {
    body: CreateUserSchema
  })

  .put('/:id', async ({ params, body }) => {
    return await UserService.updateUser(params.id, body)
  }, {
    params: UserParamsSchema,
    body: UpdateUserSchema
  })

  .delete('/:id', async ({ params }) => {
    return await UserService.deleteUser(params.id)
  }, {
    params: UserParamsSchema
  })

  .get('/:id/pix-history', async ({ params }) => {
    return await UserService.getUserPixHistory(params.id)
  }, {
    params: UserParamsSchema
  })

export const bankAccountRouter = new Elysia({ prefix: '/bank-account' })
  .get('/:id', async ({ params }) => {
    return await BankAccountService.getBankAccount(params.contaBancariaId)
  }, {
    params: BankAccountParamsSchema
  })
  .post('/', async ({ body }) => {
    return await BankAccountService.createBankAccount(body)
  }, {
    body: CreateBankAccountSchema
  })
  .put('/:id', async ({ params, body }) => {
    return await BankAccountService.updateBankAccount(params.contaBancariaId, body)
  }, {
    params: BankAccountParamsSchema,
    body: UpdateBankAccountSchema
  })
  .delete('/:id', async ({ params }) => {
    return await BankAccountService.deleteBankAccount(params.contaBancariaId)
  }, {
    params: BankAccountParamsSchema
  })

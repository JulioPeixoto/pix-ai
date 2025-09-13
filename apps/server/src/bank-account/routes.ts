import { Elysia } from 'elysia'
import { BankAccountService } from './service'
import { BankAccountParamsSchema, CreateBankAccountSchema, UpdateBankAccountSchema } from './schema'

export const bankAccountRouter = new Elysia({ prefix: '/bank-account' })
  .get('/:id', async ({ params }) => {
    return await BankAccountService.getBankAccount(params.id)
  }, {
    params: BankAccountParamsSchema
  })
  .post('/', async ({ body }) => {
    return await BankAccountService.createBankAccount(body)
  }, {
    body: CreateBankAccountSchema
  })
  .put('/:id', async ({ params, body }) => {
    return await BankAccountService.updateBankAccount(params.id, body)
  }, {
    params: BankAccountParamsSchema,
    body: UpdateBankAccountSchema
  })
  .delete('/:id', async ({ params }) => {
    return await BankAccountService.deleteBankAccount(params.id)
  }, {
    params: BankAccountParamsSchema
  })

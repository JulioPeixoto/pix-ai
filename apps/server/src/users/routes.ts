import { Elysia } from 'elysia'
import { ContaBancariaService, UserService } from './service'
import { ContaBancariaParamsSchema, CreateContaBancariaSchema, CreateUserSchema, UpdateContaBancariaSchema, UpdateUserSchema, UserParamsSchema } from './schema'

export const usersRouter = new Elysia({ prefix: '/users' })
  .get('/:id', async ({ params }) => {
    const user = await UserService.getUser(params.id)
    if (!user) {
      throw new Error('Usuário não encontrado')
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

export const contaBancariaRouter = new Elysia({ prefix: '/conta-bancaria' })
  .get('/:id', async ({ params }) => {
    return await ContaBancariaService.getContaBancaria(params.contaBancariaId)
  }, {
    params: ContaBancariaParamsSchema
  })
  .post('/', async ({ body }) => {
    return await ContaBancariaService.createContaBancaria(body)
  }, {
    body: CreateContaBancariaSchema
  })
  .put('/:id', async ({ params, body }) => {
    return await ContaBancariaService.updateContaBancaria(params.contaBancariaId, body)
  }, {
    params: ContaBancariaParamsSchema,
    body: UpdateContaBancariaSchema
  })
  .delete('/:id', async ({ params }) => {
    return await ContaBancariaService.deleteContaBancaria(params.contaBancariaId)
  }, {
    params: ContaBancariaParamsSchema
  })

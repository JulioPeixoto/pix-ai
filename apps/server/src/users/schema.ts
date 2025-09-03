import { t } from 'elysia'

export const CreateUserSchema = t.Object({
  name: t.String({ minLength: 2 }),
  email: t.String({ format: 'email' }),
  pixKey: t.String({ minLength: 11 })
})

export const UpdateUserSchema = t.Object({
  name: t.Optional(t.String({ minLength: 2 })),
  email: t.Optional(t.String({ format: 'email' })),
  pixKey: t.Optional(t.String({ minLength: 11 }))
})

export const UserParamsSchema = t.Object({
  id: t.String()
})

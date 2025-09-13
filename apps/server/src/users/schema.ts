import { t } from 'elysia'

export const CreateUserSchema = t.Object({
  name: t.String({ 
    minLength: 2,
    examples: ['John Doe']
  }),
  email: t.String({ 
    format: 'email',
    examples: ['john.doe@example.com']
  }),
  pixKey: t.String({ 
    minLength: 11,
    examples: ['12345678901']
  }),
  cpf: t.String({ 
    minLength: 11,
    examples: ['12345678901']
  })
})

export const UpdateUserSchema = t.Object({
  name: t.Optional(t.String({ 
    minLength: 2,
    examples: ['Julio Doe']
  })),
  email: t.Optional(t.String({ 
    format: 'email',
    examples: ['julio.doe@example.com']
  })),
  pixKey: t.Optional(t.String({ 
    minLength: 11,
    examples: ['32145678901']
  })),
  cpf: t.Optional(t.String({ 
    minLength: 11,
    examples: ['32145678901']
  }))
})

export const UserParamsSchema = t.Object({
  id: t.String()
})

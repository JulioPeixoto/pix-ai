import { t } from 'elysia'

export const CreateBankAccountSchema = t.Object({
  userId: t.String(),
  banco: t.String({ minLength: 3 }),
  agencia: t.String({ minLength: 4 }),
  conta: t.String({ minLength: 4 }),
  tipo: t.Enum({ CC: 'CC', CP: 'CP', PP: 'PP' }),
  tipoPessoa: t.Enum({ F: 'F', J: 'J' })
})

export const UpdateBankAccountSchema = t.Object({
  banco: t.Optional(t.String({ minLength: 3 })),
  agencia: t.Optional(t.String({ minLength: 4 })),
  conta: t.Optional(t.String({ minLength: 4 })),
  tipo: t.Optional(t.Enum({ CC: 'CC', CP: 'CP', PP: 'PP' })),
  tipoPessoa: t.Optional(t.Enum({ F: 'F', J: 'J' }))
})

export const BankAccountParamsSchema = t.Object({
  id: t.String()
})

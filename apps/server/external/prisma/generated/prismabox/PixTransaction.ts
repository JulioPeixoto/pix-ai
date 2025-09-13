import { t } from "elysia"

import { __transformDate__ } from "./__transformDate__"

import { __nullable__ } from "./__nullable__"

export const PixTransactionPlain = t.Object(
  {
    id: t.String(),
    amount: t.Number(),
    description: __nullable__(t.String()),
    status: t.Union([t.Literal("PENDING"), t.Literal("COMPLETED"), t.Literal("FAILED")], {
      additionalProperties: false,
    }),
    recipientName: t.String(),
    recipientPixKey: t.String(),
    createdAt: t.Date(),
    bankAccountId: t.String(),
  },
  { additionalProperties: false }
)

export const PixTransactionRelations = t.Object(
  {
    bankAccount: t.Object(
      {
        id: t.String(),
        userId: t.String(),
        banco: t.String(),
        agencia: t.String(),
        conta: t.String(),
        digito: __nullable__(t.String()),
        tipo: t.Union([t.Literal("CC"), t.Literal("CP"), t.Literal("PP")], {
          additionalProperties: false,
        }),
        tipoPessoa: t.Union([t.Literal("F"), t.Literal("J")], {
          additionalProperties: false,
        }),
        titular: t.String(),
        cpfCnpj: t.String(),
        ativa: t.Boolean(),
        validada: t.Boolean(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false }
    ),
  },
  { additionalProperties: false }
)

export const PixTransactionPlainInputCreate = t.Object(
  {
    amount: t.Number(),
    description: t.Optional(__nullable__(t.String())),
    status: t.Union([t.Literal("PENDING"), t.Literal("COMPLETED"), t.Literal("FAILED")], {
      additionalProperties: false,
    }),
    recipientName: t.String(),
    recipientPixKey: t.String(),
  },
  { additionalProperties: false }
)

export const PixTransactionPlainInputUpdate = t.Object(
  {
    amount: t.Optional(t.Number()),
    description: t.Optional(__nullable__(t.String())),
    status: t.Optional(
      t.Union([t.Literal("PENDING"), t.Literal("COMPLETED"), t.Literal("FAILED")], { additionalProperties: false })
    ),
    recipientName: t.Optional(t.String()),
    recipientPixKey: t.Optional(t.String()),
  },
  { additionalProperties: false }
)

export const PixTransactionRelationsInputCreate = t.Object(
  {
    bankAccount: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false }
        ),
      },
      { additionalProperties: false }
    ),
  },
  { additionalProperties: false }
)

export const PixTransactionRelationsInputUpdate = t.Partial(
  t.Object(
    {
      bankAccount: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false }
          ),
        },
        { additionalProperties: false }
      ),
    },
    { additionalProperties: false }
  )
)

export const PixTransactionWhere = t.Partial(
  t.Recursive(
    Self =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          amount: t.Number(),
          description: t.String(),
          status: t.Union([t.Literal("PENDING"), t.Literal("COMPLETED"), t.Literal("FAILED")], {
            additionalProperties: false,
          }),
          recipientName: t.String(),
          recipientPixKey: t.String(),
          createdAt: t.Date(),
          bankAccountId: t.String(),
        },
        { additionalProperties: false }
      ),
    { $id: "PixTransaction" }
  )
)

export const PixTransactionWhereUnique = t.Recursive(
  Self =>
    t.Intersect(
      [
        t.Partial(t.Object({ id: t.String() }, { additionalProperties: false }), { additionalProperties: false }),
        t.Union([t.Object({ id: t.String() })], {
          additionalProperties: false,
        }),
        t.Partial(
          t.Object({
            AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
            NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false }
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              amount: t.Number(),
              description: t.String(),
              status: t.Union([t.Literal("PENDING"), t.Literal("COMPLETED"), t.Literal("FAILED")], {
                additionalProperties: false,
              }),
              recipientName: t.String(),
              recipientPixKey: t.String(),
              createdAt: t.Date(),
              bankAccountId: t.String(),
            },
            { additionalProperties: false }
          )
        ),
      ],
      { additionalProperties: false }
    ),
  { $id: "PixTransaction" }
)

export const PixTransactionSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      amount: t.Boolean(),
      description: t.Boolean(),
      status: t.Boolean(),
      recipientName: t.Boolean(),
      recipientPixKey: t.Boolean(),
      createdAt: t.Boolean(),
      bankAccountId: t.Boolean(),
      bankAccount: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false }
  )
)

export const PixTransactionInclude = t.Partial(
  t.Object({ status: t.Boolean(), bankAccount: t.Boolean(), _count: t.Boolean() }, { additionalProperties: false })
)

export const PixTransactionOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      amount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      description: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recipientName: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      recipientPixKey: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      bankAccountId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false }
  )
)

export const PixTransaction = t.Composite([PixTransactionPlain, PixTransactionRelations], {
  additionalProperties: false,
})

export const PixTransactionInputCreate = t.Composite(
  [PixTransactionPlainInputCreate, PixTransactionRelationsInputCreate],
  { additionalProperties: false }
)

export const PixTransactionInputUpdate = t.Composite(
  [PixTransactionPlainInputUpdate, PixTransactionRelationsInputUpdate],
  { additionalProperties: false }
)

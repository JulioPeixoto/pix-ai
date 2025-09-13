import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const BankAccountPlain = t.Object(
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
  { additionalProperties: false },
);

export const BankAccountRelations = t.Object(
  {
    user: t.Object(
      {
        id: t.String(),
        name: t.String(),
        email: t.String(),
        pixKey: t.String(),
        cpf: t.String(),
        createdAt: t.Date(),
        updatedAt: t.Date(),
      },
      { additionalProperties: false },
    ),
    pixTransactions: t.Array(
      t.Object(
        {
          id: t.String(),
          amount: t.Number(),
          description: __nullable__(t.String()),
          status: t.Union(
            [t.Literal("PENDING"), t.Literal("COMPLETED"), t.Literal("FAILED")],
            { additionalProperties: false },
          ),
          recipientName: t.String(),
          recipientPixKey: t.String(),
          createdAt: t.Date(),
          bankAccountId: t.String(),
        },
        { additionalProperties: false },
      ),
      { additionalProperties: false },
    ),
  },
  { additionalProperties: false },
);

export const BankAccountPlainInputCreate = t.Object(
  {
    banco: t.String(),
    agencia: t.String(),
    conta: t.String(),
    digito: t.Optional(__nullable__(t.String())),
    tipo: t.Union([t.Literal("CC"), t.Literal("CP"), t.Literal("PP")], {
      additionalProperties: false,
    }),
    tipoPessoa: t.Union([t.Literal("F"), t.Literal("J")], {
      additionalProperties: false,
    }),
    titular: t.String(),
    cpfCnpj: t.String(),
    ativa: t.Optional(t.Boolean()),
    validada: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const BankAccountPlainInputUpdate = t.Object(
  {
    banco: t.Optional(t.String()),
    agencia: t.Optional(t.String()),
    conta: t.Optional(t.String()),
    digito: t.Optional(__nullable__(t.String())),
    tipo: t.Optional(
      t.Union([t.Literal("CC"), t.Literal("CP"), t.Literal("PP")], {
        additionalProperties: false,
      }),
    ),
    tipoPessoa: t.Optional(
      t.Union([t.Literal("F"), t.Literal("J")], {
        additionalProperties: false,
      }),
    ),
    titular: t.Optional(t.String()),
    cpfCnpj: t.Optional(t.String()),
    ativa: t.Optional(t.Boolean()),
    validada: t.Optional(t.Boolean()),
  },
  { additionalProperties: false },
);

export const BankAccountRelationsInputCreate = t.Object(
  {
    user: t.Object(
      {
        connect: t.Object(
          {
            id: t.String({ additionalProperties: false }),
          },
          { additionalProperties: false },
        ),
      },
      { additionalProperties: false },
    ),
    pixTransactions: t.Optional(
      t.Object(
        {
          connect: t.Array(
            t.Object(
              {
                id: t.String({ additionalProperties: false }),
              },
              { additionalProperties: false },
            ),
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

export const BankAccountRelationsInputUpdate = t.Partial(
  t.Object(
    {
      user: t.Object(
        {
          connect: t.Object(
            {
              id: t.String({ additionalProperties: false }),
            },
            { additionalProperties: false },
          ),
        },
        { additionalProperties: false },
      ),
      pixTransactions: t.Partial(
        t.Object(
          {
            connect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
            disconnect: t.Array(
              t.Object(
                {
                  id: t.String({ additionalProperties: false }),
                },
                { additionalProperties: false },
              ),
              { additionalProperties: false },
            ),
          },
          { additionalProperties: false },
        ),
      ),
    },
    { additionalProperties: false },
  ),
);

export const BankAccountWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          userId: t.String(),
          banco: t.String(),
          agencia: t.String(),
          conta: t.String(),
          digito: t.String(),
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
        { additionalProperties: false },
      ),
    { $id: "BankAccount" },
  ),
);

export const BankAccountWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            {
              id: t.String(),
              banco_agencia_conta_cpfCnpj: t.Object(
                {
                  banco: t.String(),
                  agencia: t.String(),
                  conta: t.String(),
                  cpfCnpj: t.String(),
                },
                { additionalProperties: false },
              ),
            },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [
            t.Object({ id: t.String() }),
            t.Object({
              banco_agencia_conta_cpfCnpj: t.Object(
                {
                  banco: t.String(),
                  agencia: t.String(),
                  conta: t.String(),
                  cpfCnpj: t.String(),
                },
                { additionalProperties: false },
              ),
            }),
          ],
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              userId: t.String(),
              banco: t.String(),
              agencia: t.String(),
              conta: t.String(),
              digito: t.String(),
              tipo: t.Union(
                [t.Literal("CC"), t.Literal("CP"), t.Literal("PP")],
                { additionalProperties: false },
              ),
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
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "BankAccount" },
);

export const BankAccountSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      userId: t.Boolean(),
      banco: t.Boolean(),
      agencia: t.Boolean(),
      conta: t.Boolean(),
      digito: t.Boolean(),
      tipo: t.Boolean(),
      tipoPessoa: t.Boolean(),
      titular: t.Boolean(),
      cpfCnpj: t.Boolean(),
      ativa: t.Boolean(),
      validada: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      user: t.Boolean(),
      pixTransactions: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BankAccountInclude = t.Partial(
  t.Object(
    {
      tipo: t.Boolean(),
      tipoPessoa: t.Boolean(),
      user: t.Boolean(),
      pixTransactions: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const BankAccountOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      userId: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      banco: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      agencia: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      conta: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      digito: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      titular: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cpfCnpj: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      ativa: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      validada: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const BankAccount = t.Composite(
  [BankAccountPlain, BankAccountRelations],
  { additionalProperties: false },
);

export const BankAccountInputCreate = t.Composite(
  [BankAccountPlainInputCreate, BankAccountRelationsInputCreate],
  { additionalProperties: false },
);

export const BankAccountInputUpdate = t.Composite(
  [BankAccountPlainInputUpdate, BankAccountRelationsInputUpdate],
  { additionalProperties: false },
);

import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const PixPeriodicidade = t.Union(
  [t.Literal("MENSAL"), t.Literal("SEMANAL"), t.Literal("ANUAL")],
  { additionalProperties: false },
);

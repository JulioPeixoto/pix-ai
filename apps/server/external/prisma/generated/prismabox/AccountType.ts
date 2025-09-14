import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const AccountType = t.Union(
  [t.Literal("CC"), t.Literal("CP"), t.Literal("PP")],
  { additionalProperties: false },
);

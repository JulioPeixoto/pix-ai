import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const PersonType = t.Union([t.Literal("F"), t.Literal("J")], {
  additionalProperties: false,
});

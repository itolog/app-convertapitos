import * as z from "zod/v4";

import { VALIDATOR_ERROR } from "@/utils/validators/validatorError";

export const emailRequired = () => {
  return z
    .email({ message: VALIDATOR_ERROR.INVALID_EMAIL })
    .trim()
    .min(1, { message: VALIDATOR_ERROR.REQUIRED });
};

export const email = () => {
  return z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => {
        if (val === undefined || val === "") return true;
        try {
          return z.string().email().safeParse(val).success;
        } catch {
          return false;
        }
      },
      {
        message: VALIDATOR_ERROR.INVALID_EMAIL,
      },
    );
};

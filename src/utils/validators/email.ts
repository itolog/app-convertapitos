import * as z from "zod";

import { VALIDATOR_ERROR } from "@/utils/validators/validatorError";

export const emailRequired = () => {
  return z.string().trim().min(1).email();
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

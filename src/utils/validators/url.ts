import * as z from "zod";

import { VALIDATOR_ERROR } from "@/utils/validators/validatorError";

export const urlRequired = () => {
  return z.string().trim().min(1).url();
};

export const url = () => {
  return z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => {
        if (val === undefined || val === "") return true;
        try {
          new URL(val);
          return true;
        } catch {
          return false;
        }
      },
      {
        message: VALIDATOR_ERROR.INVALID_URL,
      },
    );
};

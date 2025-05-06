import * as z from "zod";

import { VALIDATOR_ERROR } from "@/utils/validators/validatorError";

export const stringRequired = () => {
  return z.string().min(1, {
    message: VALIDATOR_ERROR.REQUIRED,
  });
};

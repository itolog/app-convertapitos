import { parsePhoneNumberFromString } from "libphonenumber-js";
import { z } from "zod";

import { VALIDATOR_ERROR } from "@/utils/validators/validatorError";

export const phoneRequired = () => {
  return z
    .string()
    .trim()
    .min(1, { message: VALIDATOR_ERROR.REQUIRED })
    .refine(
      (value) => {
        try {
          const phoneNumber = parsePhoneNumberFromString(value);
          return phoneNumber?.isValid() ?? false;
        } catch {
          return false;
        }
      },
      {
        message: VALIDATOR_ERROR.INVALID_PHONE_NUMBER,
      },
    );
};

export const phone = () => {
  return z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => {
        if (value === undefined || value === "") return true;
        try {
          const phoneNumber = parsePhoneNumberFromString(value);
          return phoneNumber?.isValid() ?? false;
        } catch {
          return false;
        }
      },
      {
        message: VALIDATOR_ERROR.INVALID_PHONE_NUMBER,
      },
    );
};

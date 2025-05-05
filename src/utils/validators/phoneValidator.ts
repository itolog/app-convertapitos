import { parsePhoneNumberFromString } from "libphonenumber-js";
import { z } from "zod";

export const phoneValidator = () => {
  return z
    .string()
    .min(1, "Required")
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
        message: "Invalid phone number",
      },
    );
};

import * as z from "zod";

export const emailValidator = () => {
  return z.string().email().min(1, { message: "Required" });
};

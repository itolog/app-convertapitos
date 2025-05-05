import * as z from "zod";

export const urlValidator = () => {
  return z.string().url().min(1, { message: "Required" });
};

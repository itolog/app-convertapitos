import * as z from "zod";

export const stringRequired = () => {
  return z.string().min(1);
};

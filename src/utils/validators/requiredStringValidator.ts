import * as z from "zod";

export const requiredStringValidator = () => {
  return z.string().min(1, {
    message: "Required",
  });
};

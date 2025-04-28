import * as z from "zod";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.FIRST_NAME]: z.string().min(1, {
    message: "Required",
  }),
  [FORM_FIELD.LAST_NAME]: z.string().min(1, {
    message: "Required",
  }),
  [FORM_FIELD.PHONE]: z.number().min(3, {
    message: "Required",
  }),
  [FORM_FIELD.EMAIL]: z.string().email().min(1, { message: "Required" }),
});

export default validationSchema;

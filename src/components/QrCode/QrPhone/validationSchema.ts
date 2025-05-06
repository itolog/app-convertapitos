import * as z from "zod";

import { phoneRequired } from "@/utils/validators";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.PHONE]: phoneRequired(),
});

export type FormValues = z.infer<typeof validationSchema>;

export default validationSchema;

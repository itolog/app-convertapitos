import * as z from "zod";

import { emailRequired } from "@/utils/validators/email";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.EMAIL]: emailRequired(),
});

export type FormValues = z.infer<typeof validationSchema>;

export default validationSchema;

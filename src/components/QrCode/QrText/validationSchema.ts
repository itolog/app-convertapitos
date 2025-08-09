import * as z from "zod/v4";

import { stringRequired } from "@/utils/validators/stringRequired";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.TEXT]: stringRequired(),
});

export type FormValues = z.infer<typeof validationSchema>;

export default validationSchema;

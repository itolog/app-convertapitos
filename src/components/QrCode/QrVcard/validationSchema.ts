import * as z from "zod";

import { email } from "@/utils/validators/email";
import { phone } from "@/utils/validators/phone";
import { stringRequired } from "@/utils/validators/stringRequired";
import { url } from "@/utils/validators/url";

import { FORM_FIELD } from "@/components/QrCode/constants";

const stringValidator = z.string().optional();

const validationSchema = z.object({
  [FORM_FIELD.FIRST_NAME]: stringRequired(),
  [FORM_FIELD.LAST_NAME]: stringRequired(),
  [FORM_FIELD.PHONE]: phone(),
  [FORM_FIELD.EMAIL]: email(),
  [FORM_FIELD.COMPANY]: stringValidator,
  [FORM_FIELD.JOB_TITLE]: stringValidator,
  [FORM_FIELD.URL]: url(),
});

export type FormValues = z.infer<typeof validationSchema>;

export default validationSchema;

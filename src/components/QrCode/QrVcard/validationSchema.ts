import * as z from "zod";

import {
  emailValidator,
  phoneValidator,
  requiredStringValidator,
  urlValidator,
} from "@/utils/validators";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.FIRST_NAME]: requiredStringValidator(),
  [FORM_FIELD.LAST_NAME]: requiredStringValidator(),
  [FORM_FIELD.PHONE]: phoneValidator(),
  [FORM_FIELD.EMAIL]: emailValidator(),
  [FORM_FIELD.COMPANY]: requiredStringValidator(),
  [FORM_FIELD.JOB_TITLE]: requiredStringValidator(),
  [FORM_FIELD.URL]: urlValidator(),
});

export default validationSchema;

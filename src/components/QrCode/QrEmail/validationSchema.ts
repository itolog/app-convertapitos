import * as z from "zod";

import { emailValidator } from "@/utils/validators";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.EMAIL]: emailValidator(),
});

export default validationSchema;

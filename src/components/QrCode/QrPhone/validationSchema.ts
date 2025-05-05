import * as z from "zod";

import { phoneValidator } from "@/utils/validators";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.PHONE]: phoneValidator(),
});

export default validationSchema;

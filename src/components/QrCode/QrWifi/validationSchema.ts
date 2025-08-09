import * as z from "zod/v4";

import { stringRequired } from "@/utils/validators/stringRequired";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.SSID]: stringRequired(),
  [FORM_FIELD.PASSWORD]: stringRequired(),
  [FORM_FIELD.ENCRYPTION]: stringRequired(),
  [FORM_FIELD.WIFI_HIDDEN]: z.boolean(),
});

export type FormValues = z.infer<typeof validationSchema>;

export default validationSchema;

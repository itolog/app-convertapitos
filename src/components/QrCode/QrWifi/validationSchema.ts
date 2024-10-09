import * as z from "zod";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.SSID]: z.string().min(1, { message: "Required" }),
  [FORM_FIELD.PASSWORD]: z.string().min(1, { message: "Required" }),
  [FORM_FIELD.ENCRYPTION]: z.string().min(1, { message: "Required" }),
  [FORM_FIELD.WIFI_HIDDEN]: z.boolean(),
});

export default validationSchema;

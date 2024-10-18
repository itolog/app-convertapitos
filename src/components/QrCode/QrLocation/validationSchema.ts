import * as z from "zod";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.LATITUDE]: z.number().min(1, { message: "Required" }),
  [FORM_FIELD.LONGITUDE]: z.number().min(1, { message: "Required" }),
});

export default validationSchema;

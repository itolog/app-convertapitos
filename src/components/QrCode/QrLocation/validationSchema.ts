import * as z from "zod";

import { FORM_FIELD } from "@/components/QrCode/constants";

const numberValidator = z.string().min(1, { message: "Required" });

const validationSchema = z.object({
  [FORM_FIELD.LATITUDE]: numberValidator,
  [FORM_FIELD.LONGITUDE]: numberValidator,
});

export default validationSchema;

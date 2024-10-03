import * as z from "zod";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.URL]: z.string().url().min(1, { message: "Required" }),
});

export default validationSchema;

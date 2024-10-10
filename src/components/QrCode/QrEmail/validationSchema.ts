import * as z from "zod";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.EMAIL]: z.string().email().min(1, { message: "Required" }),
});

export default validationSchema;

import * as z from "zod";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.PHONE]: z.string().min(3, {
    message: "Required",
  }),
});

export default validationSchema;

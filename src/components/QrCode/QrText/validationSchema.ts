import * as z from "zod";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.TEXT]: z.string().min(1, {
    message:
      "RequiredRequiredRequiredRequiredRequiredRequiredRequiredRequiredRequiredRequiredRequired",
  }),
});

export default validationSchema;

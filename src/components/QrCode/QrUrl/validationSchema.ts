import * as z from "zod";

import { urlValidator } from "@/utils/validators";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.URL]: urlValidator(),
});

export default validationSchema;

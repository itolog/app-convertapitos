import * as z from "zod";

import { url } from "@/utils/validators";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.URL]: url(),
});

export default validationSchema;

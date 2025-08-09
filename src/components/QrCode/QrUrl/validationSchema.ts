import * as z from "zod/v4";

import { url } from "@/utils/validators/url";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = z.object({
  [FORM_FIELD.URL]: url(),
});

export default validationSchema;

import * as Yup from "yup";

import { FORM_FIELD } from "@/components/QrCode/constants";

const validationSchema = Yup.object().shape({
  [FORM_FIELD.URL]: Yup.string().email().required("Required"),
});

export default validationSchema;

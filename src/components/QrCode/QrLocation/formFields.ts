import { FORM_FIELD } from "@/components/QrCode/constants";
import { FormItem } from "@/components/QrCode/forms/QrCodeForm/types";

export const formFields: FormItem[] = [
  {
    name: FORM_FIELD.LATITUDE,
    label: FORM_FIELD.LATITUDE,
    type: "number",
    placeholder: FORM_FIELD.LATITUDE,
  },
  {
    name: FORM_FIELD.LONGITUDE,
    label: FORM_FIELD.LONGITUDE,
    type: "number",
    placeholder: FORM_FIELD.LONGITUDE,
  },
];

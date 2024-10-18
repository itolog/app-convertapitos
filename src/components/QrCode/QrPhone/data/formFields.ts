import { FORM_FIELD } from "@/components/QrCode/constants";
import { FormItem } from "@/components/QrCode/forms/QrCodeForm/types";

export const formFields: FormItem[] = [
  {
    name: FORM_FIELD.PHONE,
    placeholder: "Enter phone number",
    label: "phone",
    type: "tel",
    className: "w-full md:w-96 select-border",
  },
];

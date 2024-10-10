import { FORM_FIELD } from "@/components/QrCode/constants";
import { FormItem } from "@/components/QrCode/forms/QrCodeForm/types";

export const formFields: FormItem[] = [
  {
    name: FORM_FIELD.TEXT,
    placeholder: "text",
    label: "text",
    type: "textarea",
    className: "w-full md:w-96",
  },
];

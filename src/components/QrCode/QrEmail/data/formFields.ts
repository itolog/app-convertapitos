import { FORM_FIELD } from "@/components/QrCode/constants";
import { FormItem } from "@/components/QrCode/forms/QrCodeForm/types";

export const formFields: FormItem[] = [
  {
    name: FORM_FIELD.EMAIL,
    placeholder: "email",
    label: "email",
    type: "email",
    className: "w-full md:w-96",
  },
];

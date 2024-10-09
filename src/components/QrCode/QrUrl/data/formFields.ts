import { FORM_FIELD } from "@/components/QrCode/constants";
import { FormItem } from "@/components/QrCode/forms/QrCodeForm/types";

export const formFields: FormItem[] = [
  {
    name: FORM_FIELD.URL,
    placeholder: "https://www.google.com/",
    label: "url",
    className: "w-full md:w-96",
  },
];

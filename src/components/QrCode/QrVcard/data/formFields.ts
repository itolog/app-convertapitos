import { FORM_FIELD } from "@/components/QrCode/constants";
import { FormItem } from "@/components/QrCode/forms/QrCodeForm/types";

export const formFields: FormItem[] = [
  {
    name: FORM_FIELD.FIRST_NAME,
    placeholder: "First name",
    label: "First name",
    type: "text",
  },
  {
    name: FORM_FIELD.LAST_NAME,
    placeholder: "Last name",
    label: "Last name",
    type: "text",
  },
  {
    name: FORM_FIELD.PHONE,
    placeholder: FORM_FIELD.PHONE,
    label: FORM_FIELD.PHONE,
    type: "tel",
  },
  {
    name: FORM_FIELD.EMAIL,
    placeholder: FORM_FIELD.EMAIL,
    label: FORM_FIELD.EMAIL,
    type: "email",
  },
  {
    name: FORM_FIELD.COMPANY,
    placeholder: "company",
    label: "company",
    type: "text",
  },
  {
    name: FORM_FIELD.JOB_TITLE,
    placeholder: "job title",
    label: "job title",
    type: "text",
  },
  {
    name: FORM_FIELD.URL,
    placeholder: "website",
    label: "website",
    type: "url",
  },
];

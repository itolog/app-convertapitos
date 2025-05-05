import { FORM_FIELD } from "@/components/QrCode/constants";

export interface FormValues {
  [FORM_FIELD.FIRST_NAME]: string;
  [FORM_FIELD.LAST_NAME]: string;
  [FORM_FIELD.PHONE]: string;
  [FORM_FIELD.EMAIL]: string;
  [FORM_FIELD.COMPANY]: string;
  [FORM_FIELD.JOB_TITLE]: string;
  [FORM_FIELD.URL]: string;
}

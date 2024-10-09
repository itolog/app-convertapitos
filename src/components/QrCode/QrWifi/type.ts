import { FORM_FIELD } from "@/components/QrCode/constants";

export interface FormValues {
  [FORM_FIELD.SSID]: string;
  [FORM_FIELD.PASSWORD]: string;
  [FORM_FIELD.ENCRYPTION]: string;
  [FORM_FIELD.WIFI_HIDDEN]: boolean;
}

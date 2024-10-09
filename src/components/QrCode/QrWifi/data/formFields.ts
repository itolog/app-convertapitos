import { FORM_FIELD } from "@/components/QrCode/constants";
import { FormItem } from "@/components/QrCode/forms/QrCodeForm/types";

export const formFields: FormItem[] = [
  {
    name: FORM_FIELD.SSID,
    placeholder: "SSID",
    label: "ssid",
  },
  {
    name: FORM_FIELD.ENCRYPTION,
    placeholder: "encryption",
    type: "co-select",
    label: "encryption",
    options: [
      { label: "WPA", value: "wpa" },
      { label: "WEP", value: "wep" },
    ],
  },
  {
    name: FORM_FIELD.PASSWORD,
    placeholder: "password",
    label: "password",
  },
  {
    name: FORM_FIELD.WIFI_HIDDEN,
    label: "Is Hidden?",
    type: "checkbox",
  },
];

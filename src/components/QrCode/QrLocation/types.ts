import { LatLngExpression } from "leaflet";

import { FORM_FIELD } from "@/components/QrCode/constants";

export type LatLong = LatLngExpression;

export interface FormValues {
  [FORM_FIELD.LATITUDE]: LatLong;
  [FORM_FIELD.LONGITUDE]: LatLong;
}

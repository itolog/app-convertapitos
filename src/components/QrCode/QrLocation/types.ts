import { LatLng } from "leaflet";

import { FORM_FIELD } from "@/components/QrCode/constants";

export type LatLong = Pick<LatLng, "lat" | "lng">;

export interface FormValues {
  [FORM_FIELD.LATITUDE]: LatLng;
  [FORM_FIELD.LONGITUDE]: LatLng;
}

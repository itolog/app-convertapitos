import { LatLngExpression } from "leaflet";

// import { LatLong } from "@/components/QrCode/QrLocation/types";

export interface CoMapProps {
  position: LatLngExpression;
  zoom?: number;
  dragging?: boolean;
  // onChange?: (data: LatLong) => void;
}

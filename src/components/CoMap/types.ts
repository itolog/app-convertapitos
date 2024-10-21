import { LatLngExpression } from "leaflet";

export interface CoMapProps {
  position: LatLngExpression;
  zoom?: number;
  onChange?: (data: { lat: LatLngExpression; long: LatLngExpression }) => void;
}

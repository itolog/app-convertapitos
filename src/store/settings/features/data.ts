import { FeaturesState } from "@/store/settings/features/types";

export const initialState: FeaturesState = {
  items: {
    convert: true,
    "convert:image": true,
    "convert:text": true,
    qrcode: true,
    "qrcode:url": true,
    "qrcode:text": true,
    "qrcode:email": true,
    "qrcode:phone": true,
    "qrcode:wifi": true,
    "qrcode:location": true,
  },
  loading: true,
};

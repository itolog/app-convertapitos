import { type Options } from "qr-code-styling";

import { ItemOptions } from "@/components/QrCode/types";

export interface QrcodeState {
  options: Options;
}

export type ColorPayload = ItemOptions;

export interface TypePayload {
  id: string;
  type: string;
}

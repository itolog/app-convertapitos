import { Options } from "@/components/QrCode/types";

export interface QrcodeState {
  options: Options;
}

export interface ColorPayload extends Record<string, string> {
  id: string;
  color: string;
}

export interface TypePayload {
  id: string;
  type: string;
}

import { qrcodeDefaultOptions } from "@/components/QrCode/data/qrcode";
import { Options } from "@/components/QrCode/types";

export const qrcodeOptions: Options = {
  ...qrcodeDefaultOptions,
  data: "https://www.google.com/",
};

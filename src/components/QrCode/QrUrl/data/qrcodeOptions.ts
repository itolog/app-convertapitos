import { Options } from "qr-code-styling";

import { qrcodeDefaultOptions } from "@/components/QrCode/data/qrcode";

export const qrcodeOptions: Options = {
  ...qrcodeDefaultOptions,
  data: "https://www.google.com/",
};

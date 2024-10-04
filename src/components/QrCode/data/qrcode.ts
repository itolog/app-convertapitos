import { Options } from "qr-code-styling";

export const OPTION_KEYS = {
  COLOR: "color",
  TYPE: "type",
  ROUND: "round",
  HIDE_BG_DOTS: "hideBackgroundDots",
  IMAGE_SIZE: "imageSize",
  MARGIN: "margin",
  IMAGE: "image",
};

export const qrcodeDefaultOptions: Options = {
  width: 256,
  height: 256,
  type: "canvas",
  margin: 10,
  image: "",
  qrOptions: {
    typeNumber: 0,
    mode: "Byte",
    errorCorrectionLevel: "Q",
  },
  // imageOptions: {
  //   [OPTION_KEYS.HIDE_BG_DOTS]: true,
  //   [OPTION_KEYS.IMAGE_SIZE]: 0.4,
  //   [OPTION_KEYS.MARGIN]: 20,
  //   crossOrigin: "anonymous",
  // },
  dotsOptions: {
    [OPTION_KEYS.COLOR]: "#222222",
    [OPTION_KEYS.TYPE]: "rounded",
  },
  backgroundOptions: {
    [OPTION_KEYS.COLOR]: "#5FD4F3",
  },
  cornersSquareOptions: {
    [OPTION_KEYS.COLOR]: "#222222",
    [OPTION_KEYS.TYPE]: "extra-rounded",
  },
  cornersDotOptions: {
    [OPTION_KEYS.COLOR]: "#222222",
    [OPTION_KEYS.TYPE]: "dot",
  },
};

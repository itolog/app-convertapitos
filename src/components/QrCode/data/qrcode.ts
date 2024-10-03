import {
  CornerDotType,
  CornerSquareType,
  DotType,
  DrawType,
  ErrorCorrectionLevel,
  Mode,
  Options,
  TypeNumber,
} from "qr-code-styling";

export const qrcodeDefaultOptions: Options = {
  width: 256,
  height: 256,
  type: "canvas" as DrawType,
  margin: 10,
  qrOptions: {
    typeNumber: 0 as TypeNumber,
    mode: "Byte" as Mode,
    errorCorrectionLevel: "Q" as ErrorCorrectionLevel,
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 20,
    crossOrigin: "anonymous",
  },
  dotsOptions: {
    color: "#222222",
    type: "rounded" as DotType,
  },
  backgroundOptions: {
    color: "#5FD4F3",
  },
  cornersSquareOptions: {
    color: "#222222",
    type: "extra-rounded" as CornerSquareType,
  },
  cornersDotOptions: {
    color: "#222222",
    type: "dot" as CornerDotType,
  },
};

import {
  CornerDotType,
  CornerSquareType,
  DotType,
  DrawType,
  ErrorCorrectionLevel,
  Gradient,
  Mode,
  ShapeType,
  TypeNumber,
} from "qr-code-styling";

export interface ItemOptions {
  id: string;
  color?: string;
  gradient?: Gradient;
}

export interface DotsOptions extends ItemOptions {
  type?: DotType;
}

export interface CornersSquareOptions extends ItemOptions {
  type?: CornerSquareType;
}

export interface CornersDotOptions extends ItemOptions {
  type?: CornerDotType;
}

export interface BackgroundOptions extends ItemOptions {
  round?: number;
}

export interface ImageOptions {
  id: string;
  hideBackgroundDots?: boolean;
  imageSize?: number;
  margin?: number;
  image?: string;
}

export interface QrOptions {
  id: string;
  typeNumber?: TypeNumber;
  mode?: Mode;
  errorCorrectionLevel?: ErrorCorrectionLevel;
}

export type Options = {
  type?: DrawType;
  shape?: ShapeType;
  width?: number;
  height?: number;
  margin?: number;
  data?: string;
  image?: string;
  qrOptions?: QrOptions;
  imageOptions?: ImageOptions;
  dotsOptions: DotsOptions;
  cornersSquareOptions: CornersSquareOptions;
  cornersDotOptions: CornersDotOptions;
  backgroundOptions: BackgroundOptions;
};

export type SettingsOption =
  | DotsOptions
  | CornersSquareOptions
  | CornersDotOptions
  | BackgroundOptions
  | ImageOptions;

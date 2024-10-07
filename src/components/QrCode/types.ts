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
} from "qr-code-styling/lib/types";

export interface DotsOptions {
  id: string;
  type?: DotType;
  color?: string;
  gradient?: Gradient;
}

export interface CornersSquareOptions {
  id: string;
  type?: CornerSquareType;
  color?: string;
  gradient?: Gradient;
}

export interface CornersDotOptions {
  id: string;
  type?: CornerDotType;
  color?: string;
  gradient?: Gradient;
}

export interface BackgroundOptions {
  id: string;
  round?: number;
  color?: string;
  gradient?: Gradient;
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

export declare type Options = {
  type?: DrawType;
  shape?: ShapeType;
  width?: number;
  height?: number;
  margin?: number;
  data?: string;
  image?: string;
  qrOptions?: QrOptions;
  imageOptions?: ImageOptions;
  dotsOptions?: DotsOptions;
  cornersSquareOptions?: CornersSquareOptions;
  cornersDotOptions?: CornersDotOptions;
  backgroundOptions?: BackgroundOptions;
};

export type SettingsOption =
  | DotsOptions
  | CornersSquareOptions
  | CornersDotOptions
  | BackgroundOptions
  | ImageOptions;

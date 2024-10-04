import { CornerDotType, CornerSquareType, DotType, Gradient } from "qr-code-styling/lib/types";

export interface DotsOptions {
  label: string;
  settings?: { type?: DotType; color?: string; gradient?: Gradient };
}

export interface CornersSquareOptions {
  label: string;
  settings?: {
    type?: CornerSquareType;
    color?: string;
    gradient?: Gradient;
  };
}

export interface CornersDotOptions {
  label: string;
  settings?: {
    type?: CornerDotType;
    color?: string;
    gradient?: Gradient;
  };
}

export interface BackgroundOptions {
  label: string;
  settings?: {
    round?: number;
    color?: string;
    gradient?: Gradient;
  };
}

export interface ImageOptions {
  label: string;
  settings?: {
    hideBackgroundDots?: boolean;
    imageSize?: number;
    margin?: number;
    image?: string;
  };
}

export type SettingsOption =
  | DotsOptions
  | CornersSquareOptions
  | CornersDotOptions
  | BackgroundOptions
  | ImageOptions;

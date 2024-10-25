export const APP_ENV = {
  PROD: "production",
  DEV: "development",
};

export const APP_MAX_WIDTH = "xl";
export const LOCALE = "NEXT_LOCALE";

export const IS_PROD = process.env.NODE_ENV === APP_ENV.PROD;

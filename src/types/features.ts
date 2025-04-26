export enum FEATURE {
  CONVERT = "convert",
  CONVERT_IMAGE = "convert:image",
  CONVERT_TEXT = "convert:text",
  QRCODE = "qrcode",
  QRCODE_URL = "qrcode:url",
  QRCODE_TEXT = "qrcode:text",
  QRCODE_EMAIL = "qrcode:email",
  QRCODE_PHONE = "qrcode:phone",
  QRCODE_WIFI = "qrcode:wifi",
  QRCODE_LOCATION = "qrcode:location",
  QRCODE_VCARD = "qrcode:vcard",
}

export type FeatureKey = (typeof FEATURE)[keyof typeof FEATURE];

export type FeatureItemsMap = Record<FeatureKey, boolean>;

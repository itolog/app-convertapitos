import { FEATURE, FeatureItemsMap } from "@/types/features";

export const disabledFeatures: Partial<FeatureItemsMap> = {
  [FEATURE.CONVERT]: false,
  [FEATURE.QRCODE_VCARD]: false,
};

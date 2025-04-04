import { FeatureKey } from "@/types";

export const genFeatureRoute = (feature: FeatureKey): string => {
  const url = feature.replace(":", "/");

  return "/" + url;
};

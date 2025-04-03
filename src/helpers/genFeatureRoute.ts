import { FeatureKey } from "@/types";

const genFeatureRoute = (feature: FeatureKey): string => {
  const url = feature.replace(":", "/");

  return "/" + url;
};

export default genFeatureRoute;

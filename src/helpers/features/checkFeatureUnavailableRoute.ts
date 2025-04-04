"use client";

import { genFeatureRoute } from "@/helpers/features/genFeatureRoute";
import { FeatureKey } from "@/types";

export const checkFeatureUnavailableRoute = (feature: FeatureKey, pathName: string): boolean => {
  const [root, sub] = feature.split(":");

  if (root && !sub && pathName.includes(root)) {
    return true;
  }

  return genFeatureRoute(feature) === pathName;
};

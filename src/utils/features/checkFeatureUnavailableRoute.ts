"use client";

import { genFeatureRoute } from "@/utils/features/genFeatureRoute";

export const checkFeatureUnavailableRoute = (feature: string, pathName: string): boolean => {
  const [root, sub] = feature.split(":");

  if (root && !sub && pathName.includes(root)) {
    return true;
  }

  return genFeatureRoute(feature) === pathName;
};

export const genFeatureRoute = (feature: string): string => {
  const url = feature.replace(":", "/");

  return "/" + url;
};

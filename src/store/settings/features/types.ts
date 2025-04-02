import { FEATURES } from "@/store/settings/features/constants";

export type FeatureKey = (typeof FEATURES)[number];

export interface FeaturesState {
  items: Record<FeatureKey, boolean>;
  availableFeatures?: FeatureKey[];
  loading?: boolean;
}

import { FeatureKey } from "@/types/features";

export interface FeaturesState {
  items: Record<FeatureKey, boolean>;
  availableFeatures?: FeatureKey[];
}

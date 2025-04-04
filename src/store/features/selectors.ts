import type { RootState } from "@/store";
import { createSelector } from "reselect";

export const getFeaturesState = (state: RootState) => state.features;

export const getFeatures = createSelector(getFeaturesState, (state) => state.items);
export const getDisabledFeatures = createSelector(getFeaturesState, (state) => {
  return Object.keys(state.items).filter((key) => !state.items[key]);
});

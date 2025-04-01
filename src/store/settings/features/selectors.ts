import type { RootState } from "@/store";
import { createSelector } from "reselect";

export const getFeaturesState = (state: RootState) => state.settings.features;

export const getFeatures = createSelector(getFeaturesState, (state) => state.items);
export const getLoading = createSelector(getFeaturesState, (state) => state.loading);

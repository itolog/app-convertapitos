import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FeatureKey } from "@/store/settings/features/types";

import { initialState } from "./data";

export const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    toggleFeatureAvailability: (state, action: PayloadAction<FeatureKey>) => {
      state.items[action.payload] = !state.items[action.payload];
    },
    disableFeature: (state, action: PayloadAction<FeatureKey>) => {
      state.items[action.payload] = false;
    },
    enableFeature: (state, action: PayloadAction<FeatureKey>) => {
      state.items[action.payload] = true;
    },
  },
});

export const { toggleFeatureAvailability, disableFeature, enableFeature } = featuresSlice.actions;

export default featuresSlice.reducer;

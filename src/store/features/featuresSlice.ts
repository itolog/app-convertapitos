import { FeatureKey } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

    setFeatureMultiple: (state, action: PayloadAction<Partial<Record<FeatureKey, boolean>>>) => {
      state.items = {
        ...state.items,
        ...action.payload,
      };
    },
    enableFeature: (state, action: PayloadAction<FeatureKey>) => {
      state.items[action.payload] = true;
    },
  },
});

export const { toggleFeatureAvailability, disableFeature, enableFeature, setFeatureMultiple } =
  featuresSlice.actions;

export default featuresSlice.reducer;

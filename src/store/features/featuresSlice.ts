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
    disableFeatureMultiple: (state, action: PayloadAction<FeatureKey[]>) => {
      const payload = action.payload.reduce((acc, item) => {
        return {
          ...acc,
          [item]: false,
        };
      }, {});

      state.items = {
        ...state.items,
        ...payload,
      };
    },
    setFeatureMultiple: (state, action: PayloadAction<Record<FeatureKey, boolean>>) => {
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

export const {
  toggleFeatureAvailability,
  disableFeature,
  setFeatureMultiple,
  enableFeature,
  disableFeatureMultiple,
} = featuresSlice.actions;

export default featuresSlice.reducer;

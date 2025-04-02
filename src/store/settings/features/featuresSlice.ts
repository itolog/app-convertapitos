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
    setFeatureMultiple: (state, action: PayloadAction<Partial<Record<FeatureKey, boolean>>>) => {
      state.items = {
        ...state.items,
        ...action.payload,
      };
    },
    enableFeature: (state, action: PayloadAction<FeatureKey>) => {
      state.items[action.payload] = true;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  toggleFeatureAvailability,
  disableFeature,
  setFeatureMultiple,
  enableFeature,
  disableFeatureMultiple,
  setLoading,
} = featuresSlice.actions;

export default featuresSlice.reducer;

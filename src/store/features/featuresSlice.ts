import { FeatureKey } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createAppAsyncThunk } from "@/store/withTypes";

import { initialState } from "./data";

export const setFeatureMultiple = createAppAsyncThunk(
  "features/setFeatureMultiple",
  async (payload: Partial<Record<FeatureKey, boolean>>) => {
    return payload;
  },
);

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
  extraReducers: (builder) => {
    builder
      .addCase(setFeatureMultiple.pending, (state) => {
        state.loading = true;
      })
      .addCase(setFeatureMultiple.fulfilled, (state, action) => {
        state.loading = false;
        state.items = {
          ...state.items,
          ...action.payload,
        };
      })
      .addCase(setFeatureMultiple.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { toggleFeatureAvailability, disableFeature, enableFeature } = featuresSlice.actions;

export default featuresSlice.reducer;

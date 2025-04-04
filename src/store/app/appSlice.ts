import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "@/store/app/types";

const initialState: AppState = {
  loading: undefined,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setAppLoading } = appSlice.actions;

export default appSlice.reducer;

import type { RootState } from "@/store";
import { createSelector } from "reselect";

export const getAppState = (state: RootState) => state.app;

export const getAppLoading = createSelector(getAppState, (state) => state.loading);

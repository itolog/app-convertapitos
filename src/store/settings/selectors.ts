import type { RootState } from "@/store";
import { createSelector } from "reselect";

export const getSettingsState = (state: RootState) => state.settings;

export const getTheme = createSelector(getSettingsState, (state) => state.theme);

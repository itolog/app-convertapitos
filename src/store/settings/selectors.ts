import { createSelector } from "reselect";

import type { RootState } from "@/store/store.ts";

export const getSettingsState = (state: RootState) => state.settings;

export const getTheme = createSelector(getSettingsState, (state) => state.theme);

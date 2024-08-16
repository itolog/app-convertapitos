import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { SettingsState, Theme } from "@/store/settings/types";

const initialState: SettingsState = {
	theme: "dark",
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;

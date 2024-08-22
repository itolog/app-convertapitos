import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserState } from "@/store/user/types";

export const initialUserState: User = {
	name: null,
	email: null,
	image: null,
};

const initialState: UserState = {
	me: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.me = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

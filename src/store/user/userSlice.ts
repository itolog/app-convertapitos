import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserState } from "@/store/user/types";

export const InitialUserState: User = {
	id: null,
	name: null,
	email: null,
	image: null,
	emailVerified: null,
};

const initialState: UserState = {
	me: InitialUserState,
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

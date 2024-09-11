import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserPayload, UserState } from "@/store/user/types";

export const initialUserState: User = {
	name: null,
	email: null,
	image: null,
};

const initialState: UserState = {
	me: null,
	status: "loading",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserPayload>) => {
			state.me = action.payload.user;
			state.status = action.payload.status;
		},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

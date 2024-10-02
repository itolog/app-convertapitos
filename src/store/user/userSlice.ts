import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserPayload, UserState } from "@/store/user/types";

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

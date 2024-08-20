import type { RootState } from "@/store";
import { createSelector } from "reselect";

export const getUserState = (state: RootState) => state.user;

export const getUser = createSelector(getUserState, (state) => state.me);

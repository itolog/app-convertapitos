import type { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const getUserState = (state: RootState) => state.user;

export const getUser = createSelector(getUserState, (state) => state.me);
export const getUserStatus = createSelector(getUserState, (state) => state.status);

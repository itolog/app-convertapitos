import type { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const getQrcodeState = (state: RootState) => state.qrcode;

export const getOptions = createSelector(getQrcodeState, (state) => state.options);

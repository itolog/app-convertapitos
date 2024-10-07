import type { RootState } from "@/store";
import { createSelector } from "reselect";

export const getQrcodeState = (state: RootState) => state.qrcode;

export const getOptions = createSelector(getQrcodeState, (state) => state.options);

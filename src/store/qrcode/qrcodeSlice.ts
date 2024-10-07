import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { qrcodeDefaultOptions } from "@/components/QrCode/data/qrcode";
import { Options } from "@/components/QrCode/types";

import { ColorPayload, QrcodeState, TypePayload } from "@/store/qrcode/types";

const initialState: QrcodeState = {
  options: qrcodeDefaultOptions,
};

export const qrcodeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setOptions: (state, action: PayloadAction<Options>) => {
      state.options = {
        ...state.options,
        ...action.payload,
      };
    },
    updateColor: (state, action: PayloadAction<ColorPayload>) => {
      state.options[action.payload.id].color = action.payload.color;
    },
    updateType: (state, action: PayloadAction<TypePayload>) => {
      state.options[action.payload.id].type = action.payload.type;
    },
    resetOptions: (state) => {
      state.options = qrcodeDefaultOptions;
    },
  },
});

export const { setOptions, updateColor, updateType, resetOptions } = qrcodeSlice.actions;

export default qrcodeSlice.reducer;

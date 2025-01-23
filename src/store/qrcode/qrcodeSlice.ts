import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { qrcodeDefaultOptions } from "@/components/QrCode/data/qrcode";
import { Options } from "@/components/QrCode/types";

import { ColorPayload, ImagePayload, QrcodeState, TypePayload } from "@/store/qrcode/types";

const initialState: QrcodeState = {
  options: qrcodeDefaultOptions,
};

export const qrcodeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setOptions: (state, action: PayloadAction<Partial<Options>>) => {
      state.options = {
        ...state.options,
        ...action.payload,
      };
    },
    updateColor: (state, action: PayloadAction<ColorPayload>) => {
      state.options[action.payload.id] = {
        ...state.options[action.payload.id],
        ...action.payload,
      };
    },
    updateType: (state, action: PayloadAction<TypePayload>) => {
      state.options[action.payload.id].type = action.payload.type;
    },
    updateImageOptions: (state, action: PayloadAction<ImagePayload>) => {
      state.options[action.payload.id] = {
        ...state.options[action.payload.id],
        ...action.payload,
      };
    },
    resetOptions: (state) => {
      state.options = qrcodeDefaultOptions;
    },
  },
});

export const { setOptions, updateColor, updateType, resetOptions, updateImageOptions } =
  qrcodeSlice.actions;

export default qrcodeSlice.reducer;

import { IS_PROD } from "@/constants";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import settingsReducer from "@/store/settings";

import qrcodeSlice from "./qrcode/qrcodeSlice";
import { imageApi } from "./services/Image";
import userSlice from "./user/userSlice";

const rootReducer = combineReducers({
  [imageApi.reducerPath]: imageApi.reducer,
  user: userSlice,
  qrcode: qrcodeSlice,
  settings: settingsReducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: !IS_PROD,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imageApi.middleware),
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

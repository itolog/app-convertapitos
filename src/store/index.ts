import { IS_PROD } from "@/constants";
import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";

import appReducer from "@/store/app/appSlice";
import featuresReducer from "@/store/features/featuresSlice";

import qrcodeSlice from "./qrcode/qrcodeSlice";
import { imageApi } from "./services/Image";
import userSlice from "./user/userSlice";

const rootReducer = combineReducers({
  [imageApi.reducerPath]: imageApi.reducer,
  user: userSlice,
  qrcode: qrcodeSlice,
  features: featuresReducer,
  app: appReducer,
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
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

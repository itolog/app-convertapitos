import { IS_PROD } from "@/constants";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { imageApi } from "./services/Image";
import settingsSlice from "./settings/settingsSlice";

const rootReducer = combineReducers({
	[imageApi.reducerPath]: imageApi.reducer,
	settings: settingsSlice,
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

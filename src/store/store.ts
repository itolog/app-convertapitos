import { IS_PROD } from "@/constants";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { imageApi } from "./services/Image";
import settingsSlice from "./settings/settingsSlice.ts";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	whitelist: ["settings"],
};

const rootReducer = combineReducers({
	[imageApi.reducerPath]: imageApi.reducer,
	settings: settingsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: !IS_PROD,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(imageApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { combineReducers } from "@reduxjs/toolkit";

import featuresReducer from "./features/featuresSlice";

const settingsReducer = combineReducers({
  features: featuresReducer,
});

export default settingsReducer;

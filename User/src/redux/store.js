import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducercer";

export const store = configureStore({
  reducer: rootReducer,
});

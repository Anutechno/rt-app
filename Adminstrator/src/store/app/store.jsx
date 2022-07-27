import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "../../api/services/loginApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        // auth slice
        auth: authSlice,
        // login api services
        [loginApi.reducerPath]: loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loginApi.middleware),
});

setupListeners(store.dispatch);

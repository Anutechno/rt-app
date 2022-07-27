import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        isAuth: false,
    },
    reducers: {
        // update auth state
        updateAuth: (state, action) => {
            state.isAuth = action.payload;
        },
    },
});

export const { updateAuth } = authSlice.actions;

export default authSlice.reducer;

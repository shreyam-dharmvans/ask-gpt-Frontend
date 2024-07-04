import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../helpers/backendUser";

export const isLoginSlice = createSlice({
    name: "isLogin",
    initialState: false,
    reducers: {
        login: (state, action) => {
            state = true;
            return state;
        },
        logout: (state, action) => {
            state = false;
            return state;
        },
    }
});

export const isLoginActions = isLoginSlice.actions;


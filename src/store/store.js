import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "./chatSlice";
import { isLoginSlice } from "./isLoginSlice";




export const store = configureStore({
    reducer: {
        chats: chatSlice.reducer,
        isLogin: isLoginSlice.reducer,
    }
});
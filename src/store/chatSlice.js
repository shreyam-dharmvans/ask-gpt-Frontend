import { createSlice } from "@reduxjs/toolkit";


export const chatSlice = createSlice({
    name: "chats",
    initialState: [],
    reducers: {
        allChats: (state, action) => {
            state = action.payload;
            return state;
        },
        clearChat: (state, action) => {
            state = [];
            return state;
        },
    }
});

export const chatActions = chatSlice.actions;
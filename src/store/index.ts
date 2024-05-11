import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";

const store = configureStore({
    reducer: {
        userReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
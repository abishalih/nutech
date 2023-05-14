import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/authentication/authSlice";
import counterReducer from "features/counter/counterSlice";
import componentReducer from "infrastructure/components/componentSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
        generalComponent: componentReducer
    }
});

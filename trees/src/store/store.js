import { configureStore  } from "@reduxjs/toolkit";
import animalsSlice from "./slices/animalsSlice";

export const store = configureStore({
    reducer : {
        animals : animalsSlice
    }
})
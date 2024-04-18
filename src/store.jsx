import { configureStore } from "@reduxjs/toolkit";
import mensTshirtReducer from "./features/mensTshirt";

export const store = configureStore({
    reducer:{
       tshirts:mensTshirtReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer  from "./features/menu/menuSlice";
export const store=configureStore({
    reducer:{

        toggle:menuBarReducer

    }
})
import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const menuBar = createSlice({
    name:"menu" , 
    initialState,

    reducers:{
        toggleBtn(state , action){
            const handleClick = !state

            return handleClick
        }
    }
})

export const {toggleBtn} = menuBar.actions

export default menuBar.reducer
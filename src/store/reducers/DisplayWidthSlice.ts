import { createSlice } from "@reduxjs/toolkit";

interface DisplayWidthState {
    displayWidth: number
}

const initialState: DisplayWidthState = {
    displayWidth: 1920
}

export const displayWidthSlice = createSlice({
    name: 'displayWidth',
    initialState,
    reducers: {
        setDisplayWidth: (state, action) => {
            state.displayWidth = action.payload
        }
    }
})

export default displayWidthSlice.reducer    

export const { setDisplayWidth } = displayWidthSlice.actions
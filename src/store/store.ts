import { combineReducers } from "redux"
import displayWidthReducer from "./reducers/DisplayWidthSlice"
import { configureStore } from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"


const rootReducer = combineReducers({
    displayWidthReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(thunk)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
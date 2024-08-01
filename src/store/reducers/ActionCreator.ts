import { AppDispatch } from "../store"
import { setDisplayWidth } from "./DisplayWidthSlice"


export const updateDisplayWidth = async (dispatch: AppDispatch, newWidth: number) => {
    try {
        dispatch(setDisplayWidth(newWidth))
    } catch (e: any) {
        console.log(e.message)
    }   
}
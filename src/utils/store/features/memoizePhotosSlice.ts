import { createSlice } from "@reduxjs/toolkit";
import { UnsplashDataType } from "../../interfaces&types/UnsplashPhotosDatatype";
import { UnsplashSearchTypes } from "../../interfaces&types/UnsplashSearchTypes";
const memoizedPhotos:UnsplashDataType[] | UnsplashSearchTypes=[]

const initialState={memoizedPhotos}


const memoPhotos=createSlice({
    name:"momoPhotos",
    initialState,
    reducers:{
        GetPhotos:(state,action)=>{
            state.memoizedPhotos=action.payload
        }
    }

})

export const {GetPhotos}=memoPhotos.actions 
export default memoPhotos.reducer
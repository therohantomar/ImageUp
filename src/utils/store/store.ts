import { configureStore } from "@reduxjs/toolkit";
import memoPhotos from "./features/memoizePhotosSlice"


const store=configureStore({
    reducer:{
      memoPhotos:memoPhotos,
    }
})

export default store

export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType <typeof store.getState>
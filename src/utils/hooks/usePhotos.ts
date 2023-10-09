import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux/es/exports";
import {UnsplashDataType} from "../interfaces&types/UnsplashPhotosDatatype"
import { NEW_PHOTOS_LINK } from "../constants";
import { AppDispatch } from "../store/store";
import { RootState } from "../store/store";
import { GetPhotos } from "../store/features/memoizePhotosSlice";

export default function usePhotos(){
    const dispatch=useDispatch<AppDispatch>()
    const memoizedPhotos=useSelector((store:RootState)=>store.memoPhotos.memoizedPhotos)
    const [photos,setPhotos]=useState<UnsplashDataType[]>([])

    useEffect(()=>{

        async function getPhotos(){
            if(memoizedPhotos.length===0){
                const data=await fetch(NEW_PHOTOS_LINK+import.meta.env.VITE_APP_ACCESS_KEY)
                const Photos:UnsplashDataType[]=await data.json()
                setPhotos(Photos)
                dispatch(GetPhotos(Photos))
            }
            else{
                setPhotos(memoizedPhotos)
            }
           
        }
        getPhotos()
    },[])

    return photos
}
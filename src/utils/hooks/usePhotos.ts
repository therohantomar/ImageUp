import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { UnsplashDataType } from "../interfaces&types/UnsplashPhotosDatatype"
import { NEW_PHOTOS_LINK, QUERY_PHOTOS } from "../constants";
import { AppDispatch } from "../store/store";
import { RootState } from "../store/store";
import { GetPhotos } from "../store/features/memoizePhotosSlice";
import { UnsplashSearchTypes } from "../interfaces&types/UnsplashSearchTypes";


export default function usePhotos(searchText: string | undefined) {
    const dispatch = useDispatch<AppDispatch>()
    const memoizedPhotos = useSelector((store: RootState) => store.memoPhotos.memoizedPhotos)
    const [photos, setPhotos] = useState<UnsplashDataType[] | UnsplashSearchTypes>([])

    async function getPhotosByQuery(query: string | undefined) {

        const data = await fetch(QUERY_PHOTOS + query + `&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`)
        const result = await data.json()
        setPhotos(result.results)
        dispatch(GetPhotos(result.result))

    }
    async function getPhotos() {
        if (memoizedPhotos.length === 0) {
            const data = await fetch(NEW_PHOTOS_LINK + import.meta.env.VITE_APP_ACCESS_KEY)
            const Photos: UnsplashDataType[] = await data.json()
            setPhotos(Photos)
            dispatch(GetPhotos(Photos))
        }
        else {
            setPhotos(memoizedPhotos)
        }

    }

    useEffect(() => {
        let timeoutId: number | undefined
        if (searchText !== "") {
            timeoutId = setTimeout(() => {
                getPhotosByQuery(searchText)

            }, 300)
        }
        else {
            getPhotos()

        }
        return () => {
            clearTimeout(timeoutId)
        }
    }, [searchText])

    return photos
}

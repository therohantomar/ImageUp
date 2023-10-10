import { useEffect, useState } from "react"
import { PHOTOS_BY_ID_LINK } from "../constants"
import { Photo } from "../interfaces&types/UnsplashPhotoTypes"
import { defaultPhoto } from "../constants"

const usePhotoById = (id: string | undefined) => {
    const [photo, setphotos] = useState<Photo>(defaultPhoto)

    async function getPhoto() {
        const data = await fetch(PHOTOS_BY_ID_LINK + id + "?client_id=" + import.meta.env.VITE_APP_ACCESS_KEY)
        const photo_data = await data.json()
        setphotos(photo_data)
    }
    useEffect(() => {
        getPhoto()
    }, [])

    return photo

}

export default usePhotoById

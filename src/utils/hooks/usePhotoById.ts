import { useEffect, useState } from "react"
import { PHOTOS_BY_ID_LINK } from "../constants"


const usePhotoById = (id: string | undefined) => {
    const [photo, setphotos] = useState({slug:"wdojwodjodjw",urls:{full:"nodata"},links:{download:"strkka"}})

    async function getPhoto() {
        const data = await fetch(PHOTOS_BY_ID_LINK + id + "?client_id=" + import.meta.env.VITE_APP_ACCESS_KEY)
        const photo_data = await data.json()
        setphotos(photo_data)
        console.log(photo_data)
    }

    useEffect(() => {
        getPhoto()
    }, [])

    return photo

}

export default usePhotoById
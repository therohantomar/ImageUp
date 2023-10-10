import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import {RxCross2} from "react-icons/rx"
import usePhotoById from "../utils/hooks/usePhotoById"
import { Photo } from "../utils/interfaces&types/UnsplashPhotoTypes"

const PhotoDetail = () => {
    const {id}=useParams()
    const photoData:Photo | undefined=usePhotoById(id)

    return (
    <div className=" bg-white absolute top-0 bottom-0 left-0 right-0 ">
     {photoData &&<div>
       <Link to="/"><RxCross2 className=" font-bold text-4xl" /></Link>
       <span className="flex gap-4 mx-6  ">
        <img src={photoData?.user?.profile_image?.large}  className="rounded-full"  alt={photoData?.user?.name}  />
       <span className="my-2 w-2/3">
        <h1 className=" text-gray-500 xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg 2xl:text-lg font-bold">{photoData?.user?.name}</h1>
        <h1 className=" xs:text-sm sm:text-md md:text-md lg:text-md xl:text-lg 2xl:text-lg font-sans text-gray-600  font-bold">{photoData?.user?.bio}</h1>
        </span>
      </span>
      <img src={photoData?.urls?.regular}  alt={photoData?.slug} className="p-8  w-3/4 h-full  rounded-md"  />
      </div>}
    </div>
  )
}

export default PhotoDetail

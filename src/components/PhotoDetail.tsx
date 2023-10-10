import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import {RxCross2} from "react-icons/rx"
import usePhotoById from "../utils/hooks/usePhotoById"

const PhotoDetail = () => {
    const {id}=useParams()
    const {slug, urls}=usePhotoById(id)
  
    return (
    <div className=" bg-white absolute top-0 bottom-0 left-0 right-0 ">
       <Link to="/"><RxCross2 className=" font-bold text-xl" /></Link>
      <img src={urls?.full} alt={slug} className="p-8 rounded-md"  />
    </div>
  )
}

export default PhotoDetail

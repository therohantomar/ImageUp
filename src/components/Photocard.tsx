import {Link} from "react-router-dom"

export type urls={
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

function Photocard({id,slug,urls}:{id:string,slug:string,width:number,height:number,urls:urls}) {

  return (
    <div className="my-2 hover:shadow-xl h-max"> 
     <Link to={"photo/"+id}><img src={urls.small_s3}  alt={slug} /></Link>
    </div>
  )
}

export default Photocard

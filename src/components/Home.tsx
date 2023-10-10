import React, { useContext} from "react"
import usePhotos from "../utils/hooks/usePhotos";
import { UnsplashDataType } from "../utils/interfaces&types/UnsplashPhotosDatatype";
import Photocard from "./Photocard";
import { searchContext } from "../utils/searchContext";
import { Results, UnsplashSearchTypes } from "../utils/interfaces&types/UnsplashSearchTypes";

const Home = React.memo(() => {
  const searchPara=useContext(searchContext)
  const searchText=searchPara?.searchText
  const photos:UnsplashDataType[] | UnsplashSearchTypes  = usePhotos(searchText);

if(Array.isArray(photos)){
  if(photos?.length===0){
    return(<main className="my-20">
      <h1 className="text-xl font-bold">There is no matching content with {searchText}</h1>
    </main>)
  }
}

  return (
    <main className="my-8">
      <h1 className="font-bold text-xl font-sans my-10 mx-10 uppercase">Disover the new captures clicks by camera</h1>
      <div className="grid-container"   >
        {
        Array.isArray(photos) && photos.map((photodata:UnsplashDataType | Results) => {
          return <Photocard key={photodata.id} {...photodata} />;
        })}
      </div>
    </main>
  );
})
export default Home;

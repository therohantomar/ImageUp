import React, {useContext, useDeferredValue} from "react"
import usePhotos from "../utils/hooks/usePhotos";
import { UnsplashDataType } from "../utils/interfaces&types/UnsplashPhotosDatatype";
import Photocard from "./Photocard";
import { searchContext } from "../utils/searchContext";
import { Results, UnsplashSearchTypes } from "../utils/interfaces&types/UnsplashSearchTypes";

const Home = React.memo(() => {
  const searchPara=useContext(searchContext)
  const searchText=searchPara?.searchText
  const photos:UnsplashDataType[] | UnsplashSearchTypes  = usePhotos(searchText);
  const deferedPhotos=useDeferredValue(photos)

  return (
    <main className="my-8">
      <h1 className="font-bold text-xl font-sans my-10 mx-10 uppercase">Disover the new captures clicks by camera</h1>
      <div className="w-full grid grid-cols-3 bg-gray-100 gap-0  border-2     ">
        {
        Array.isArray(deferedPhotos) && deferedPhotos.map((photodata:UnsplashDataType | Results) => {
          return <Photocard key={photodata.id} {...photodata} />;
        })}
      </div>
    </main>
  );
})
export default Home;

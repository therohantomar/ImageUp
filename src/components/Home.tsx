import React, {useContext} from "react"
import usePhotos from "../utils/hooks/usePhotos";
import { UnsplashDataType } from "../utils/interfaces&types/UnsplashPhotosDatatype";
import Photocard from "./Photocard";
import { searchContext } from "../utils/searchContext";
import { Results, UnsplashSearchTypes } from "../utils/interfaces&types/UnsplashSearchTypes";

const Home = React.memo(() => {
  const searchPara=useContext(searchContext)
  const searchText=searchPara?.searchText
  const photos:UnsplashDataType[] | UnsplashSearchTypes  = usePhotos(searchText);

  return (
    <main className="my-8">
      <h1 className="font-bold text-xl font-sans uppercase">New Photos listed</h1>
      <div className="w-full grid grid-cols-3  gap-0  border-2     ">
        {
        Array.isArray(photos) && photos.map((photodata:UnsplashDataType | Results) => {
          return <Photocard key={photodata.id} {...photodata} />;
        })}
      </div>
    </main>
  );
})
export default Home;

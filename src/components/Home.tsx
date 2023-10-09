import React from "react"
import usePhotos from "../utils/hooks/usePhotos";
import { UnsplashDataType } from "../utils/interfaces&types/UnsplashPhotosDatatype";
import Photocard from "./Photocard";

const Home = React.memo(() => {
  const photos: UnsplashDataType[] = usePhotos();
  return (
    <main className="my-8">
      <h1 className="font-bold text-xl font-sans uppercase">New Photos listed</h1>
      <div className="w-full grid grid-cols-3  gap-0  border-2     ">
        {photos.map((photodata) => {
          return <Photocard key={photodata.id} {...photodata} />;
        })}
      </div>
    </main>
  );
});

export default Home;

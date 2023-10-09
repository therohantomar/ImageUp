import usePhotos from "../utils/hooks/usePhotos";
import { UnsplashDataType } from "../utils/interfaces&types/UnsplashPhotosDatatype";
import Photocard from "./Photocard";

const Home = () => {
  const photos: UnsplashDataType[] = usePhotos();

  return (
    <>
      <h1 className="font-bold text-xl  ">New Photos listed...</h1>
      <div className="w-full  flex flex-wrap px-4  border-2 h-max my-4  ">
        {photos.map((photodata) => {
          return <Photocard key={photodata.id} {...photodata} />;
        })}
      </div>
    </>
  );
};

export default Home;

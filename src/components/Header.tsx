import Navbar from "./Navbar";
import React, { useContext } from "react";
import { searchContext } from "../utils/searchContext";
import { ContextState } from "../utils/searchContext";

const Header = () => {
  const searchPara = useContext<ContextState | null>(searchContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchPara !== null) {
      searchPara.setSearchText(e.target.value);
    }
  };

  return (
    <header className="flex flex-col items-center ">
      <Navbar />
      <div className="bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=M3w1MTI5Nzl8MHwxfHNlYXJjaHwyfHxOYXR1cmV8ZW58MHx8fHwxNjk2ODMyMTQ5fDA&ixlib=rb-4.0.3')] bg-no-repeat bg-cover bg-center flex items-center justify-center  w-full h-64">
        <span className=" w-2/3 ">
          <h1 className="font-bold  text-white text-xl  uppercase">
            Search by Choice
          </h1>
          <span className="w-full shadow-xl rounded-tl-md rounded-bl-md  flex outline-2 ">
            <input
              type="text"
              value={searchPara?.searchText}
              onChange={handleChange}
              placeholder="Search hd images...."
              className="w-full  rounded-tl-md rounded-bl-md font-bold my-2  outline-none p-2 "
            />
          </span>
        </span>
      </div>
    </header>
  );
};

export default Header;

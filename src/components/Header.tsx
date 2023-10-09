import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="flex flex-col items-center ">
        <Navbar/>
        <div className="bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=M3w1MTI5Nzl8MHwxfHNlYXJjaHwyfHxOYXR1cmV8ZW58MHx8fHwxNjk2ODMyMTQ5fDA&ixlib=rb-4.0.3')] bg-no-repeat bg-cover bg-center flex items-center justify-center  w-full h-64">
         <span className=" w-2/3 ">
            <h1 className="font-bold  text-white text-xl  uppercase">Search by Choice</h1>
            <span className="w-full shadow-xl rounded-tl-md rounded-bl-md  flex outline-2 ">
            <input type="text"   value={''} onChange={()=>{}} placeholder="Search hd images...."  className="w-full  rounded-tl-md rounded-bl-md font-bold my-2  outline-none p-2 " />
            <button className="bg-black text-white font-bold my-2 p-2">Search</button>
            </span>
         </span>
        </div>
      
    </header>
  )
}

export default Header

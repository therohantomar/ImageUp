import Header from "./Header"
import {Outlet} from "react-router-dom"

const Container = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Container

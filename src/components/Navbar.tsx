import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className="w-full h-14 shadow-xl border-b-2 flex justify-between items-center">
      <span className="mx-20"><img src="https://unsplash.com/assets/core/logo-black-ddbdd505b663faadbc1e1731369f0929b2616886cb1d7fe11237c473bba02a50.svg" alt="image" /></span>
      <span className="mx-20">
        <Link to="/" ><h1 className="font-bold text-lg">Home</h1></Link>
      </span>
    </nav>
  );
}

export default Navbar;

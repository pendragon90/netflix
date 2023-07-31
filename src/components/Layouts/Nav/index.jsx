import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AiOutlineHome,
} from "react-icons/ai";
import {PiTelevisionSimpleBold} from "react-icons/pi"
import { MdOutlineLocalMovies } from "react-icons/md";
import { CgMenuRightAlt, CgMenuRight } from "react-icons/cg";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menu, SetMenu] = useState(false);

  const handlerMenu = () => {
    SetMenu(!menu);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-10 duration-500
        ${scrolling ? "bg-black" : "bg-transparent"}`}
      >
        <nav className="flex justify-between lg:justify-start items-center mx-5 py-4">
          <div className="cursor-pointer">
            <Link to="/">
              <img src="/img/logo.png" alt="" className="w-20 h-6 md:w-28 md:h-8 lg:w-24 lg:h-6" />
            </Link>
          </div>
          {/* humberger menu start */}
          <div
            className="cursor-pointer text-red-600 text-3xl md:text-5xl lg:hidden transition-all duration-500"
            onClick={handlerMenu}
          >
            {menu ? <CgMenuRight /> : <CgMenuRightAlt />}
          </div>
          {/* humberger menu end */}

          {/* nav desktop start */}
          <div className="hidden lg:flex gap-x-8 text-red-600 ml-10 text-xl">
            <Link to="/" className="hover:text-red-800">Home</Link>
            <Link to="/movies" className="hover:text-red-800">Movies</Link>
            <Link to="/tv" className="hover:text-red-800">Tv</Link>
          </div>
          {/* nav desktop end */}
        </nav>
      </div>
      

      {/* nav bottom start */}
      <div 
        className={`lg:hidden transition-all duration-500 w-full fixed bottom-0 left-0 right-0 z-10 text-white ${
          menu ? "inline-block" : "hidden"
        }`}
      >
        <div className="px-8 py-3 bg-black flex justify-between">
  <Link to="/" className="flex gap-1 flex-col items-center cursor-pointer hover:text-red-600 ">
    <AiOutlineHome className="text-2xl md:text-4xl" />
    <h1 className="text-xs md:text-lg">Home</h1>
  </Link>
  <Link to="/movies" className="flex gap-1 flex-col items-center cursor-pointer hover:text-red-600">
    <MdOutlineLocalMovies className="text-2xl md:text-4xl" />
    <h1 className="text-xs md:text-lg">Movies</h1>
  </Link>
  <Link to="/tv" className="flex gap-1 flex-col items-center cursor-pointer hover:text-red-600">
    <PiTelevisionSimpleBold className="text-2xl md:text-4xl" />
    <h1 className="text-xs md:text-lg">Tv</h1>
  </Link>
</div>

      </div>
      {/* nav bottom end */}
    </>
  )
}

export default Nav
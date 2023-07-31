import { useState } from "react";
import { Link } from "react-router-dom";

const CardMovies = (props) => {
    const {name,img,link} = props
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  }; 

  return (
    <>
      <div
        className="relative cursor-pointer group"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <img src={img} alt="" />
        <Link to={link}>
          <div
            className={`text-white text-start text-sm p-3 absolute top-0 left-0 w-full h-full flex-col gap-2 justify-center items-center bg-black bg-opacity-50 ${
              isHovered ? "flex" : "hidden"
            }`}
          >
            <h1 className="font-bold text-base md:text-3xl lg:text-xl text-center">
              {name}
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardMovies;

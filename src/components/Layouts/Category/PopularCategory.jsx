import { getPopular } from "../../../api";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovies from "../../Fragments/CardMovies";
import "swiper/css";

const PopularCategory = () => {
  const [popular,setPopular] = useState([])

const fetchPopular = async () => {
  const data = await getPopular()
  setPopular(data)
}

  useEffect(()=> {
    fetchPopular()
  }, [])

  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    // Update the number of slides to display based on screen width
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setSlidesPerView(5);
      } else if (windowWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2); // For screen sizes smaller than 640px, display one slide per view
      }
    };

    handleResize(); // Call it initially to set the initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="mt-14">
      <div className="mx-5">
        <div className="flex justify-between items-center">
          <h1 className="text-white md:text-3xl lg:text-xl">Popular</h1>
        </div>
        <Swiper
      className="mt-5"
      spaceBetween={50}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {popular.map((result) => (
        <SwiperSlide key={result.id}>
          <CardMovies name={result.title} link={`/movies/detail/${result.id}`} img={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}/>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
    </div>
  );
};

export default PopularCategory;

import Button from "./../../Elements/Button/index";
import { getPopular } from "../../../api";
import { useEffect, useState } from "react";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Tambahan state untuk melacak indeks film yang ditampilkan
  
  const fetchMovies = async () => {
    const data = await getPopular();
    setMovies(data);
  };
  
  useEffect(() => {
    // Fetch movies when the component mounts
    fetchMovies();
    
    // Set up the interval to change the displayed movie every 30 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length); // Ubah indeks setiap 30 detik
    }, 8000);
    
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [movies.length]); // Pastikan useEffect mengamati perubahan jumlah film dalam array `movies`

  return (
    <div className="h-screen bg-no-repeat bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movies[currentIndex]?.backdrop_path}')` // Pastikan mengakses `movies[currentIndex]` dengan aman menggunakan `?.`
      }}
    >
      <div className="text-white absolute
        bg-opacity-50 bg-gradient-to-t from-black
        lg:bg-gradient-to-r
        top-0 bottom-0 flex flex-col justify-end items-start">
        <div className="mx-5 mb-5 lg:mb-0 lg:w-3/5">
          <h1 className="font-extrabold text-5xl md:text-8xl lg:text-5xl">{movies[currentIndex]?.title}</h1>
          <p className="mt-3 md:text-2xl lg:text-xl">
            {movies[currentIndex]?.overview}
          </p>

          <div className="flex gap-3 mt-5 mb-12">
              <Button
              tolink={`/movies/detail/${movies[currentIndex]?.id}`}
                text="Watch Now"
                classname="!bg-red-600 hover:!bg-red-800 md:text-2xl lg:text-xl"
              />
          </div>
        </div>

        {/* gradient hero desktop bottom start*/}
        <div className="hidden lg:flex w-full bg-gradient-to-t from-black py-5 text-white"></div>
        {/* gradient hero desktop bottom end */}
      </div>
    </div>
  );
};

export default Hero;

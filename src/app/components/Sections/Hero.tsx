'use client';

import { Movie } from '@/types/videoType';
import React, { useEffect, useState } from 'react';
import { getMovies } from '@/hooks/useMovieApi';
import Link from 'next/link';
import ActionButton from '@/components/Buttons/ActionButton';

export default function Hero() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getMovies();
        setMovies(fetchedMovies);
        if (fetchedMovies.length > 0) {
          setMovie(fetchedMovies[0]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      let index = 0;
      const interval = setInterval(() => {
        setMovie(movies[index]);
        index = (index + 1) % movies.length;
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [movies]);

  return movie ? (
    <section
      className="h-screen bg-no-repeat bg-cover bg-top relative"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <section
        className="text-white absolute
        bg-opacity-50 bg-gradient-to-t from-black
        top-0 bottom-0 flex flex-col justify-end items-start"
      >
        {/* content hero start */}
        <section className="mx-5 mb-20 lg:mb-16 lg:w-3/5">
          <Link href={`./movies/${movie.id}`} className="font-extrabold text-4xl md:text-8xl lg:text-5xl">
            {movie.title}
          </Link>
          <p className="mt-3 text-base lg:text-xl mb-5">{movie.overview}</p>

          <ActionButton id={movie.id} type='movie' />
        </section>
        {/* content hero end */}

        {/* gradient hero desktop bottom start*/}
        <div className="hidden lg:flex w-full bg-gradient-to-t from-black py-2 text-white"></div>
        {/* gradient hero desktop bottom end */}
      </section>
    </section>
  ) : (
    <></>
  );
}

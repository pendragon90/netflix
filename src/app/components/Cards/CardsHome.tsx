'use client';

import React, { useState, useEffect, useRef } from 'react';
import CardVideo from '@/components/Cards/CardVideo';
import CardSkeleton from '@/components/Skeletons/CardSkeleton';
import { Movie } from '@/types/videoType';
import { Swiper, SwiperSlide } from 'swiper/react';

interface CardsHomeProps {
  fetcher: (page: number) => Promise<Movie[]>;
  title: string;
}

const CardsHome: React.FC<CardsHomeProps> = ({
  fetcher,
  title,
}: CardsHomeProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useRef<HTMLDivElement | null>(null);

  const fetchMovies = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const fetchedMovies = await fetcher(page);
      setMovies((prev) => [...prev, ...fetchedMovies]);
      setHasMore(fetchedMovies.length > 0);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMovies();
        }
      },
      { threshold: 1.0 }
    );

    if (lastMovieRef.current) {
      observer.current.observe(lastMovieRef.current);
    }

    return () => {
      if (observer.current && lastMovieRef.current) {
        observer.current.unobserve(lastMovieRef.current);
      }
    };
  }, [isLoading, hasMore]);

  return (
    <section className="mt-14 mx-5">
      <div className="flex justify-between items-center">
        <h1 className="text-white md:text-3xl lg:text-xl font-semibold">
          {title}
        </h1>
      </div>
      <section className="mt-5">
        <Swiper
          spaceBetween={15}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <CardVideo
                type="movie"
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
              />
            </SwiperSlide>
          ))}
          {isLoading &&
            Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={`skeleton-${index}`}>
                <CardSkeleton />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      {/* Intersection Observer div */}
      <div ref={lastMovieRef} />
    </section>
  );
};

export default CardsHome;

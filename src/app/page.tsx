'use client';

import React from 'react';
import Hero from '@/components/Sections/Hero';
import CardsHome from '@/components/Cards/CardsHome';
import {
  getMovies,
  getPopularMovies,
  getTopRateMovies,
  getUpcomingMovies,
} from '@/hooks/useMovieApi';

const Page: React.FC = () => {
  return (
    <>
      <Hero />
      <CardsHome fetcher={getMovies} title="New Movies" />
      <CardsHome fetcher={getPopularMovies} title="Popular Movies" />
      <CardsHome fetcher={getUpcomingMovies} title="Upcoming Movies" />
    </>
  );
};

export default Page;

'use client';

import { getUpcomingMovies, searchMovies } from '@/hooks/useMovieApi';
import MovieLayout from '@/layouts/MovieLayout';
import React, { useEffect, useState } from 'react';
import { Movie } from '@/types/videoType';
import { useSearchParams } from 'next/navigation';

function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const fetchMovies = async (pageNum: number) => {
    try {
      const fetchedMovies = search
        ? await searchMovies(search)
        : await getUpcomingMovies(pageNum);

      if (fetchedMovies.length === 0) {
        setHasMore(false);
      } else {
        setMovies((prev) => [...prev, ...fetchedMovies]);
      }
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]);
    setPage(1);
    setHasMore(true);
    fetchMovies(1);
  }, [search]);

  const loadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
      fetchMovies(page + 1);
    }
  };

  return (
    <MovieLayout
      data={movies}
      isLoading={isLoading}
      loadMore={loadMore}
      hasMore={hasMore}
    />
  );
}

export default Page;

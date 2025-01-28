'use client';

import React from 'react';
import CardVideo from '@/components/Cards/CardVideo';
import CardSkeleton from '@/components/Skeletons/CardSkeleton';
import { Movie } from '@/types/movieType';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

interface MovieLayoutProps {
  data: Movie[];
  isLoading: boolean;
  loadMore: () => void;
  hasMore: boolean;
}

function MovieLayout({ data, isLoading, loadMore, hasMore }: MovieLayoutProps) {
  const lastElementRef = useInfiniteScroll(isLoading, loadMore, hasMore);

  return (
    <section className="mt-20 mx-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {data.map((movie, index) => (
        <div
          ref={index === data.length - 1 ? lastElementRef : null}
          key={`${movie.id}-${index}`}
        >
          <CardVideo
            type="movie"
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            key={movie.id}
          />
        </div>
      ))}
      {isLoading &&
        Array.from({ length: 6 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
    </section>
  );
}

export default MovieLayout;

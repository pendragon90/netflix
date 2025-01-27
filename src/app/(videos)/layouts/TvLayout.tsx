'use client';

import React from 'react';
import CardVideo from '@/components/Cards/CardVideo';
import CardSkeleton from '@/components/Skeletons/CardSkeleton';
import { Tv } from '@/types/tvType';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

interface TvLayoutProps {
  data: Tv[];
  isLoading: boolean;
  loadMore: () => void;
  hasMore: boolean;
}

function TvLayout({ data, isLoading, loadMore, hasMore }: TvLayoutProps) {
  const lastElementRef = useInfiniteScroll(isLoading, loadMore, hasMore);

  return (
    <section className="mt-20 mx-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {data.map((tv, index) => (
        <div
          ref={index === data.length - 1 ? lastElementRef : null}
          key={`${tv.id}-${index}`}
        >
          <CardVideo
          type='tv'
            id={tv.id}
            title={tv.name}
            poster_path={tv.poster_path}
            key={tv.id}
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

export default TvLayout;

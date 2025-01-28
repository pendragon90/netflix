'use client';

import { getTv, searchTv } from '@/hooks/useTvApi';
import TvLayout from '@/layouts/TvLayout';
import React, { useEffect, useState } from 'react';
import { Tv } from '@/types/videoType';
import { useSearchParams } from 'next/navigation';

function Page() {
  const [tv, setTv] = useState<Tv[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const fetchTv = async (pageNum: number) => {
    try {
      const fetchedTv = search ? await searchTv(search) : await getTv(pageNum);

      if (fetchedTv.length === 0) {
        setHasMore(false);
      } else {
        setTv((prev) => {
          // Filter hasil baru untuk hanya menambahkan ID unik
          const existingIds = new Set(prev.map((item) => item.id));
          const filteredTv = fetchedTv.filter(
            (item) => !existingIds.has(item.id)
          );
          return [...prev, ...filteredTv];
        });
      }
    } catch (error) {
      console.error('Failed to fetch TV:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTv([]);
    setPage(1);
    setHasMore(true);
    fetchTv(1);
  }, [search]);

  useEffect(() => {
    if (page > 1) {
      fetchTv(page);
    }
  }, [page]);

  const loadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <TvLayout
      data={tv}
      isLoading={isLoading}
      loadMore={loadMore}
      hasMore={hasMore}
    />
  );
}

export default Page;

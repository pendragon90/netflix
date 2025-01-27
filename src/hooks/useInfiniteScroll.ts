import { useRef, useCallback } from 'react';

const useInfiniteScroll = (
  isLoading: boolean,
  loadMore: () => void,
  hasMore: boolean
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, loadMore]
  );

  return lastElementRef;
};

export default useInfiniteScroll;

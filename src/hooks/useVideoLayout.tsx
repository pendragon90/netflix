import { useEffect, useState } from 'react';
import { MovieDetail } from '@/types/movieType';
import { TvDetail } from '@/types/tvType';
import { Actor } from '@/types/MovieDetailType';
import { getMovieDetail, getMovieActors } from '@/hooks/useMovieApi';
import { getTvDetail, getTvActors } from '@/hooks/useTvApi';
import {IdentityVideo} from "@/types/videoAttrType"

interface useVideoLayoutProps {
  id: number;
  type: IdentityVideo;
}

const useVideoLayout = ({ id, type }: useVideoLayoutProps) => {
  const [detail, setDetail] = useState<MovieDetail | TvDetail | null>(null);
  const [actors, setActors] = useState<Actor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const [detailData, actorsData] = await Promise.all([
          type === 'movie' ? getMovieDetail(id) : getTvDetail(id),
          type === 'movie' ? getMovieActors(id) : getTvActors(id),
        ]);

        setDetail(detailData);
        setActors(actorsData);
      } catch (err) {
        setError('Failed to load data.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, type]);

  return { detail, actors, isLoading, error };
};

export default useVideoLayout;

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/videoType';
import { IdentityVideo } from '@/types/videoAttrType';

interface CardVideoProps {
  id: number;
  title: string;
  poster_path: string;
  type: IdentityVideo;
}

const CardVideo: React.FC<Movie> = ({
  id,
  title,
  poster_path,
  type,
}: CardVideoProps) => {
  return (
    <Link
      href={type === 'movie' ? `/movies/${id}` : `/tv/${id}`}
      className="cursor-pointer flex flex-col gap-1 justify-center"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="hover:scale-105 transition-all"
      />
      <span className="font-bold text-base text-white md:text-lg lg:text-xl text-center line-clamp-1">
        {title}
      </span>
    </Link>
  );
};

export default CardVideo;

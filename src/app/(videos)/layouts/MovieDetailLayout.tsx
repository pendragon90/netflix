'use client';

import React from 'react';
import ButtonGenre from '@/components/Buttons/ButtonGenre';
import ActionButton from '@/components/Buttons/ActionButton';
import StarIcon from '@mui/icons-material/Star';
import ActorCards from '@/components/Cards/ActorCards';
import CompanyCards from '@/components/Cards/CompanyCards';
import VideoDetailSkeleton from '@/components/Skeletons/VideoDetailSkeleton';
import useVideoLayout from '@/hooks/useVideoLayout';

interface MovieDetailLayoutProps {
  id: number;
}

const MovieDetailLayout: React.FC<MovieDetailLayoutProps> = ({ id }) => {
  const { detail, actors, isLoading, error } = useVideoLayout({
    id,
    type: 'movie',
  });

  if (isLoading) {
    return <VideoDetailSkeleton />;
  }

  if (error) {
    return (
      <main className="flex items-center justify-center h-screen text-white">
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main>
        <section
        className="h-screen bg-no-repeat bg-center bg-cover relative"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${detail?.backdrop_path}')`,
        }}
      >
        {/* Detail movie content */}
        <section className="absolute top-20 lg:top-auto bottom-0 right-0 left-0 h-full lg:h-[60%] px-3 pb-5 grid grid-cols-1 lg:grid-cols-[20%,70%] gap-5 bg-gradient-to-t from-black">
          {/* Poster */}
          <figure className="w-3/5 lg:w-full mx-auto rounded-lg shadow-xl overflow-hidden border border-black">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`}
              alt={detail?.title || 'Movie Poster'}
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Right section */}
          <section className="flex flex-col gap-3 text-white w-full text-center lg:text-justify">
            <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-shadow-sm">
              {detail?.title}
            </h1>
            <section className="mx-auto lg:ml-0 font-bold text-sm md:text-base lg:text-lg text-shadow-sm">
              <span>{detail?.release_date}</span>
              <section className="flex gap-1 items-center">
                <span>{detail?.vote_average}</span>
                <StarIcon />
                <span className="ml-3">({detail?.vote_count}) votes</span>
              </section>
            </section>
            <section className="flex flex-wrap gap-2 mx-auto lg:ml-0">
              {detail?.genres.map((val) => (
                <ButtonGenre text={val.name} key={val.id} />
              ))}
            </section>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl line-clamp-5 lg:line-clamp-5">
              {detail?.overview}
            </p>
            <ActionButton id={id} type='movie' />
          </section>
        </section>
      </section>

      {/* Actors */}
      <ActorCards data={actors} />

      {/* Companies */}
      <CompanyCards data={detail?.production_companies || []} />
    </main>
  );
};

export default MovieDetailLayout;

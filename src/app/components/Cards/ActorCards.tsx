import Image from 'next/image';
import React from 'react';

interface ActorCardsProps {
  data: {
    profile_path: string;
    name: string;
    character: string;
  }[];
}

const ActorCards: React.FC<ActorCardsProps> = ({ data }: ActorCardsProps) => {
  return (
    <section className="text-white mt-24 lg:mt-10 px-3 md:px-10">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold my-5">
        Actors :
      </h1>
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {data.map((val, id) => (
          <figure key={id}>
            <img
              src={
                val.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${val.profile_path}`
                  : '/images/actor.png'
              }
              alt={val.name}
              className="w-full h-72 object-cover rounded"
            />
            <figcaption className="text-center">
              <h1 className="text-xl font-bold mt-2">{val.name}</h1>
              <p className="text-sm text-gray-500">{val.character}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default ActorCards;

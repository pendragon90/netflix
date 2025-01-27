import { ProductionCompany } from '@/types/videoDetailType';
import Image from 'next/image';
import React from 'react';

interface CompanyCardsProps {
  data: ProductionCompany[];
}

const CompanyCards: React.FC<CompanyCardsProps> = ({ data }) => {
  return (
    <section className="text-white mt-10 px-3 md:px-10">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold my-5">
        Production Companies:
      </h1>
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        {data.map((val) => (
          <figure key={val.id} className="flex flex-col items-center">
            <Image
              src={
                val.logo_path
                  ? `https://image.tmdb.org/t/p/w500/${val.logo_path}`
                  : '/images/company.png'
              }
              alt={val.name}
              width={200} 
              height={100}
              className="w-full object-contain rounded bg-gray-800 p-2"
            />
            <figcaption className="text-center">
              <h1 className="text-xl font-bold mt-2">{val.name}</h1>
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default CompanyCards;

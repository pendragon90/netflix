'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkNavT } from '@/types/linkNavType';
import getLinksNav from '@/hooks/useLinkNav';

interface LinkNavProps {
  className: string;
}

function NavMobile({ className }: LinkNavProps) {
  const pathname = usePathname();
  const [links, setLinks] = useState<LinkNavType[]>([]);

  useEffect(() => {
    setLinks(getLinksNav);
  }, []);

  return (
    <section
      className={`z-50 lg:hidden block p-1 bg-black fixed right-0 left-0 bottom-0 text-white 
    ${className}
    `}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {links.map((val, id) => (
          <SwiperSlide key={id}>
            <Link
              href={val.href}
              className={`flex flex-col text-sm justify-center items-center hover:text-primary 
        ${pathname === val.href && pathname !== '/' ? 'text-primary' : 'text-white'}
        `}
            >
              <span>{val.icon}</span>
              <span className="text-xs">{val.name}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default NavMobile;
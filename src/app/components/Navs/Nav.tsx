'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import LinksNavLg from '@/components/Navs/LinksNavLg';
import NavMobile from '@/components/Navs/NavMobile';
import Profile from '@/components/Navs/Profile';
import { useRouter } from 'next/navigation';
import getLinksNav from '@/hooks/useLinkNav';
import { LinkNavType } from '@/types/linkNavType';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const router = useRouter(); // Initialize router
  const [scrolling, setScrolling] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const [links, setLinks] = useState<LinkNavType[]>([]);
   const pathname = usePathname();

  useEffect(() => {
    setLinks(getLinksNav);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setOpenSearch(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

const handleSearchSubmit = () => {
    if (search.trim()) {
      if (pathname === '/tv') {
        router.push(`/tv?search=${encodeURIComponent(search)}`);
      } else {
        router.push(`/movies?search=${encodeURIComponent(search)}`);
      }
    }
  };



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 duration-500 ${
        scrolling ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center mx-5 py-4">
        <section className="flex items-center">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="block lg:hidden text-base mr-1 text-primary relative w-10 h-10"
          >
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out">
              <MenuOpenIcon
                className={`${
                  !openMenu ? 'opacity-0' : 'opacity-100'
                } transition-opacity duration-500`}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out">
              <MenuIcon
                className={`${
                  !openMenu ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
              />
            </div>
          </button>
          <Link href="/" aria-label="Homepage">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={112}
              height={48}
              className="w-20 h-5 md:w-28 md:h-8 lg:w-24 lg:h-6"
            />
          </Link>
          <LinksNavLg data={links} />
        </section>

        {/* search and profile start */}
        <section className="flex items-center gap-4">
          <div
            ref={searchRef}
            className="flex items-center gap-2 text-white relative"
          >
            <button
              type="button"
              onClick={() => {
                if (openSearch) {
                  handleSearchSubmit(); // Jika search bar terbuka, submit pencarian
                } else {
                  setOpenSearch(!openSearch); // Jika search bar tertutup, toggle untuk membuka
                }
              }}
              aria-label="Toggle search bar"
            >
              <SearchIcon />
            </button>

            <input
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearchSubmit(); // Panggil handleSearchSubmit saat Enter ditekan
                }
              }}
              type="text"
              placeholder="Search..."
              className={`${
                openSearch ? 'w-24' : 'w-0'
              } bg-transparent focus:outline-none focus:border-b-2 focus:border-b-white transition-all duration-500 ease-in-out overflow-hidden placeholder:text-white`}
              aria-label="Search"
            />
          </div>
          <Profile />
        </section>
        {/* search and profile end */}

        <NavMobile
          className={`duration-500 ${openMenu ? 'translate-y-0' : 'translate-y-full'}`}
        />
      </nav>
    </header>
  );
};

export default Nav;
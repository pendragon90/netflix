import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

interface LinkNavLgProps {
  data: {
    name: string;
    href: string;
  }[];
}

function LinkNavLg({ data }: LinkNavLgProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex gap-x-8 text-red-600 ml-10">
      {data.map((val, id) => (
        <li key={id} className="relative group">
          <Link
            href={val.href}
            className={`font-semibold text-xl text-primary transition-all duration-300`}
          >
            {val.name}
          </Link>
          {/* underline start */}
          <span
            className={`absolute left-0 -bottom-1 w-full h-[2px] bg-primary transition-transform duration-300 ease-in-out 
              ${val.href === '/'
                ? pathname === val.href
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'
                : pathname.startsWith(val.href)
                ? 'scale-x-100'
                : 'scale-x-0 group-hover:scale-x-100'
              }`}
          ></span>
          {/* underline end */}
        </li>
      ))}
    </ul>
  );
}

export default LinkNavLg;

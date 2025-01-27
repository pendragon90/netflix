'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { getMovieVideos } from '@/hooks/useMovieApi';
import { getTvVideos } from '@/hooks/useTvApi';
import { Videos } from '@/types/videoDetailType';
import {IdentityVideo} from "@/types/videoAttrType"

interface ActionButtonButtonProps {
  type: IdentityVideo;
  id: number;
}

export default function ActionButtonButton({ type, id }: ActionButtonButtonProps) {
  const [videos, setVideos] = useState<Videos[] | null>([]);
  const [isSaved, setIsSaved] = useState(false);

  // Fetch video data
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let getVideos;
        if (type === 'movie') {
          getVideos = await getMovieVideos(id);
        } else {
          getVideos = await getTvVideos(id);
        }
        setVideos(getVideos[0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchVideos();
  }, [id, type]);

  // Handle Save/Remove from Watchlist
  const handleToggleWatchlist = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <section className="flex gap-4 text-md font-bold mx-auto lg:ml-0">
      {/* Play Button */}
      <Link
        target="_blank"
        href={`https://www.youtube.com/watch?v=${videos?.key}`}
        className="px-5 py-3 text-black rounded-lg bg-white flex gap-2 items-center hover:bg-slate-400 hover:text-white transition duration-300"
      >
        <PlayArrowIcon />
        Play
      </Link>

      {/* Save/Remove Button */}
      <button
        onClick={handleToggleWatchlist}
        className="p-3 text-black rounded-lg flex gap-2 bg-gray-300 hover:bg-slate-400 hover:text-white transition duration-300"
      >
        {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        {isSaved ? 'Remove from Watchlist' : 'Save to Watchlist'}
      </button>
    </section>
  );
}

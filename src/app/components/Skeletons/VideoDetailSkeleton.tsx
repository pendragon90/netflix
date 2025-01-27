import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const VideoDetailSkeleton: React.FC = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: `linear-gradient(to top, #333333, #666666)`, // Gradien abu-abu
      }}
    >
      {/* Poster dan detail film */}
      <section className="absolute top-20 lg:top-auto bottom-0 right-0 left-0 h-full lg:h-1/2 px-3 pb-5 grid grid-cols-1 lg:grid-cols-[20%,70%] gap-5">
        {/* Skeleton Poster */}
        <Box
          className="rounded-lg w-3/5 lg:w-full mx-auto shadow-xl overflow-hidden border border-gray-700"
          sx={{ width: '25%', height: '100%' }}
        >
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              backgroundColor: '#424242', // Warna abu-abu
            }}
          />
        </Box>

        {/* Skeleton Detail Film */}
        <Box className="flex flex-col gap-3 text-white" sx={{ flex: 1 }}>
          {/* Judul */}
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              fontSize: '2rem',
              width: '60%',
              backgroundColor: '#424242', // Warna abu-abu
            }}
          />

          {/* Tanggal Rilis dan Rating */}
          <Box className="font-bold text-lg text-shadow-sm">
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ width: '40%', backgroundColor: '#424242' }}
            />
            <Box className="flex gap-1 items-center">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ width: '20%', backgroundColor: '#424242' }}
              />
              <Skeleton
                variant="circular"
                animation="wave"
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#424242', // Warna abu-abu
                }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ width: '30%', backgroundColor: '#424242' }}
              />
            </Box>
          </Box>

          {/* Genre */}
          <Box className="flex gap-3">
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                animation="wave"
                sx={{
                  width: 80,
                  height: 30,
                  borderRadius: '15px',
                  backgroundColor: '#424242', // Warna abu-abu
                }}
              />
            ))}
          </Box>

          {/* Deskripsi */}
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: '80%',
              fontSize: '1rem',
              backgroundColor: '#424242', // Warna abu-abu
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: '90%',
              fontSize: '1rem',
              backgroundColor: '#424242', // Warna abu-abu
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            sx={{
              width: '75%',
              fontSize: '1rem',
              backgroundColor: '#424242', // Warna abu-abu
            }}
          />

          {/* Tombol Aksi */}
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: 150,
              height: 40,
              borderRadius: '20px',
              marginTop: '1rem',
              backgroundColor: '#424242', // Warna abu-abu
            }}
          />
        </Box>
      </section>
    </section>
  );
};

export default VideoDetailSkeleton;

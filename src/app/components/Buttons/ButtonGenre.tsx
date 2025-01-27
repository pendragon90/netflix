import React from 'react';

interface ButtonGenreProps {
  text: string;
}

const ButtonGenre: React.FC<ButtonGenreProps> = ({ text }) => {
  return (
    <span
      className={`
          px-3 py-2 rounded-full shadow-lg border font-medium text-white bg-transparent
        
    `}
    >
      {text}
    </span>
  );
};

export default ButtonGenre;

import { useEffect, useState } from 'react';
import { getTv, getMovieGenres, searchTv } from '../../../api';
import CardMovies from '../../Fragments/CardMovies';

const TvLayout = () => {
  const [Tv, setTv] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState([]);
  

  useEffect(() => {
    fetchTv();
    fetchGenres();
  }, []);

  const fetchTv = async () => {
    try {
      const data = await getTv();
      setTv(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching discover Tv:', error);
    }
  };

  const fetchGenres = async () => {
    try {
      const data = await getMovieGenres();
      setGenres(data);
    } catch (error) {
      console.error('Error fetching movie genres:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async () => {
    if (searchQuery.trim() !== '') {
      try {
        const results = await searchTv(searchQuery);
        setSearchResults(results);
      } catch (error) {
        console.error('Error searching Tv:', error);
      }
    }
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredTv = selectedGenre
    ? Tv.filter((movie) => movie.genre_ids?.includes(parseInt(selectedGenre)))
    : Tv;

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <>
      <div className="mx-5 my-16 md:mt-28 flex justify-between lg:justify-start gap-3">
        <div className="relative">
          <input
            className="text-base md:text-2xl lg:text-lg placeholder:italic placeholder:text-slate-400 w-full border border-slate-300 rounded-md p-2 md:py-4 md:px-14 focus:outline-none focus:border-red-600 focus:ring-red-600 focus:ring-1"
            placeholder="Search..."
            type="text"
            name="search"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <select
          className="md:text-2xl lg:text-lg px-2 lg:px-4 rounded-md focus:outline-none border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">All Tv</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <button
          className="ml-2 md:text-2xl lg:text-lg px-4 py-2 bg-red-600 text-white rounded-md"
          onClick={handleSearchSubmit}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mx-5 mb-10">
        {(searchQuery.trim() !== '' ? searchResults : filteredTv).map((result) => {
          return (
            <CardMovies
              link={`/Tv/detail/${result.id}`}
              key={result.id}
              img={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
              title={result.name}
            />
          );
        })}
      </div>

      {searchQuery && (
        <div className="h-screen bg-black"></div>
      )}
    </>
  );
};

export default TvLayout;

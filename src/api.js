import axios from 'axios';

const API_KEY = '1f31dd37e090f11c2a0ed91ab884314b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching discover movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const getMovieGenres = async () => {
  const response = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  return response.data.genres;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const getMovieTrailer = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      append_to_response: 'videos',
    },
  });

  const trailer = response.data.videos?.results.find((video) => video.type === 'Trailer');
  return trailer || null;
};
// tv

export const getTv = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching discover tv:', error);
    throw error;
  }
};

export const getTvDetails = async (tvId) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${tvId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching discover tv:', error);
    throw error;
  }
};

export const searchTv = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/tv`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching tv:', error);
    throw error;
  }
};

export const getTvGenres = async () => {
  const response = await axios.get(
    `${BASE_URL}/genre/tv/list?api_key=${API_KEY}`
  );
  return response.data.genres;
};

export const getTvCast = async (tvId) => {
  const response = await axios.get(`${BASE_URL}/tv/${tvId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const getTvTrailer = async (tvId) => {
  const response = await axios.get(`${BASE_URL}/tv/${tvId}`, {
    params: {
      api_key: API_KEY,
      append_to_response: 'videos',
    },
  });

  const trailer = response.data.videos?.results.find((video) => video.type === 'Trailer');
  return trailer || null;
};


// upcoming

export const getUpcoming = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching discover tv:', error);
    throw error;
  }
};

export const getPopular = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching discover tv:', error);
    throw error;
  }
};

export const getTopRate = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching discover tv:', error);
    throw error;
  }
};
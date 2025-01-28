import { Movie, MovieDetail } from '@/types/movieType';
import { Actor, Genre, Trailer } from '@/types/videoAttrType';
import { Tv, TvDetail, TvVideos } from '@/types/tvType';
import { handleAxiosError } from '@/utils/errorHandler';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getMovies = async (page: number = 1): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getMovieDetail = async (movieId: number): Promise<MovieDetail> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getMovieVideos = async (movieId: number): Promise<Videos> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getMovieGenre = async (): Promise<Genre[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.genres;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getMovieActors = async (movieId: number): Promise<Actor[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

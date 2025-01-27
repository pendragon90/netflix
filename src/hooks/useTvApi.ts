import { Actor, Genre, Trailer } from '@/types/videoAttrType';
import { Tv, TvDetail, TvVideos } from '@/types/tvType';
import { handleAxiosError } from '@/utils/errorHandler';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTv = async (page: number = 1): Promise<Tv[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/tv`, {
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

export const searchTv = async (query: string): Promise<TvVideos[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/search/tv`, {
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

export const getTvDetail = async (tvId: number): Promise<TvDetail> => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${tvId}`, {
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

export const getTvGenre = async (): Promise<Genre[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/tv/list`, {
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

export const getTvActors = async (tvId: number): Promise<Actor[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${tvId}/credits`, {
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

export const getTvVideos = async (id:number): Promise<Tv[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${id}/videos`, {
      params: {
        api_key: API_KEY
      },
    });
    return response.data.results;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};
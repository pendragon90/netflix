import axios, { AxiosError } from 'axios';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
      console.error('Axios error: ', error);
  } else {
    console.error('Unknown error: ', error);
  }
};

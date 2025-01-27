import { Genre, ProductionCompany } from './videoAttrType';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
}

export interface MovieDetail {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  production_companies: ProductionCompany[];
}

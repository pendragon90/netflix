export type IdentityVideo = 'movie' | 'tv'


export interface Videos {
  id: number;
  key: string;
}
export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
}

export interface Actor {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface Trailer {
  id: string;
  key: string;
  name: string;
  type: string;
}

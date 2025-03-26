export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
  backdrop_path?: string;
  release_date?: string;
}

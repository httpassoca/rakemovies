import { IRakemovieEditMovieRequest } from "./rakemovie-edit-movie-request.interface";
import { IRakemovieMovieResponse } from "./rakemovie-movie-response.interface";
import { IRakemovieSearchRequest } from "./rakemovie-search-request.interface";
import { IRakemovieSearchResponse } from "./rakemovie-search-response.interface";

export interface IRakemoviesAPI {
  getMovie(id: string): Promise<IRakemovieMovieResponse>;
  searchMovies(data: IRakemovieSearchRequest): Promise<IRakemovieSearchResponse[]>;
  createMovie(imdbId: string): Promise<IRakemovieMovieResponse>;
  editMovie(data: IRakemovieEditMovieRequest): Promise<IRakemovieMovieResponse>;
  deleteMovie(id: string): Promise<null>;
}

export default IRakemoviesAPI;
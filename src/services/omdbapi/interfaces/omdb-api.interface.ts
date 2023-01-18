import { IMovieRequest } from './movie-request.interface';
import { IMovieResponse } from './movie-response.interface';
import { IMovieSearchRequest } from './movie-search-request.interface';
import { IMovieSearchResponse } from './movie-search-response.interface';

export interface IOmdbApi {
  searchByIdOrTitle(data: IMovieRequest): Promise<IMovieResponse | null>;
  search(data: IMovieSearchRequest): Promise<IMovieSearchResponse | null>;
}

export default IOmdbApi;

import { IMovieRequest } from './movie-request.interface';
import { IMovieResponse } from './movie-response.interface';
import { IMovieSearchRequest } from './movie-search-request.interface';
import { IMovieSearchResponse } from './movie-search-response.interface';

export interface IOmdbApi {
  searchByIdOrTitle(data: IMovieRequest): Promise<IMovieResponse>;
  search(data: IMovieSearchRequest): Promise<IMovieSearchResponse>;
}

export default IOmdbApi;

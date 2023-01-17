import axios, { AxiosInstance } from "axios";
import { IRakemovieEditMovieRequest } from "./interfaces/rakemovie-edit-movie-request.interface";
import { IRakemovieMovieResponse } from "./interfaces/rakemovie-movie-response.interface";
import { IRakemovieSearchRequest } from "./interfaces/rakemovie-search-request.interface";
import { IRakemovieSearchResponse } from "./interfaces/rakemovie-search-response.interface";
import IRakemoviesAPI from "./interfaces/rakemovies-api.interface";

export class RakemoviesAPI implements IRakemoviesAPI {
  private rakemoviesApi: AxiosInstance;

  constructor() {
    this.rakemoviesApi = axios.create({
      baseURL: import.meta.env.VITE_RAKEMOVIES_API_URL,
      headers: {
        "Content-type": "application/json",
      }}
    );
  }

  public async createMovie(imdbId: string): Promise<IRakemovieMovieResponse> {
    const movie = await this.rakemoviesApi.post(`/movie`, {
      id: imdbId,
    });
    return movie.data;
  }

  public async getMovie(imdbId: string): Promise<IRakemovieMovieResponse> {
    const movie = await this.rakemoviesApi.get(`/movie/${imdbId}`);
    return movie.data;
  }

  public async searchMovies(data: IRakemovieSearchRequest): Promise<IRakemovieSearchResponse[]> {
    const movies = await this.rakemoviesApi.get('/movie/search', {...data});
    return movies.data;
  }

  public async editMovie(data: IRakemovieEditMovieRequest): Promise<IRakemovieMovieResponse> {
    const movie = await this.rakemoviesApi.put(`/movie/${data.imdbId}`, {...data.data});
    return movie.data;
  }

  public async deleteMovie(id: string): Promise<null> {
    const res = await this.rakemoviesApi.delete(`/movie/${id}`);
    return res.data;
  }
}
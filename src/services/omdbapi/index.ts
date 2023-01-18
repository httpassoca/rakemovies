import axios, { AxiosInstance } from "axios";
import { IMovieRequest } from "./interfaces/movie-request.interface";
import { IMovieResponse } from "./interfaces/movie-response.interface";
import { IMovieSearchRequest } from "./interfaces/movie-search-request.interface";
import { IMovieSearchResponse } from "./interfaces/movie-search-response.interface";
import IOmdbApi from "./interfaces/omdb-api.interface";

export class OmdbAPI implements IOmdbApi {
  private ombdApi: AxiosInstance;

  constructor() {
    this.ombdApi = axios.create({
      baseURL: `http://www.omdbapi.com/`,
      headers: {
        "Content-type": "application/json",
      },
      params: {
        "apiKey": import.meta.env.VITE_OMDB_API_KEY
      }}
    );
  }

  public async search(
    data: IMovieSearchRequest,
  ): Promise<IMovieSearchResponse | null> {
    const res = await this.ombdApi.get<IMovieSearchResponse>('', {
      params: data as IMovieSearchRequest,
    });
    if (res.data.Response === 'True') {
      return res.data;
    } else {
      return null;
    }
  }

  public async searchByIdOrTitle(data: IMovieRequest): Promise<IMovieResponse | null> {
    const res = await this.ombdApi.get<IMovieResponse>('', {
      params: data as IMovieRequest,
    });
    if (res.data.Response === 'True') {
      return res.data;
    } else {
      return null;
    }
  }

}
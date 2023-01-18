import { ref } from "vue";
import { defineStore } from "pinia";
import { OmdbAPI } from "../../services/omdbapi";
import { ISearchResponse } from "../../services/omdbapi/interfaces/movie-search-response.interface";
import { IMovieResponse } from "../../services/omdbapi/interfaces/movie-response.interface";

export const useMoviesStore = defineStore("movies", () => {
  const isLoading = ref(true);
  const omdbapi = new OmdbAPI();

  async function searchMovie(title: string): Promise<ISearchResponse[] | null> {
    isLoading.value = true;
    const results = await omdbapi.search({s: title});
    isLoading.value = false;
    if(results) {
      return results.Search;
    }
    return null;
  }
  async function getMovieById(imdbId: string): Promise<IMovieResponse | null> {
    isLoading.value = true;
    const movie = await omdbapi.searchByIdOrTitle({i: imdbId});
    isLoading.value = false;
    return movie;
  }

  return { searchMovie, isLoading, getMovieById };
});
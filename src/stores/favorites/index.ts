import { ref } from "vue";
import { defineStore } from "pinia";
import { RakemoviesAPI } from "../../services/rakemoviesapi";
import { IRakemovieMovieResponse } from "../../services/rakemoviesapi/interfaces/rakemovie-movie-response.interface";
import { IRakemovieMovie } from "../../services/rakemoviesapi/interfaces/rakemovie-edit-movie-request.interface";
import { IRakemovieSearchResponse } from "../../services/rakemoviesapi/interfaces/rakemovie-search-response.interface";

export const useFavoritesStore = defineStore("favorites", () => {
  const isLoading = ref<boolean>(false);
  const favorites = ref<IRakemovieSearchResponse[]>([]);
  const rakemovieapi = new RakemoviesAPI();

  function isFavorite(imdbId: string) {
    return !!favorites.value.find(movie => movie.imdbID === imdbId)
  }

  async function addFavorite(imdbId: string): Promise<IRakemovieMovieResponse | null> {
    isLoading.value = true;
    const movie = await rakemovieapi.createMovie(imdbId);
    // update favorites list
    searchFavorites();
    isLoading.value = false;
    return movie || null;
  }

  async function removeFavorite(id: string): Promise<void> {
    isLoading.value = true;
    await rakemovieapi.deleteMovie(id);
    // update favorites list
    searchFavorites();
    isLoading.value = false;
  }

  async function editFavorite(imdbId: string, data: IRakemovieMovie): Promise<IRakemovieMovieResponse> {
    isLoading.value = true;
    const movie = await rakemovieapi.editMovie({ imdbId, data });
    // update favorites list
    searchFavorites();
    isLoading.value = false;
    return movie;
  }

  async function getFavorite(imdbId: string): Promise<IRakemovieMovieResponse> {
    isLoading.value = true;
    const favorite = await rakemovieapi.getMovie(imdbId);
    isLoading.value = false;
    return favorite;
  }

  async function searchFavorites(search: string | undefined = undefined, year: string | undefined = undefined, type: string | undefined = undefined): Promise<void> {
    isLoading.value = true;
    favorites.value = await rakemovieapi.searchMovies({
      search: search || undefined,
      year: year || undefined,
      type: type || undefined
     });
    isLoading.value = false;
  }

  return { addFavorite, isLoading, removeFavorite, editFavorite, favorites, searchFavorites, isFavorite, getFavorite};
});
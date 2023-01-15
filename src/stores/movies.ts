import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { IFilm } from "./movies.types";
import rakemovies from "../services/rakemovies";

export const useMoviesStore = defineStore("movies", () => {
  const film = ref<IFilm>();
  const isLoading = ref(true);

  async function getFilm(title: string) {
    isLoading.value = true;
    film.value = await rakemovies.getFilm(title);
    isLoading.value = false;
  }

  return { getFilm, isLoading, film };
});
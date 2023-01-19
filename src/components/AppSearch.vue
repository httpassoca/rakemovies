<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useMoviesStore } from '../stores/movies'
import { ISearchResponse } from '../services/omdbapi/interfaces/movie-search-response.interface'
import AppLoading from './Base/AppLoading.vue'

const title = ref('')
const state = reactive({
  searchResults: [] as ISearchResponse[]
})
const movieStore = useMoviesStore()

async function searchMovie () {
  state.searchResults = await movieStore.searchMovie(title.value) || []
}
</script>

<template>
  <form @submit.prevent="searchMovie">
    <input
      type="text"
      placeholder="Search by title"
      v-model="title"
    >
    <button
      class="bg-yellow"
      type="submit"
    >
      Search
    </button>
  </form>
  <div v-if="state.searchResults.length && !movieStore.isLoading">
    <router-link
      v-for="(result, index) in state.searchResults"
      :key="index"
      :to="`/movie/${result.imdbID}`"
      class="mb-4"
    >
      <div class="movie-result">
        <span>{{ result.Title }} ({{ result.Year }})</span>
        <span>Type: {{ result.Type }}</span>
      </div>
    </router-link>
  </div>
  <AppLoading v-else-if="movieStore.isLoading" />
</template>

<style scoped lang="sass">
form
  display: flex
  gap: 8px
input
  background-color: white
  padding: 6px 12px
  color: black
  outline: none
  border-radius: 4px
button
  color: black
  padding: 6px 12px
  border-radius: 4px

.movie-result
  @apply flex flex-col
  padding: 10px 14px
  margin-bottom: 12px
  border: 1px solid #ffc20055
  border-radius: 4px

</style>

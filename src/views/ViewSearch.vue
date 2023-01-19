<script setup lang="ts">
import { ref, reactive } from 'vue'
import AppTitle from '../components/Base/AppTitle.vue';
import AppInput from '../components/Base/AppInput.vue';
import AppLoading from '../components/Base/AppLoading.vue';
import Inspiration from '../components/AppInspiration.vue';
import { useMoviesStore } from '../stores/movies';
import { ISearchResponse } from '../services/omdbapi/interfaces/movie-search-response.interface';

const title = ref('')
const movieStore = useMoviesStore()


const state = reactive({
  searchResults: [] as ISearchResponse[]
})

async function searchMovie () {
  state.searchResults = await movieStore.searchMovie(title.value) || []
}
</script>

<template>
  <div class="mx-auto flex flex-col justify-center gap-8">
    <AppTitle /><form @submit.prevent="searchMovie">
      <AppInput
        type="text"
        placeholder="Search by title"
        v-model="title"
      />
      
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
    <Inspiration />
  </div>
</template>

<style lang="sass" scoped>
main
  max-width: 1000px
form
  display: flex
  gap: 8px
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

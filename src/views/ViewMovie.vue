<script setup lang="ts">
import { useRouter } from 'vue-router'
import Spoiler from '../components/Base/AppSpoilers.vue'
import { useMoviesStore } from '../stores/movies'
import { onMounted, reactive } from 'vue'
import { IMovieResponse } from '../services/omdbapi/interfaces/movie-response.interface'
import AppLoading from '../components/Base/AppLoading.vue'

const router = useRouter()
const movieStore = useMoviesStore()

const state = reactive({
  movie: null as IMovieResponse | null
})

onMounted(async () => {
  const movieImdbId = router.currentRoute.value.params.id as string
  state.movie = await movieStore.getMovieById(movieImdbId)
})
</script>

<template>
  <div
    class="cursor-pointer font-sans"
    @click="router.push('/')"
  >
    <v-icon
      name="bi-arrow-bar-left"
      scale="1.5"
      fill="#fec200"
    />
    <span class="text-xl">Back</span>
  </div>
  <div
    class="film"
    v-if="!movieStore.isLoading && state.movie"
  >
    <div class="flex flex-col gap-8">
      <img
        class="poster"
        :src="state.movie.Poster"
        :alt="state.movie.Title + ' poster'"
      >
      <div class="ratings">
        <a
          v-if="state.movie.Ratings[0]?.Value"
          :href="`https://www.imdb.com/title/${state.movie.imdbID}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="image">
            <img
              src="../assets/icon-imdb.webp"
              alt="IMDB icon"
            >
            <div class="icon">
              <v-icon
                name="hi-external-link"
                scale="1.5"
              />
            </div>
          </div>
          <span>{{ state.movie.Ratings[0].Value }}</span>
        </a>
        <a
          v-if="state.movie.Ratings[1]?.Value"
          :href="`https://www.rottentomatoes.com/search?search=${state.movie.Title}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="image">
            <img
              src="../assets/icon-tomatoes.webp"
              alt="Rotten Tomatoes icon"
            >
            <div class="icon">
              <v-icon
                name="hi-search"
                scale="1.5"
              />
            </div>
          </div>
          <span>{{ state.movie.Ratings[1].Value }}</span>
        </a>
        <a
          v-if="state.movie.Ratings[2]?.Value"
          :href="`https://www.metacritic.com/search/all/${state.movie.Title}/results`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="image">
            <img
              src="../assets/icon-meta.webp"
              alt="Metascore icon"
            >
            <div class="icon">
              <v-icon
                name="hi-search"
                scale="1.5"
              />
            </div>
          </div>
          <span>{{ state.movie.Ratings[2].Value }}</span>
        </a>
      </div>
    </div>
    <div class="info">
      <h2 class="text-xl font-bold font-mono">
        {{ state.movie.Title }}
      </h2>
      <ul>
        <li>
          <b>Year:</b> {{ state.movie.Year }}
        </li>
        <li>
          <b>Rated:</b> {{ state.movie.Rated }}
        </li>
        <li>
          <b>Runtime:</b> {{ state.movie.Runtime }}
        </li>
        <li>
          <b>Genre:</b> {{ state.movie.Genre }}
        </li>
        <li>
          <b>Director:</b> {{ state.movie.Director }}
        </li>
        <li>
          <b>Actors:</b> {{ state.movie.Actors }}
        </li>
        <li>
          <b>Language:</b> {{ state.movie.Language }}
        </li>
        <li>
          <b>Country:</b> {{ state.movie.Country }}
        </li>
        <li>
          <b>Plot:</b>
          <Spoiler :data="state.movie.Plot" />
        </li>
      </ul>
    </div>
  </div>
  <AppLoading v-else />
</template>

<style scoped lang="sass">
.film
  @apply flex justify-start gap-4 mt-4
  width: 1000px
  .info
    width: 400px
.poster
  width: 300px
.ratings
  @apply flex justify-between items-center px-2
  img
    height: 50px
    width: 50px
    border-radius: 50%
    transition: all .2s
  > div, a
    @apply flex flex-col items-center gap-2
    overflow: hidden
    height: 50px
    .icon
      transition: all .3s
      transform: translate(12px, 0)
    &:hover
      .icon
        transform: translate(12px, -40px)
      img
        filter: grayscale(1) brightness(0.2)
</style>

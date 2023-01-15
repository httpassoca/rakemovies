<script setup lang="ts">
import { useRouter } from 'vue-router';
import Spoiler from '../components/Base/Spoilers.vue'
import { useMoviesStore } from '../stores/movies';

const router = useRouter();
const movieStore = useMoviesStore();
</script>

<template>
  <div class="cursor-pointer font-sans" @click="router.push('/')">
    <v-icon name="bi-arrow-bar-left" scale="1.5" fill="#fec200"></v-icon>
    <span class="text-xl">Back</span>
  </div>
  <div class="film" v-if="movieStore.film">
    <div class="flex flex-col gap-8">
      <img class="poster" :src="movieStore.film.Poster" :alt="movieStore.film.Title + ' poster'">
      <div class="ratings">
        <a v-if="movieStore.film.Ratings[0]?.Value" :href="`https://www.imdb.com/title/${movieStore.film.imdbID}`"
          target="_blank" rel="noopener noreferrer">
          <div class="image">
            <img src="../assets/icon-imdb.webp" alt="IMDB icon">
            <div class="icon">
              <v-icon name="hi-external-link" scale="1.5"></v-icon>
            </div>
          </div>
          <span>{{ movieStore.film.Ratings[0].Value }}</span>
        </a>
        <a v-if="movieStore.film.Ratings[1]?.Value"
          :href="`https://www.rottentomatoes.com/search?search=${movieStore.film.Title}`" target="_blank"
          rel="noopener noreferrer">
          <div class="image">
            <img src="../assets/icon-tomatoes.webp" alt="Rotten Tomatoes icon">
            <div class="icon">
              <v-icon name="hi-search" scale="1.5"></v-icon>
            </div>
          </div>
          <span>{{ movieStore.film.Ratings[1].Value }}</span>
        </a>
        <a v-if="movieStore.film.Ratings[2]?.Value"
          :href="`https://www.metacritic.com/search/all/${movieStore.film.Title}/results`" target="_blank"
          rel="noopener noreferrer">
          <div class="image">
            <img src="../assets/icon-meta.webp" alt="Metascore icon">
            <div class="icon">
              <v-icon name="hi-search" scale="1.5"></v-icon>
            </div>
          </div>
          <span>{{ movieStore.film.Ratings[2].Value }}</span>
        </a>
      </div>
    </div>
    <div class="info">
      <h2 class="text-xl font-bold font-mono">
        {{ movieStore.film.Title }}
      </h2>
      <ul>
        <li>
          <b>Year:</b> {{ movieStore.film.Year }}
        </li>
        <li>
          <b>Rated:</b> {{ movieStore.film.Rated }}
        </li>
        <li>
          <b>Runtime:</b> {{ movieStore.film.Runtime }}
        </li>
        <li>
          <b>Genre:</b> {{ movieStore.film.Genre }}
        </li>
        <li>
          <b>Director:</b> {{ movieStore.film.Director }}
        </li>
        <li>
          <b>Actors:</b> {{ movieStore.film.Actors }}
        </li>
        <li>
          <b>Language:</b> {{ movieStore.film.Language }}
        </li>
        <li>
          <b>Country:</b> {{ movieStore.film.Country }}
        </li>
        <li>
          <b>Plot:</b>
          <Spoiler :data="movieStore.film.Plot" />
        </li>
      </ul>
    </div>
  </div>
  <div v-else>
    error
  </div>
</template>

<style scoped lang="sass">
.film
  @apply flex justify-start gap-4
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

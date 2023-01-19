<script setup lang="ts">
import { useRouter } from 'vue-router'
import Spoiler from '../components/Base/AppSpoilers.vue'
import { onMounted, reactive, ref } from 'vue'
import AppLoading from '../components/Base/AppLoading.vue'
import AppInput from '../components/Base/AppInput.vue'
import AppButton from '../components/Base/AppButton.vue'
import { useFavoritesStore } from '../stores/favorites'
import { IRakemovieMovieResponse } from '../services/rakemoviesapi/interfaces/rakemovie-movie-response.interface'

const router = useRouter()
const favoritesStore = useFavoritesStore()
const editedTitle = ref<string>('')
const editedYear = ref<string>('')
const editedType = ref<string>('')

const movieImdbId = router.currentRoute.value.params.id as string

const state = reactive({
  movie: null as IRakemovieMovieResponse | null
})

async function saveFavorite() {
  favoritesStore.editFavorite(movieImdbId, {
    title: editedTitle.value,
    year: editedYear.value,
    type: editedType.value,
  })
}

onMounted(async () => {
  state.movie = await favoritesStore.getFavorite(movieImdbId);
  editedTitle.value = state.movie.title;
  editedYear.value = state.movie.year;
  editedType.value = state.movie.type;
})
</script>

<template>
  <div class="ml-4">
    <div
      class="cursor-pointer font-sans"
      @click="router.push('/')"
    >
      <v-icon
        name="bi-arrow-bar-left"
        scale="1.5"
        fill="#fec200"
      />
      <span class="text-xl">Back to search</span>
    </div>
    <div
      class="film"
      v-if="!favoritesStore.isLoading && state.movie"
    >
      <div class="flex flex-col gap-8">
        <img
          class="poster"
          :src="state.movie.poster_image"
          :alt="state.movie.title + ' poster'"
        >
      </div>
      <div class="info">
        <form @submit.prevent="saveFavorite">
          <AppInput
            class="mb-2"
            placeholder="Title"
            v-model="editedTitle"
            :value="editedTitle"
          />
          <AppInput
            class="mb-2"
            placeholder="Year"
            v-model="editedYear"
            :value="editedYear"
          />
          <AppInput
            class="mb-2"
            placeholder="Type"
            v-model="editedType"
            :value="editedType"
          />
          <ul>
            <li>
              <b>Rated:</b> {{ state.movie.rated }}
            </li>
            <li>
              <b>Runtime:</b> {{ state.movie.runtime }}
            </li>
            <li>
              <b>Genre:</b> {{ state.movie.genre }}
            </li>
            <li>
              <b>Director:</b> {{ state.movie.director }}
            </li>
            <li>
              <b>Actors:</b> {{ state.movie.actors }}
            </li>
            <li>
              <b>Language:</b> {{ state.movie.language }}
            </li>
            <li>
              <b>Country:</b> {{ state.movie.country }}
            </li>
            <li>
              <b>Plot: </b>
              <Spoiler :data="state.movie.plot" />
            </li>
          </ul>
          <AppButton type="submit">
            Save
          </AppButton>
        </form>
      </div>
    </div>
    <AppLoading v-else />
  </div>
</template>

<style scoped lang="sass">
.film
  @apply flex justify-start gap-4 mt-4
  width: 100%
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
</style>

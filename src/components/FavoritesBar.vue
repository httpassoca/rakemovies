<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import {useRouter} from 'vue-router';
import { useFavoritesStore } from '../stores/favorites'
import AppLoading from './Base/AppLoading.vue'
import AppButton from './Base/AppButton.vue'
import AppInput from './Base/AppInput.vue'

const favoritesStore = useFavoritesStore()
const searchTitle = ref('')
const searchYear = ref('')
const searchType = ref('')

const router = useRouter();

onMounted(() => {
  favoritesStore.searchFavorites();
})

function deleteFavorite(id: string) {
  favoritesStore.removeFavorite(id);
}

async function searchFavorite() {
  favoritesStore.searchFavorites(searchTitle.value, searchYear.value, searchType.value);
}

</script>

<template>
  <h2 class="text-xl mb-4">
    My favorites
  </h2>
  <form @submit.prevent="searchFavorite">
    <AppInput
      type="text"
      placeholder="Title"
      v-model="searchTitle"
    />
    <AppInput
      type="text"
      placeholder="Year"
      v-model="searchYear"
    />
    <AppInput
      type="text"
      placeholder="Type"
      v-model="searchType"
    />
    <AppButton type="submit">
      Make a search!
    </AppButton>
  </form>
  <div
    v-if="favoritesStore.favorites.length && !favoritesStore.isLoading"
    class="flex flex-col"
  >
    <div
      class="favorite"
      v-for="(favorite, i) in favoritesStore.favorites"
      :key="i"
    >
      <span>{{ favorite.title }} ({{ favorite.year }})</span>
      <div class="flex gap-2 items-center">
        <v-icon
          @click="router.replace(`/movie/edit/${favorite.imdbID}`)"
          name="co-pencil"
          class="cursor-pointer"
        />
        <v-icon
          name="co-trash"
          @click="deleteFavorite(favorite.id)"
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
  <div v-else-if="favoritesStore.isLoading">
    <AppLoading />
  </div>
  <div v-else>
    No movies found! Make sure you have movies favorited or are searching with the right fields.
  </div>
</template>

<style scoped lang="sass">
form
  @apply flex flex-col gap-2 mb-6
.favorite
  @apply flex items-center justify-between
  padding: 10px 14px
  margin-bottom: 10px
  border: 1px solid #ffc20055
  border-radius: 4px
</style>
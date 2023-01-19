<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useFavoritesStore } from '../stores/favorites'
import AppLoading from './Base/AppLoading.vue'

const favoritesStore = useFavoritesStore()
const searchTitle = ref('')
const searchYear = ref('')
const searchType = ref('')

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
    <input
      type="text"
      placeholder="Title"
      v-model="searchTitle"
    >
    <input
      type="text"
      placeholder="Year"
      v-model="searchYear"
    >
    <input
      type="text"
      placeholder="Type"
      v-model="searchType"
    >
    <button class="bg-yellow">
      Make a search!
    </button>
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
      <v-icon
        name="co-trash"
        @click="deleteFavorite(favorite.id)"
        class="cursor-pointer "
      />
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
.favorite
  @apply flex items-center justify-between
  padding: 10px 14px
  margin-bottom: 10px
  border: 1px solid #ffc20055
  border-radius: 4px
</style>
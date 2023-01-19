<script lang="ts" setup>
import { onMounted } from 'vue';
import { useFavoritesStore } from '../stores/favorites'
import AppLoading from './Base/AppLoading.vue'

const favoritesStore = useFavoritesStore()

onMounted(() => {
  favoritesStore.searchFavorites();
})

function deleteFavorite(id: string) {
  favoritesStore.removeFavorite(id);
}

</script>

<template>
  <h2 class="text-xl mb-4">
    My favorites
  </h2>
  <div
    v-if="favoritesStore.favorites && !favoritesStore.isLoading"
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
</template>

<style scoped lang="sass">
.favorite
  @apply flex items-center justify-between
  padding: 10px 14px
  margin-bottom: 10px
  border: 1px solid #ffc20055
  border-radius: 4px
</style>
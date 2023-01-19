<script lang="ts" setup>
import { onMounted } from 'vue';
import { useFavoritesStore } from '../stores/favorites'

const favoritesStore = useFavoritesStore()

onMounted(() => {
  favoritesStore.searchFavorites();
})
</script>

<template>
  <h2 class="text-xl mb-4">
    My favorites
  </h2>
  <div class="flex flex-col">
    <div
      class="favorite"
      v-for="(favorite, i) in favoritesStore.favorites"
      :key="i"
    >
      <span>{{ favorite.title }} ({{ favorite.year }})</span>
    </div>
  </div>
</template>

<style scoped lang="sass">
.favorite
  @apply flex flex-col
  padding: 10px 14px
  margin-bottom: 10px
  border: 1px solid #ffc20055
  border-radius: 4px
</style>
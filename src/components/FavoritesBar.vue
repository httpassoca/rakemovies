<script lang="ts" setup>
import { onMounted } from 'vue';
import {useRakemoviesStore} from '../stores/favorites'

const favoritesStore = useRakemoviesStore()

onMounted(() => {
  favoritesStore.searchFavorites();
})
</script>

<template>
  <ul>
    <li
      v-for="(favorite, i) in favoritesStore.favorites"
      :key="i"
    >
      {{ favorite.title }}
    </li>
  </ul>
</template>
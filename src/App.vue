<script setup lang="ts">
import AppTitle from './components/Base/AppTitle.vue';
import Search from './components/Search.vue';
import Inspiration from './components/Inspiration.vue';
import Film from './components/Film.vue';
import { useMoviesStore } from './stores/movies';
const movieStore = useMoviesStore();

</script>

<template>
  <main class="mx-auto flex flex-col justify-center items-center min-h-screen gap-8">
    <AppTitle />
    <Search />
    <Film v-if="movieStore.film" />
    <Inspiration />
  </main>
</template>

<style lang="sass" scoped>
main
  max-width: 1000px
</style>

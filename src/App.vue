<script setup lang="ts">
import FavoritesBar from './components/FavoritesBar.vue'
</script>

<template>
  <main class="mx-auto flex flex-col justify-center mt-10">
    <FavoritesBar />
    <router-view />
  </main>
</template>

<style lang="sass" scoped>
main
  max-width: 1000px
</style>

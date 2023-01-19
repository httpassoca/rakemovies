<script setup lang="ts">
import FavoritesBar from './components/FavoritesBar.vue'
</script>

<template>
  <main class="mx-auto flex justify-center mt-10">
    <div class="sidebar">
      <FavoritesBar />
    </div>
    <router-view />
  </main>
</template>

<style lang="sass" scoped>
main
  max-width: 1300px
.sidebar
  width: 350px
  border-right: 1px solid #ffc20055
  padding-right: 16px
</style>

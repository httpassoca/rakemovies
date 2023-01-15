<script setup lang="ts">
import { ref } from 'vue';
import { useMoviesStore } from '../stores/movies';

const title = ref('')

const movieStore = useMoviesStore();
async function getFilm() {
  await movieStore.getFilm(title.value);
}
</script>

<template>
  <form @submit.prevent="getFilm">
    <input type="text" placeholder="Search here a film!" v-model="title">
    <button class="bg-yellow" type="submit">Search</button>
  </form>
</template>

<style scoped lang="sass">
form
  display: flex
  gap: 8px
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
</style>

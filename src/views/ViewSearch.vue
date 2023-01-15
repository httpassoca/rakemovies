<script setup lang="ts">
import AppTitle from '../components/Base/AppTitle.vue';
import Search from '../components/Search.vue';
import Inspiration from '../components/Inspiration.vue';

</script>

<template>
  <div class="mx-auto flex flex-col justify-center gap-8">
    <AppTitle />
    <Search />
    <Inspiration />
  </div>
</template>

<style lang="sass" scoped>
main
  max-width: 1000px
</style>

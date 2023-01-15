<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({ data: String })

const isVisible = ref(false)

</script>

<template>
  <span v-if="isVisible">
    {{ props.data }}
  </span>
  <span v-else @click="isVisible = true">
    click to see spoiler
  </span>
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

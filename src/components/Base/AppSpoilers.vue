<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  data: String
})

const isVisible = ref(false)

</script>

<template>
  <span v-if="isVisible">
    {{ props.data }}
  </span>
  <span
    class="cursor-pointer"
    @click="isVisible = true"
    v-else
  >
    click to see spoiler
  </span>
</template>
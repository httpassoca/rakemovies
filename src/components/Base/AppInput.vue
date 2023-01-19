<template>
  <input @input="$emit('update:modelValue', $event.target.value)">
</template>


<style scoped lang="sass">
input
  background-color: white
  padding: 6px 12px
  color: black
  outline: none
  border-radius: 4px
</style>

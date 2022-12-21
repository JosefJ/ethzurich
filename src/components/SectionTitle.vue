<template>
  <h1 class="section-title">
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped lang="stylus">
.section-title
  font-size clamp(1.7rem, 4.5vw, 3.75rem)
  text-align center
  width 100%
  font-family Chaney, Helvetica, sans-serif
  color var(--col-secondary-action)

</style>

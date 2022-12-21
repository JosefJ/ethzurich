
<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import useContentful from '~/api/useContentful'

const { fetchContentfulData } = useContentful()

onMounted(async () => {
  await fetchContentfulData()
})

</script>

<style lang="stylus">
*
  box-sizing border-box


:root
  // colors
  --col-primary-action #0aff44
  --col-secondary-action #61ffff
  --col-primary-accent #ff0
  --col-bg-secondary #560063
  --col-transparent-gray rgb(#560063 / 50%)
  --col-light-gray-bg rgb(0 0 0 / 8%)
  --mobile-breakpoint 1120px
  --section-content-max-width 1600px
  --app-padding 15px

@font-face
  font-family Formular
  src local("Formular"),
    url("~/assets/Formular-Medium.otf") format("truetype")

@font-face
  font-family Chaney
  src local("Chaney"),
    url("~/assets/CHANEY-UltraExtended.otf") format("truetype")

html
  scroll-behavior smooth
  transition all 0.3s

body *
  font-family Formular, Helvetica, sans-serif

body
  margin 0
  background-color black

</style>


<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// import useContentful from '~/api/useContentful'

// const { fetchContentfulData } = useContentful()
// const { mergeContentfulDataWithLocalData } = usePieces()

// onMounted(async () => {
//   await fetchContentfulData()
//   mergeContentfulDataWithLocalData()
// })

</script>

<style lang="stylus">
*
  box-sizing border-box


:root
  // colors
  --col-primary-action #5400ff
  --col-primary-accent #ff0
  --col-light-gray-bg rgb(0 0 0 / 8%)
  --mobile-breakpoint 1120px
  --app-padding 15px


html
  scroll-behavior smooth
  transition all 0.3s

// @font-face
//   font-family RalewayDots
//   unicode-range U+000-5FF
//   src url("~/assets/fonts/Raleway_Dots/RalewayDots-Regular.ttf")

// @font-face
//   font-family BungeeHairline
//   font-weight normal
//   unicode-range U+000-5FF
//   src url("~/assets/fonts/Bungee_Hairline/BungeeHairline-Regular.ttf")

body
  font-family sans-serif
  margin 0


</style>

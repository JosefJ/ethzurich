<template>
  <div>
    <Header />
    <Hero />
    <Manifesto />
    <People />
    <SponsorsAndPartners />
    <FAQ v-if="content?.isSectionFaqVisible" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import useContentful from '~/api/useContentful'
const { content } = useContentful()
</script>

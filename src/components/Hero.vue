<template>
  <div>
  <Image
      :image-file="ethZurichImg"
      class="hero__eth-zurich-img" 
      alt="eth-zurich"
    />

    <div class="hero">
    <div class="hero__buttons">
    <div class="hero__buttons-row">
        <a
          href="#"
          target="_blank"

          @click.prevent="handleLinkClick"
          class="hero__button-link"
        >
          <button class="hero__button">
            Apply as a speaker <span class="hero__headless-arrow" />
          </button>
        </a>

        <a
          href="#"
          target="_blank"
          @click.prevent="handleLinkClick"
          class="hero__button-link"
        >
          <button class="hero__button">
            sponsor ETHZüri.ch <span class="hero__headless-arrow" />
          </button>
        </a>
      </div>
    </div>
  </div>
  <!-- Testing contentful connection -->
  <!-- <img v-if="useContentful().contentfulData.value" :src="useContentful().contentfulData.value?.[0].profileImage.url"> -->
</div>
</template>

<script setup lang="ts">

import ImageFile from '~/models/ImageFile'
// import useContentful from '~/api/useContentful'

const ethZurichImg = ref(
  new ImageFile({
    url: '/ETH_Zu_header.jpg',
    id: 'eth-zurich',
    lastUpdated: new Date('1990').getTime()
  })
)

const handleLinkClick = () => {
  alert('to be done')
}

</script>

<style scoped lang="stylus">
.hero__eth-zurich-img
  width 100%

.hero
  margin 50px 0 150px
  padding 0 var(--app-padding)
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  background-color white
  text-align justify


// .hero__buttons-row-one-button
.hero__buttons
  max-width 1600px
  display flex
  width 100%
  gap 25px
  flex-direction column
  align-items center


.hero__buttons
  justify-content space-between

// .hero__buttons-row-one-button
//   justify-content center

.hero__button
  transition all 0.3s
  margin 0
  cursor pointer
  display flex
  justify-content center
  align-items center
  letter-spacing 0
  text-transform uppercase
  font-weight 300
  font-family "Archivo SemiExpanded", Verdana, sans-serif
  font-size 25px
  line-height 29px
  color var(--col-primary-action)
  text-align center
  border-radius 300px
  width 100%
  height 170px
  border solid 2px var(--col-primary-action)
  background-color white
  position relative


.hero__button-one-button
  max-width 50%
  margin auto


@media (max-width 1120px)
  .hero__button
    font-size 20px
    height 150px


@media (max-width 600px)
  .hero__button
    font-size 15px
    height 120px
    white-space break-spaces


.hero__buttons-row
  display flex
  column-gap 30px
  width 100%


@media (max-width 1120px)
  .hero__buttons-row
    flex-wrap wrap
    gap 30px


  .hero__button-one-button
    max-width 100%

.hero__headless-arrow
  border-left solid 2px var(--col-primary-action)
  border-bottom solid 2px var(--col-primary-action)
  transform rotate(-135deg) skew(5deg, 5deg) translate(1px, -1px)
  width 12px
  height 12px
  margin 0 12px 2px

.hero__button:hover
.hero__button:focus
  border solid 2px var(--col-primary-action)
  color white
  box-shadow inset 30px -8em 0 0 var(--col-primary-action)


.hero__button:hover .hero__headless-arrow
  border-left solid 2px white
  border-bottom solid 2px white


.hero__button-link
  width 100%
  text-decoration none

</style>
<template>
  <div class="hero">
    <Image
      :image-file="ethZurichImgMobile"
      class="hero__eth-zurich-img hero__is-mobile"
      alt="eth-zurich"
    />

      <div class="hero__buttons">
        <div class="hero__buttons-row">
          <a
            href="https://cfp.paralelnipolis.cz/ethzuri-ch-2022/cfp"
            target="_blank"
            class="hero__button-link"
          >
            <button class="hero__button">
              Apply as a speaker
            </button>
          </a>

          <a
            href="mailto:contact@ethzuri.ch"
            target="_blank"
            class="hero__button-link"
          >
            <button class="hero__button">
              sponsor ETHZüri.ch
            </button>
          </a>
        </div>
      </div>
    <!-- Testing contentful connection -->
    <!-- <img v-if="useContentful().contentfulData.value" :src="useContentful().contentfulData.value?.[0].profileImage.url"> -->
  </div>
</template>

<script setup lang="ts">
import ImageFile from '~/models/ImageFile'
// import useContentful from '~/api/useContentful'

const ethZurichImgMobile = ref(
  new ImageFile({
    url: '/ETH_Zu_header-mobile.jpg',
    id: 'eth-zurich-mobile',
    lastUpdated: new Date('1990').getTime()
  })
)

const handleLinkClick = () => {
  alert('to be done')
}
</script>

<style scoped lang="stylus">
mobile-breakpoint = 700px

.hero
  display flex
  flex-direction column
  align-items center
  width 100%
  background-color black
  text-align justify
  height 100vh
  gap 1rem
  // font-family Formular, Helvetica, sans-serif

  @media (min-width mobile-breakpoint)
    background-image url("/ETH_Zu_header.jpg")
    background-repeat no-repeat
    background-size 100%
    justify-content end

.hero__eth-zurich-img
  width 100%

.hero__image
  width 100%
  height 200px
  background-image url("/ETH_Zu_header-mobile.jpg")
  background-repeat no-repeat
  background-size 100%

  @media (min-width mobile-breakpoint)
    background-image url("/ETH_Zu_header.jpg")

.hero__is-desktop
  display none

  @media (min-width mobile-breakpoint)
    display block


.hero__is-mobile
  display block

  @media (min-width mobile-breakpoint)
    display none

.hero__buttons
  max-width 1160px
  padding 0 var(--app-padding) 3rem
  display flex
  width 100%
  gap 25px
  flex-direction column
  align-items center


.hero__buttons
  justify-content space-between

.hero__button
  position relative
  border-radius 50em
  display inline-flex
  border 5px solid transparent
  background linear-gradient(var(--col-secondary-action), var(--col-primary-action)) padding-box,
    linear-gradient(to right, var(--col-secondary-action), var(--col-primary-action)) border-box
  z-index 2
  cursor pointer
  justify-content center
  align-items center
  text-transform uppercase
  color black
  text-align center
  width 100%
  height clamp(85px, 16vw, 120px)
  font-size clamp(1rem, 4.5vw, 1.5rem)

  &::before
    position absolute
    content ""
    background linear-gradient(var(--col-primary-action), var(--col-secondary-action)) padding-box,
      linear-gradient(to right, var(--col-secondary-action), var(--col-primary-action)) border-box
    inset 0 // same as { top: 0; right: 0; bottom: 0; left: 0; }
    z-index -1
    opacity 0
    border-radius 50em
    transition opacity 0.2s linear


.hero__button:hover::before
  opacity 1


.hero__buttons-row
  display flex
  flex-wrap wrap
  gap 30px


@media (min-width 900px)
  .hero__buttons-row
    flex-wrap nowrap
    column-gap 30px
    width 100%


  .hero__button-one-button
    max-width 100%

.hero__button-link
  width 100%
  text-decoration none
</style>

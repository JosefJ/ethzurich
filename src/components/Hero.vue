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
            href="#"
            target="_blank"
            @click.prevent="handleLinkClick"
            class="hero__button-link"
          >
            <button class="hero__button">
              Apply as a speaker
            </button>
          </a>

          <a
            href="#"
            target="_blank"
            @click.prevent="handleLinkClick"
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
import useContentful from '~/api/useContentful'

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
  justify-content space-between

  @media (min-width mobile-breakpoint)
    background-image url("~/ETH_Zu_header.jpg")
    background-repeat no-repeat
    background-size 100%
    justify-content end

.hero__eth-zurich-img
  width 100%

.hero__image
  width 100%
  height 200px
  background-image url("~/ETH_Zu_header-mobile.jpg")
  background-repeat no-repeat
  background-size 100%

  @media (min-width mobile-breakpoint)
    background-image url("~/ETH_Zu_header.jpg")

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
  transition all 0.3s
  cursor pointer
  justify-content center
  align-items center
  text-transform uppercase
  color black
  text-align center
  width 100%
  height 100px
  font-weight bold
  font-size clamp(1rem, 6vw, 1.5rem)
  // stylelint-disable-next-line declaration-colon-newline-after
  background linear-gradient(var(--col-secondary-action), var(--col-primary-action)) padding-box,
    linear-gradient(to right, var(--col-secondary-action), var(--col-primary-action)) border-box
  border-radius 50em
  border 5px solid transparent
  position relative
  display inline-flex

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

.hero__button:hover
.hero__button:focus
  box-shadow inset 30px -8em 0 0 var(--col-primary-action)

.hero__button-link
  width 100%
  text-decoration none
</style>

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
          <button class="hero__button">Apply as a speaker</button>
        </a>

        <a
          href="/ETHZuri.ch_PitchDeck.pdf"
          target="_blank"
          class="hero__button-link"
        >
          <button class="hero__button">sponsor ETHZüri.ch</button>
        </a>
      </div>
      <a
          href="mailto:contact@ethzuri.ch"
          class="hero__button-link"
        >
          <button class="hero__button hero__button--email-contact">
            <span class="hero__button--email-contact-text">
              contact@ethzuri.ch
            </span>
          </button>
        </a>
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
  padding 0 var(--app-padding) 1rem
  display flex
  width 100%
  gap 25px
  flex-direction column
  align-items center

.hero__buttons
  justify-content space-between
  padding 0 clamp(2rem, 5vw, 5rem) 2rem

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

  &--email-contact
    color white
    background linear-gradient(#000, #000) padding-box, linear-gradient(to top, var(--col-secondary-action), var(--col-primary-action)) border-box
    border 3px solid transparent

    &::before
      position absolute
      content ""
      background linear-gradient(#000, #000) padding-box, linear-gradient(to bottom, var(--col-secondary-action), var(--col-primary-action)) border-box
      inset 0 // same as { top: 0; right: 0; bottom: 0; left: 0; }
      z-index -1
      opacity 0
      border-radius 50em
      transition opacity 0.2s linear

  &--email-contact-text
    background linear-gradient(to left, var(--col-secondary-action) -20%, var(--col-primary-action))
    background-clip text
    -webkit-text-fill-color transparent

.hero__button:hover::before
  opacity 1

.hero__button--email-contact:hover
  background linear-gradient(#000, #000) padding-box, linear-gradient(to bottom, var(--col-secondary-action), var(--col-primary-action)) border-box

.hero__button--email-contact:hover .hero__button--email-contact-text
  background linear-gradient(to right, var(--col-secondary-action) -30%, var(--col-primary-action))
  background-clip text
  -webkit-text-fill-color transparent

.hero__buttons-row
  display flex
  flex-wrap wrap
  gap 30px
  width 100%

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

.hero__mail-link
  padding-bottom 1rem
  color var(--col-primary-action)
  font-size clamp(2rem, 4.5vw, 3rem)
  text-decoration none

  &:hover
    color var(--col-secondary-action)
</style>

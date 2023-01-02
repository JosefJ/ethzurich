<template>
  <div class="hero">
    <Image
      :image-file="ethZurichImgDesktop"
      class="hero__eth-zurich-img hero__is-desktop"
      alt="eth-zurich"
    />

    <Image
      :image-file="ethZurichImgMobile"
      class="hero__eth-zurich-img hero__is-mobile"
      alt="eth-zurich"
    />
  </div>

  <div class="hero__event-date">
    <div class="hero__event-date-marquee-block">
      <div class="hero__event-date-marquee-inner to-right">
        <span>
          <div v-for="n in 5" :key="n" class="hero__event-date-marquee-item">
            Ethereumzüri.ch &nbsp; 14. — 16. 4. &nbsp;
          </div>
        </span>
        <span>
          <div v-for="n in 5" :key="n" class="hero__event-date-marquee-item">
            Ethereumzüri.ch &nbsp; 14. — 16. 4. &nbsp;
          </div>
        </span>
      </div>
    </div>
    <div class="hero__event-date-text-mobile">
      Ethereumzüri.ch <br />
      14. — 16. 4.
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageFile from '~/models/ImageFile'

const ethZurichImgMobile = ref(
  new ImageFile({
    url: '/ETH_Zu_header-mobile.jpg',
    id: 'eth-zurich-mobile',
    lastUpdated: new Date('1991').getTime()
  })
)

const ethZurichImgDesktop = ref(
  new ImageFile({
    url: 'ETH_Zu_header.jpg',
    id: 'eth-zurich-desktop',
    lastUpdated: new Date('1991').getTime()
  })
)
</script>

<style scoped lang="stylus">
mobile-breakpoint = 700px

.hero
  display flex
  flex-direction column
  width 100%
  justify-content center
  align-items center
  overflow hidden

.hero__is-mobile
  display block

  @media (min-width mobile-breakpoint)
    display none

.hero__is-desktop
  display none

  @media (min-width mobile-breakpoint)
    display block

.hero__eth-zurich-img
  width 100%

.hero__event-date
  --marquee-block-width--mobile 470px
  --marquee-block-width--desktop 680px

  overflow hidden
  background-color var(--col-secondary-action)
  height 110px
  font-size 27px
  color black
  display flex
  align-items center


.hero__event-date-marquee-block
  --total-marquee-items 5

  height 100%
  overflow hidden
  position relative
  display none
  align-items center
  width calc(
    (var(--marquee-block-width--mobile)) * (var(--total-marquee-items))
  )


.hero__event-date-marquee-inner
  width 200%
  position absolute


.hero__event-date-marquee-inner.to-right
  animation marquee-right 25s linear infinite


.hero__event-date-marquee-item
  width var(--marquee-block-width--mobile)
  display inline-block
  transition all 0.2s ease-out


@keyframes marquee-right
  0%
    left -100%


  100%
    left 0


.hero__event-date-text-mobile
  text-align center
  width 100%


@media (min-width 1120px)
  .hero__image-desktop
    display block


  .hero__event-date
    height 150px
    font-size 40px


  .hero__event-date-marquee-block
    display flex
    width calc(
      (var(--marquee-block-width--desktop)) * (var(--total-marquee-items))
    )


  .hero__event-date-marquee-item
    width var(--marquee-block-width--desktop)


  .hero__image-mobile
    display none


@media (min-width 600px)
  .hero__event-date-marquee-block
    display flex


  .hero__event-date-text-mobile
    display none


  .hero__event-date
    display block
</style>

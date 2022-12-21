<template>
  <div class="header-mobile">
    <div class="header-mobile__content">
      <img
        class="header-mobile__hamburger-menu"
        src="/burger-menu.svg"
        alt="menu"
        @click="isHamMenuOpen = !isHamMenuOpen"
      />

      <router-link
        class="header__eth-logo-link"
        :to="{ path: '/', hash: '#manifesto-buttons' }"
        @click="isHamMenuOpen = false"
      >
        <img class="header__logo-eth" src="/ethzurich-title.svg" alt="tickets" />
      </router-link>

      <div class="header__social-links">
        <a :href="links.telegram" target="_blank">
          <img src="/telegram.svg" alt="telegram" />
        </a>

        <a :href="links.twitter" target="_blank">
          <img src="/twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>

    <Transition name="fade">
      <div v-show="isHamMenuOpen" class="header-mobile__local-links">
        <router-link
          v-for="localLink in localLinks"
          :key="localLink"
          class="header-mobile__local-link"
          :to="{ path: '/', hash: `#${localLink}` }"
          @click="isHamMenuOpen = false"
        >
          {{ localLink }}
        </router-link>
        <router-link
          class="header-mobile__local-link"
          :to="{ path: '/', hash: '#SponsorsAndPartners' }"
          @click="isHamMenuOpen = false"
        >
          Sponsors & Partners
        </router-link>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import links from '~/components/links'
const isHamMenuOpen = ref(false)
const localLinks = [
  'Manifesto',
  // "Hackathon",
  'Speakers',
  'FAQ'
]
</script>

<style scoped lang="stylus">
.header__social-links
  display flex
  flex-direction row
  justify-content flex-end
  gap 0.9375rem
  // width 240px


.header__eth-logo-link
  display none

  @media (min-width 750px)
    display block


.header__local-link
  text-decoration none
  color white
  padding 0 0.625rem
  font-size 20px
  line-height 23px
  letter-spacing 0
  text-align center


.header__local-link:hover
  text-decoration underline


.header-mobile
  position sticky
  top 0
  width 100%
  display flex
  justify-content space-around
  align-items center
  flex-direction column
  background-color var(--col-primary-action)
  z-index 100

// @media only screen and (min-width 70rem)
//   .header-mobile
//     display none


.header-mobile__content
  display flex
  justify-content space-around
  align-items center
  width 100%
  padding 1.25rem


.header-mobile__hamburger-menu
  margin 0 16px
  cursor pointer


.header-mobile__local-links
  align-items center
  background-color var(--col-primary-action)
  display flex
  flex-direction column
  font-size 1.5625rem
  min-height 100vh
  padding 6.875rem 1.875rem 3.125rem 3.125rem
  position fixed
  top 4.3rem
  width 100%
  z-index 100


.header-mobile__local-link
  text-decoration none
  color black
  padding 1.4375rem 0.625rem
  font-size 1.5625rem
  line-height 1.4375rem
  letter-spacing 0
  text-align center

// Animation
.fade-enter-active
.fade-leave-active
  transition opacity 0.3s


.fade-enter-from
.fade-leave-to
  opacity 0
</style>

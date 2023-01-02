<template>
  <div class="header-mobile">
    <div class="header-mobile__content">
      <img
        class="header-mobile__hamburger-menu"
        src="/burger-menu.svg"
        alt="menu"
        @click="isHamMenuOpen = !isHamMenuOpen"
      />

      <NuxtLink
        class="header__eth-logo-link"
        :to="{ path: '/', hash: '#Manifesto' }"
        external
        @click="isHamMenuOpen = false"
      >
        <img src="/ethzurich-title.svg" alt="tickets" />
      </NuxtLink>

      <div class="header__social-links">
        <a
          v-if="content?.telegramLink"
          :href="content?.telegramLink"
          target="_blank"
        >
          <img src="/telegram.svg" alt="telegram" />
        </a>

        <a
          v-if="content?.twitterLink"
          :href="content?.twitterLink"
          target="_blank"
        >
          <img src="/twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>

    <Transition name="fade">
      <div v-show="isHamMenuOpen" class="header-mobile__local-links">
        <NuxtLink
          v-for="{ hash, label } in localLinks"
          :key="label"
          external
          class="header-mobile__local-link"
          :to="{ path: '/', hash }"
          @click="isHamMenuOpen = false"
        >
          {{ label }}
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import useContentful from '~/api/useContentful'
import localLinks from '~/components/localLinks'
const { content } = useContentful()
const isHamMenuOpen = ref(false)
</script>

<style scoped lang="stylus">
.header__social-links
  display flex
  flex-direction row
  justify-content flex-end
  gap 1rem

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
  gap 2.5rem

.header-mobile__local-link
  font-size 1.7rem
  text-decoration none
  font-family Chaney, Helvetica, sans-serif
  color black
  text-align center

// Animation
.fade-enter-active
.fade-leave-active
  transition opacity 0.3s

.fade-enter-from
.fade-leave-to
  opacity 0
</style>

<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__row-one">
        <NuxtLink :to="{ path: '/', hash: '#Manifesto' }" external>
          <img
            src="/ethzurich-title.svg"
            alt="tickets"
            class="footer__eth-img"
          />
        </NuxtLink>
        <div class="footer__social-links">
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
      <div class="footer__row-two">
        <NuxtLink
          v-for="{ label, hash } in localLinks"
          :key="label"
          external
          :to="{ path: '/', hash }"
        >
          {{ label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useContentful from '~/api/useContentful'
import localLinks from '~/components/localLinks'
const { content } = useContentful()
</script>

<style scoped lang="stylus">
.footer
  width 100%
  height 327px
  display flex
  justify-content center
  gap 1.875rem
  flex-direction column
  align-items center
  background linear-gradient(180deg, var(--col-secondary-action) 0%, var(--col-primary-action) 100%)
  padding 3rem clamp(2rem, 5vw, 5rem) 2rem

.footer__content
  max-width 900px
  display flex
  flex-direction column
  gap 3.7rem
  width 100%

.footer__row-one
  display flex
  justify-content space-between
  gap 2rem
  flex-wrap wrap
  width 100%

.footer__row-two
  display flex
  justify-content space-between
  gap clamp(1rem, 5vw, 2rem)
  flex-wrap wrap
  width 100%

.footer__row-two a
  font-size clamp(0.7rem, 5vw, 1.25rem)
  text-decoration none
  font-family Chaney, Helvetica, sans-serif
  color black

.footer__social-links
  display flex
  flex-direction row
  justify-content flex-end
  gap 1rem

.footer__eth-img
  width 100%
</style>

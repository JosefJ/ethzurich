<template>
  <div class="manifesto">
    <div class="manifesto__buttons">
      <div class="manifesto__buttons-row">
        <a
          :href="links.applyToSpeak"
          target="_blank"
          class="manifesto__button-link"
        >
          <button class="manifesto__button">Apply to speak</button>
        </a>
        <a
          :href="links.applyToHack"
          target="_blank"
          class="manifesto__button-link"
        >
          <button class="manifesto__button">Apply to hack</button>
        </a>
      </div>
      <a :href="links.sponsorEthereumZurich" class="manifesto__button-link" target="_blank">
        <button class="manifesto__button manifesto__button--email-contact">
          <span class="manifesto__button--email-contact-text">
            sponsor ethereumzuri.ch


          </span>
        </button>
      </a>
    </div>

    <div id="Manifesto" class="manifesto__text-container">
      <SectionTitle title="manifesto" />
      <div class="manifesto__text-content">
        We're bringing the Ethereum community to the most crypto friendly
        country & and the cradle of blockchain research! Zürich is one of the
        last European cities which did not yet have a major Ethereum focused
        event despite its clear importance and the fact it is a home to many
        blockchain & Ethereum startups.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import links from '~/components/links'
</script>

<style scoped lang="stylus">
mobile-breakpoint = 700px

.manifesto
  display flex
  margin 50px auto 150px
  flex-direction column
  align-items center
  width 100%
  background-color black
  text-align justify
  gap 1rem
  max-width var(--section-content-max-width)
  padding 0 clamp(2rem, 5vw, 5rem) 2rem

.manifesto__buttons
  // padding 0 var(--app-padding) 1rem
  display flex
  width 100%
  gap 25px
  flex-direction column
  justify-content space-between
  align-items center

.manifesto__button
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

.manifesto__button:hover::before
  opacity 1

.manifesto__button--email-contact:hover
  background linear-gradient(#000, #000) padding-box, linear-gradient(to bottom, var(--col-secondary-action), var(--col-primary-action)) border-box

.manifesto__button--email-contact:hover .manifesto__button--email-contact-text
  background linear-gradient(to right, var(--col-secondary-action) -30%, var(--col-primary-action))
  background-clip text
  -webkit-text-fill-color transparent

.manifesto__buttons-row
  display flex
  flex-wrap wrap
  gap 30px
  width 100%

@media (min-width 900px)
  .manifesto__buttons-row
    flex-wrap nowrap
    column-gap 30px
    width 100%

  .manifesto__button-one-button
    max-width 100%

.manifesto__button-link
  width 100%
  text-decoration none

.manifesto__text-container
  padding-top 100px
  display flex
  flex-direction column
  align-items flex-start
  max-width 100%
  color var(--col-secondary-action)

.manifesto__text-content
  font-size clamp(1.5rem, 4.5vw, 3.3rem)
  text-align left

</style>

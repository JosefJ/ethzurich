<template>
  <div class="manifesto">
    <div class="manifesto__buttons">
      <div class="manifesto__buttons-row">
        <a
          v-if="content?.applyToSpeakLink && content?.applyToSpeakLabel"
          :href="content.applyToSpeakLink"
          target="_blank"
          class="manifesto__button-link"
        >
          <button class="manifesto__button">
            {{ content.applyToSpeakLabel }}
          </button>
        </a>
        <a
          v-if="content?.applyToHackLink && content?.applyToHackLabel"
          :href="content.applyToHackLink"
          target="_blank"
          class="manifesto__button-link"
        >
          <button class="manifesto__button">
            {{ content.applyToHackLabel }}
          </button>
        </a>
      </div>
      <a
        :href="links.sponsorEthereumZurich"
        class="manifesto__button-link"
        target="_blank"
      >
        <button class="manifesto__button manifesto__button--email-contact">
          <span
            v-if="content?.sponsorEthereumZurichLabel"
            class="manifesto__button--email-contact-text"
          >
            {{ content.sponsorEthereumZurichLabel }}
          </span>
        </button>
      </a>
    </div>

    <div id="Manifesto" class="manifesto__text-container">
      <SectionTitle title="manifesto" />
      <!-- eslint-disable vue/no-v-html -->
      <div
        v-if="content?.manifestoText"
        class="manifesto__text-content"
        v-html="sanitizedManifestoHtml"
      />
      <!--eslint-enable-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import DOMPurify from 'dompurify'
import links from '~/components/links'
import useContentful from '~/api/useContentful'
const { content } = useContentful()

const sanitizedManifestoHtml = computed(() =>
  DOMPurify.sanitize(documentToHtmlString(content.value?.manifestoText.json))
)
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

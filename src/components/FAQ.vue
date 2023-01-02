<template>
  <div id="FAQ" class="faq">
    <div class="faq__wrap-title">
      <SectionTitle title="FAQ" />
    </div>

    <div class="faq__blocks">
      <div
        v-for="(block, index) in blocks"
        :key="block.title"
        class="faq__block"
      >
        <div
          v-if="block?.title"
          :class="[
            'faq__block-toggle',
            { 'faq__block-toggle--open': openBlocks.includes(block.title) }
          ]"
          @click="toggleBlock(block.title)"
        >
          <div class="faq__block-number">
            {{ index + 1 }}
          </div>

          <div class="faq__block-title">
            {{ block.title }}
          </div>
        </div>

        <div
          class="faq__block-content-container"
          :style="getBlockContentStyle(block)"
        >
          <!-- eslint-disable vue/no-v-html -->
          <div
            v-if="block?.html"
            class="faq__block-content-text"
            v-html="block.html"
          ></div>
          <!--eslint-enable-->
          <!-- <SleepAndRest v-else class="faq__block-content-text" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DOMPurify from 'dompurify'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import SectionTitle from '@/components/SectionTitle.vue'
// import SleepAndRest from '@/components/faq/SleepAndRest.vue'
import useContentful from '~/api/useContentful'
const { content } = useContentful()

type Block = {
  title?: string
  text?: string
  html?: string
}

const openBlocks = ref([''])

const toggleBlock = (blockTitle?: string) => {
  if (!blockTitle) return
  if (openBlocks.value.includes(blockTitle)) {
    openBlocks.value = openBlocks.value.filter((title) => title !== blockTitle)
  } else {
    openBlocks.value.push(blockTitle)
  }
}

const getBlockContentStyle = (block: Block) => {
  if (!block.title) return
  return {
    transform: openBlocks.value.includes(block.title)
      ? 'scaleY(1)'
      : 'scaleY(0)',
    maxHeight: openBlocks.value.includes(block.title) ? '2300px' : '0',
    marginBottom: openBlocks.value.includes(block.title) ? '10px' : '-120px'
  }
}

const blocks = computed<Block[]>(() => [
  {
    title: content.value?.faqWhatToExpectOnSiteLabel,
    html: content.value?.faqWhatToExpectOnSiteText?.json
      ? DOMPurify.sanitize(
          documentToHtmlString(content.value.faqWhatToExpectOnSiteText.json)
        )
      : ''
  },
  {
    title: content.value?.faqLocationLabel,
    html: content.value?.faqLocationText?.json
      ? DOMPurify.sanitize(
          documentToHtmlString(content.value.faqLocationText.json)
        )
      : ''
  },
  {
    title: content.value?.faqSleepAndRestLabel,
    html: content.value?.faqSleepAndRestText?.json
      ? DOMPurify.sanitize(
          documentToHtmlString(content.value.faqSleepAndRestText.json)
        )
      : ''
  },
  {
    title: content.value?.faqAboutZurichLabel,
    html: content.value?.faqAboutZurichText?.json
      ? DOMPurify.sanitize(
          documentToHtmlString(content.value.faqAboutZurichText.json)
        )
      : ''
  }
])
</script>
;
<style lang="stylus">
.faq
  background-color black
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  padding 6.25rem clamp(2rem, 5vw, 5rem) 2rem


.faq__wrap-title
  max-width 1600px
  width 100%
  margin-bottom 30px


.faq__blocks
  transition all 0.3s
  max-width 1600px
  width 100%


.faq__block-number
  font-size clamp(1.7rem, 4.5vw, 3.75rem)
  font-family Chaney, Helvetica, sans-serif
  position absolute
  left clamp(0.5rem, 5.5vw, 6rem)

.faq__block
  transition all 0.3s
  margin-bottom 15px


.faq__block-toggle
  position relative
  border-radius 50em
  display inline-flex
  border 5px solid transparent
  z-index 2
  cursor pointer
  justify-content center
  align-items center
  text-transform uppercase
  // color black
  text-align center
  width 100%
  height clamp(85px, 16vw, 208px)
  font-size clamp(1rem, 4.5vw, 1.5rem)
  color var(--col-primary-action)
  background linear-gradient(#000, #000) padding-box, linear-gradient(to top, var(--col-secondary-action), var(--col-primary-action)) border-box

  &::before
    position absolute
    content ""
    background linear-gradient(#000, #000) padding-box, linear-gradient(to bottom, var(--col-secondary-action), var(--col-primary-action)) border-box
    inset 0 // same as { top: 0; right: 0; bottom: 0; left: 0; }
    z-index -1
    opacity 0
    border-radius 50em
    transition opacity 0.2s linear

  &--open
    color black
    background linear-gradient(180deg, var(--col-primary-action) 0%, var(--col-secondary-action) 100%) padding-box, linear-gradient(to bottom, var(--col-secondary-action), var(--col-primary-action)) border-box
    // background linear-gradient(180deg, var(--col-primary-action) 0%, var(--col-secondary-action) 100%)
    &::before
      position absolute
      content ""
      background linear-gradient(180deg, var(--col-primary-action) 0%, var(--col-secondary-action) 100%) padding-box, linear-gradient(to bottom, var(--col-secondary-action), var(--col-primary-action)) border-box
      inset 0 // same as { top: 0; right: 0; bottom: 0; left: 0; }
      z-index -1
      opacity 0
      border-radius 50em
      transition opacity 0.2s linear

@media (min-width 970px)
  .faq__block-toggle
    height 160px


.faq__block:hover
  filter drop-shadow(-8px 8px 8px rgb(0 0 0 / 15%))


.faq__block-title
  font-size clamp(0.9rem, 3vw, 40px)
  text-transform uppercase
  padding 0 70px
  text-align center


.faq__block-content-container
  transition all 0.3s
  background white
  padding 120px 25px 85px
  margin-top -46px
  border-bottom-right-radius 85px
  border-bottom-left-radius 85px
  overflow hidden
  transform-origin top

  @media (min-width 750px)
    margin-top -65px

  @media (min-width 970px)
    padding 135px 200px 70px
    margin-top -4.6875rem


.faq__block-content-text
  max-width 1600px
  margin auto
  font-size 17px


@media (min-width 970px)
  .faq__block-content-text
    font-size 25px
</style>

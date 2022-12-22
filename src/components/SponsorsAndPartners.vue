<template>
  <div id="SponsorsAndPartners" class="sponsors-and-partners">
    <div class="sponsors-and-partners__block">
      <SectionTitle title="sponsors" />
      <div
        class="sponsors-and-partners__small-title sponsors-and-partners__title-block-proposer sponsors-and-partners__title-tier-base"
      >
        Block Proposer
      </div>
      <div v-if="blockProposer" class="sponsors-and-partners__tier-base-icons">
        <a
          v-for="company in blockProposer"
          :key="company.name"
          :href="company.link"
          target="_blank"
        >
          <Image
            :image-file="handleImageFile(company.logo)"
            class="sponsors-and-partners__tier-base-icon"
            alt="eth-zurich"
          />
        </a>
      </div>
    </div>

    <div class="sponsors-and-partners__block">
      <div
        class="sponsors-and-partners__small-title sponsors-and-partners__title-validator-archival-node sponsors-and-partners__title-tier-others"
      >
        Validator Archival Node
      </div>
      <div
        v-if="validatorArchivalNode"
        class="sponsors-and-partners__tier-medium-icons"
      >
        <a
          v-for="company in validatorArchivalNode"
          :key="company.name"
          :href="company.link"
          target="_blank"
        >
          <Image
            :image-file="handleImageFile(company.logo)"
            class="sponsors-and-partners__tier-medium-icon"
            alt="eth-zurich"
          />
        </a>
      </div>
    </div>

    <div class="sponsors-and-partners__block">
      <div
        class="sponsors-and-partners__small-title sponsors-and-partners__title-full-node sponsors-and-partners__title-tier-others"
      >
        Full Node
      </div>
      <div v-if="fullNode" class="sponsors-and-partners__tier-medium-icons">
        <a
          v-for="company in fullNode"
          :key="company.name"
          :href="company.link"
          target="_blank"
        >
          <Image
            :image-file="handleImageFile(company.logo)"
            class="sponsors-and-partners__tier-medium-icon"
            alt="eth-zurich"
          />
        </a>
      </div>
    </div>

    <div class="sponsors-and-partners__block">
      <div
        class="sponsors-and-partners__small-title sponsors-and-partners__title-lightclient sponsors-and-partners__title-tier-others"
      >
        Lightclient
      </div>
      <div v-if="lightclient" class="sponsors-and-partners__tier-others-icons">
        <a
          v-for="company in lightclient"
          :key="company.name"
          :href="company.link"
          target="_blank"
        >
          <Image
            :image-file="handleImageFile(company.logo)"
            class="sponsors-and-partners__tier-others-icon"
            alt="eth-zurich"
          />
        </a>
      </div>
    </div>

    <div class="sponsors-and-partners__block">
      <div
        class="sponsors-and-partners__small-title sponsors-and-partners__title-media-partners sponsors-and-partners__title-tier-others"
      >
        Media Partners
      </div>
      <div
        v-if="mediaPartners"
        class="sponsors-and-partners__tier-others-icons"
      >
        <a
          v-for="company in mediaPartners"
          :key="company.name"
          :href="company.link"
          target="_blank"
        >
          <Image
            :image-file="handleImageFile(company.logo)"
            class="sponsors-and-partners__tier-others-icon"
            alt="eth-zurich"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageFile from '~/models/ImageFile'
import useContentful from '~/api/useContentful'

const { sponsors } = useContentful()

const handleImageFile = (image: any) => {
  return new ImageFile({
    url: image.url,
    id: image.sys.id,
    lastUpdated: image.sys.publishedAt
  })
}

enum Tier {
  BLOCK_PROPOSER = 'Block Proposer',
  VALIDATOR_ARCHIVAL_NODE = 'Validator Archival Node',
  FULL_NODE = 'Full Node',
  LIGHTCLIENT = 'Lightclient',
  MEDIA_PARTNERS = 'Media Partners'
}

type Sponsor = {
  link: string
  tier: string
  logo: {
    fileName: string
    sys: {
      id: string
      publishedAt: string
    }
  }
  name: string
}

const blockProposer = computed(() =>
  (sponsors.value || []).filter(
    (sponsor: Sponsor) => sponsor.tier === Tier.BLOCK_PROPOSER
  )
)

const validatorArchivalNode = computed(() =>
  (sponsors.value || []).filter(
    (sponsor: Sponsor) => sponsor.tier === Tier.VALIDATOR_ARCHIVAL_NODE
  )
)

const fullNode = computed(() =>
  (sponsors.value || []).filter(
    (sponsor: Sponsor) => sponsor.tier === Tier.FULL_NODE
  )
)
const lightclient = computed(() =>
  (sponsors.value || []).filter(
    (sponsor: Sponsor) => sponsor.tier === Tier.LIGHTCLIENT
  )
)
const mediaPartners = computed(() =>
  (sponsors.value || []).filter(
    (sponsor: Sponsor) => sponsor.tier === Tier.MEDIA_PARTNERS
  )
)
</script>

<style scoped lang="stylus">
.sponsors-and-partners
  background-color black
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  padding 6.25rem clamp(2rem, 5vw, 5rem) 2rem


.sponsors-and-partners__block
  max-width 1600px
  display flex
  flex 1
  width 100%
  flex-direction column


.sponsors-and-partners__small-title
  align-self flex-start
  font-size 25px
  text-transform uppercase

.sponsors-and-partners__title-block-proposer
  color #01ff45

.sponsors-and-partners__title-validator-archival-node
  color #01fe83

.sponsors-and-partners__title-full-node
  color #00ff82

.sponsors-and-partners__title-lightclient
  color #01ffda

.sponsors-and-partners__title-media-partners
  color #00fee4

.sponsors-and-partners__tier-base-icons
.sponsors-and-partners__tier-others-icons
.sponsors-and-partners__tier-medium-icons
  display flex
  flex-wrap wrap
  align-items center
  justify-content center
  max-width 100%

  @media (min-width 1290px)
    justify-content space-between

.sponsors-and-partners__tier-base-icons
  gap 105px
  margin-bottom 85px
  max-width 100%

.sponsors-and-partners__tier-medium-icons
  column-gap 110px
  row-gap 80px
  margin-bottom 60px


.sponsors-and-partners__tier-others-icons
  column-gap 115px
  row-gap 90px
  margin-bottom 60px


.sponsors-and-partners__tier-base-icon
  max-width 430px
  max-height 97px
  cursor pointer
  width 100%

.sponsors-and-partners__tier-medium-icon
  max-width 300px
  max-height 87px
  cursor pointer
  width 100%

.sponsors-and-partners__tier-others-icon
  max-width 220px
  max-height 50px
  cursor pointer
  width 100%


.sponsors-and-partners__title-tier-base
  margin 25px 0 95px

.sponsors-and-partners__title-tier-others
  margin 25px 0 80px

.sponsors-and-partners__separation-line
  background white
  height 3px
  width 100%
  margin 0
</style>

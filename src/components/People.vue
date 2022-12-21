<template>
  <div id="Speakers" class="people">
    <div class="people__header">
      <SectionTitle title="people" class="people__title" />
      <div class="people__header-menu">
        <button
          :class="headerMenuButtonClasses(Roles.ALL)"
          @click="showPeopleWithRole = Roles.ALL"
        >
          all
        </button>
        <button
          :class="headerMenuButtonClasses(Roles.SPEAKER)"
          @click="showPeopleWithRole = Roles.SPEAKER"
        >
          speakers
        </button>
        <button
          :class="headerMenuButtonClasses(Roles.JUDGE)"
          @click="showPeopleWithRole = Roles.JUDGE"
        >
          judges
        </button>
        <button
          :class="headerMenuButtonClasses(Roles.MENTOR)"
          @click="showPeopleWithRole = Roles.MENTOR"
        >
          mentors
        </button>
      </div>
    </div>

    <div v-if="selectedPeople" class="people__list">
      <div
        v-for="person in selectedPeople"
        :key="person.name"
        class="people__person"
      >
        <a
          v-if="person.twitter"
          :class="{ 'people__person-image-twitter-link': person.twitter }"
          :href="person.twitter"
          target="_blank"
        />

        <Image
          :image-file="handleImageFile(person.profileImage)"
          class="people__person-image"
          alt="eth-zurich"
        />

        <div class="people__person-name">
          {{ person.name }}
        </div>

        <div class="people__person-company">
          {{ person.company }}
        </div>

        <div class="people__person-roles">
          <div
            v-for="role in person.role"
            :key="role"
            class="people__person-role"
          >
            {{ role }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Roles } from '~/components/people'
import useContentful from '~/api/useContentful'
import ImageFile from '~/models/ImageFile'

const { people } = useContentful()
const showPeopleWithRole = ref(Roles.ALL)

const selectedPeople = computed(() => {
  if (showPeopleWithRole.value === Roles.ALL) {
    return people.value
  }
  return people.value.filter((person: any) =>
    person?.role?.includes(showPeopleWithRole.value)
  )
})

const handleImageFile = (image: any) => {
  return new ImageFile({
    url: image.url,
    id: image.sys.id,
    lastUpdated: image.sys.publishedAt
  })
}

const headerMenuButtonClasses = (role: string) =>
  `people__header-menu-button ${
    showPeopleWithRole.value === role ? 'people__header-menu-button-active' : ''
  }`
</script>

<style lang="stylus">
.people
  background-color var(--col-bg-secondary)
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  padding 0 var(--app-padding)

.people__title
  color var(--col-primary-action) !important

.people__header
  margin-top 100px
  display flex
  flex-wrap wrap
  align-items center
  max-width 1100px
  width 100%
  justify-content space-between
  gap 30px


@media only screen and (min-width 1120px)
  .people__header
    flex-direction row
    width 100%
    justify-content center

.people__header-menu
  display flex
  flex-wrap wrap
  width 100%
  justify-content center
  gap 0.625rem

.people__header-menu-button
  border-radius 30px
  border 2px solid #ab80b1
  color #ab80b1
  background-color var(--col-bg-secondary)
  padding 0.5625rem 1.375rem
  font-weight 300
  text-transform uppercase
  font-size 0.9375rem
  line-height 1.375rem
  cursor pointer

  &:hover:not(.people__header-menu-button-active)
    border 2px solid var(--col-primary-action)
    color var(--col-primary-action)


.people__header-menu-button-active
  border 2px solid var(--col-primary-action)
  background-color var(--col-primary-action)
  color black
  text-decoration underline
  font-weight 300


.people__list
  margin 100px 0
  justify-content center
  display flex
  max-width var(--section-content-max-width)
  gap 3px
  flex-wrap wrap


.people__person
  width 250px
  height 395px


.people__person-name
  font-size 25px
  line-height 27px
  text-align center
  color white
  width 250px


.people__person-company
  font-size 16px
  line-height 25px
  text-align center
  color white


.people__person-roles
  margin-top 15px
  width 250px
  display flex
  gap 10px
  justify-content center
  flex-wrap wrap


.people__person-role
  font-size 15px
  line-height 25px
  color white
  text-decoration underline


.people__person-image
  width 250px
  height 250px
  margin-bottom 30px
  object-fit cover


.people__person-image-twitter-link
  height 250px
  width 250px
  position absolute
  transition all 0.35s
  background-repeat no-repeat
  background-position center
  z-index 10


.people__person-image-twitter-link:hover
  background-image url("/twitter_white.svg")
  background-color #50f9
  cursor pointer

</style>

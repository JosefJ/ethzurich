import { ref } from 'vue'
import {
  IEthereumZurichSponsorsFields,
  IEthZurichContentFields,
  IEthZurichPeopleFields
} from '~/@types/generated/contentful.d'
const people = ref<IEthZurichPeopleFields[]>()
const content = ref<IEthZurichContentFields>()
const sponsors = ref<IEthereumZurichSponsorsFields[]>()
const isLoadingContentful = ref(false)

export default function useContentful() {
  const fetchContentfulData = async () => {
    const query = `{
      ethZurichPeopleCollection {
        items {
          sys {
            id
          }
          name
          twitter
          role
          company
          profileImage {
            sys {
              publishedAt
              id
            }
            fileName
            url
          }
        }
      }
      ethZurichContentCollection {
        items {
          twitterLink
          telegramLink
          applyToSpeakLink
          applyToSpeakLabel
          applyToHackLink
          applyToHackLabel
          sponsorEthereumZurichLabel
          manifestoText {
            json
          }
          faqWhatToExpectOnSiteLabel
          faqWhatToExpectOnSiteText {
            json
          }
          faqLocationLabel
          faqLocationText {
            json
          }
          faqSleepAndRestLabel
          faqSleepAndRestText {
            json
          }
          faqAboutZurichLabel
          faqAboutZurichText {
            json
          }
          isSectionFaqVisible
        }
      }
      ethereumZurichSponsorsCollection {
        items {
          name
          link
          logo {
            sys {
              publishedAt
              id
            }
            fileName
            url
          }
          tier
        }
      }
    }`

    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${
      import.meta.env.VITE_CONTENTFUL_SPACE_ID
    }/environments/master`

    const fetchOptions = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }

    try {
      isLoadingContentful.value = true
      const response = await fetch(fetchUrl, fetchOptions)
      const JSONResponse = await response.json()

      people.value = JSONResponse.data.ethZurichPeopleCollection.items
      content.value = JSONResponse.data.ethZurichContentCollection.items[0]
      sponsors.value = JSONResponse.data.ethereumZurichSponsorsCollection.items

      isLoadingContentful.value = false
    } catch (error) {
      throw new Error('Could not receive the data from Contentful!')
    }
  }

  return {
    people,
    content,
    sponsors,
    fetchContentfulData
  }
}

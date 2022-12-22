import { ref } from 'vue'

const people = ref()
const content = ref()
const sponsors = ref()
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
      import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/master`

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
      sponsors.value = JSONResponse.data.ethereumZurichSponsorsCollection
        .items

      console.log('content.value: ', content.value)

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

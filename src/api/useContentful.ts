import { ref } from 'vue'

// const contentfulData = ref()
const people = ref()

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
      const response = await fetch(fetchUrl, fetchOptions)
      const JSONResponse = await response.json()

      people.value = JSONResponse.data.ethZurichPeopleCollection.items
    } catch (error) {
      throw new Error('Could not receive the data from Contentful!')
    }
  }

  return {
    people,
    fetchContentfulData
  }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const contentfulManagement = require('contentful-management')

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    // TODO resolve import of VITE_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN
    accessToken: ''
  })

  // TODO resolve import of VITE_CONTENTFUL_SPACE_ID
  // TODO resolve import of VITE_CONTENTFUL_ENVIRONMENT
  return contentfulClient.getSpace('').then((space) => space.getEnvironment(''))
}

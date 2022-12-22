import useContentful from '~/api/useContentful'

const localLinksOrigin = [
  {
    label: 'Manifesto',
    hash: '#Manifesto'
  },
  {
    label: 'Speakers',
    hash: '#Speakers'
  },
  {
    label: 'Sponsors',
    hash: '#Sponsors'
  },
  {
    label: 'FAQ',
    hash: '#FAQ'
  }
]
const { content } = useContentful()

const localLinks = computed(() =>
  content.value?.isSectionFaqVisible
    ? localLinksOrigin
    : localLinksOrigin.filter((link) => link.label !== 'FAQ')
)

export default localLinks

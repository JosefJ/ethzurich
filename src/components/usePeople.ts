export type Person = {
  name: string;
  company: string;
  image?: string;
  roles: string[];
  twitter: string;
}


export const fetchPeopleData = async() => {
  // try {
  //   const imagesDataCsv = await axios.get(imagesNamesAndIds)
  //   imagesDataJson.value = await csvtojson().fromString(imagesDataCsv.data)
  // } catch (e) {
  //   isGoogleDataCorrupted.value = true
  // }

  // const getImageIdByPersonName = (person: PersonRaw) => {
  //   const nameVariantA = `${person['name']}_${person['last name']}`
  //   const nameVariantB = `${person['name']} ${person['last name']}`

  //   const imageId = imagesDataJson.value.find((image: {name: string}) =>
  //     image.name.toLowerCase().includes(nameVariantA.toLowerCase()) ||
  //     image.name.toLowerCase().includes(nameVariantB.toLowerCase()));
  //   if (imageId) {
  //     return imageId.fileId;
  //   }
  //   return null;
  // }

  // const getImageFallback = (person: PersonRaw) => {
  //   const personName = `${person['name']} ${person['last name']}`
  //   const fallbackPerson = peopleFallback.find((person: Person) =>
  //     person.name.toLowerCase().includes(personName.toLowerCase()))
  //   if (fallbackPerson) {
  //     return fallbackPerson.image;
  //   }
  //   return null;
  // }

  // try {
  //   const peopleDataCsv = await axios.get(url)
  //   peopleDataJson.value = await csvtojson().fromString(peopleDataCsv.data)
  // } catch (e) {
  //   isGoogleDataCorrupted.value = true
  // }
  // const arrayOfMustHaveKeys = ['name', 'last name', 'company', 'role']

  // const isDataCorrupted = peopleDataJson.value.some(person => {
  //   const keys = Object.keys(person)
  //   return !arrayOfMustHaveKeys.every(key => keys.includes(key))
  // })

  // if (isDataCorrupted) isGoogleDataCorrupted.value = true

  // const filteredEmptyObjects = peopleDataJson.value.filter(person => {
  //   if (person.name === '' || person['last name'] === '') return false
  //   return true
  // })

  // peopleData.value = (filteredEmptyObjects || []).map((person) => {
  //   return {
  //     name: `${person.name} ${person['last name']}`,
  //     company: person.company,
  //     imageId: getImageIdByPersonName(person),
  //     imageFallback: getImageFallback(person),
  //     roles: person.role.includes(',') ? person.role.split(',') : person.role.split(' '),
  //     twitterLink: person.twitter,
  //     isImageEdited: person.upraveno === 'y'
  //   }
  // }) as Person[]
}

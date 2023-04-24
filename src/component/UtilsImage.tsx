import { places } from './DataContext'

export function getImageUrl(imageId: string): string {
  const place = places.find((p) => p.imageId === imageId)
  if (!place) {
    throw new Error(`Could not find place with imageId ${imageId}`)
  }
  return `images/lindex-kids/${place.imageId}`
}
//   return `https://example.com/images/${place.imageId}`
// }
// export function getImageUrl(place: Place) {
//   return '/lindex-kids/' + place.imageId
// }

// export function getImageUrl(place) {
//   return process.env.PUBLIC_URL + '/lindex-kids/' + place.imageId + '.jpg'
// }

// export function getImageUrl(place) {
//   return 'https://i.imgur.com/' + place.imageId + 'l.jpg'
// }

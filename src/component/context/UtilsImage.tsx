//gap
import { places } from '../DataContext'

export function getImageUrl(imageId: string): string {
  const place = places.find((p) => p.imageId === imageId)
  if (!place) {
    throw new Error(`Could not find place with imageId ${imageId}`)
  }
  return `images/lindex-kids/${place.imageId}`
}

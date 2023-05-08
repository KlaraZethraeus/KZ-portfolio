import { useEffect } from 'react'

type ImageData = {
  name: string
  src: string
  id: string
}

type Props = {
  onImagesLoaded: (images: ImageData[]) => void
}

const FetchPhotoGallery = ({ onImagesLoaded }: Props) => {
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/portfolio-img.json`)
      .then((response) => response.json())
      .then((data) => {
        onImagesLoaded(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [onImagesLoaded])

  return null
}

export default FetchPhotoGallery

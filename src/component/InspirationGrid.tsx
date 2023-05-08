//
import { useState, useMemo, useEffect } from 'react'
// import FetchImageJson from './FetchImageJson'
import '../css/stillebenstyle.css'

interface InspirationGridProps {
  images: {
    id: string
    name: string
    src: string
  }[]
}

type ImageData = {
  id: string
  name: string
  src: string
}

const InspirationGrid = ({ images }: InspirationGridProps) => {
  const [loadedImages, setLoadedImages] = useState(false)
  const [imageData, setImageData] = useState<ImageData[]>([])

  const handleImagesLoaded = useMemo(
    () => (data: ImageData[]) => {
      setLoadedImages(true)
      setImageData(data)
    },
    []
  )

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/stilleben.json`)
      const data = await response.json()
      handleImagesLoaded(data)
    }

    fetchData()
  }, [handleImagesLoaded])

  const memoizedImageData = useMemo(() => imageData, [imageData])

  return (
    <div className="inspiration-grid">
      <div className="grid-container">
        <div className="grid-item item-1">
          <h2>Image Grid Title</h2>
          <p>Image Grid Description</p>
        </div>
        <div className="grid-item item-2">
          {loadedImages &&
            memoizedImageData.map((image: ImageData) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.name}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default InspirationGrid

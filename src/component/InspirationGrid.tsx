//
import { useState } from 'react'
import FetchImageJson from './FetchImageJson'
import '../css/stillebenstyle.css'

interface InspirationGridProps {
  images: {
    id: number
    name: string
    src: string
  }[]
}

type ImageData = {
  id: number
  name: string
  src: string
}

const InspirationGrid = ({ images }: InspirationGridProps) => {
  const [loadedImages, setLoadedImages] = useState(false)
  const [imageData, setImageData] = useState([])

  const handleImagesLoaded = (data: any) => {
    setLoadedImages(true)
    setImageData(data)
  }

  return (
    <div className="inspiration-grid">
      <div className="grid-container">
        <div className="grid-item item-1">
          <h2>Image Grid Title</h2>
          <p>Image Grid Description</p>
        </div>
        <div className="grid-item item-2">
          <FetchImageJson onImagesLoaded={handleImagesLoaded} />
          {loadedImages &&
            imageData.map((image: ImageData) => (
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

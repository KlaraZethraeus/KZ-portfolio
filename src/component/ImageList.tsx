import { createContext, useState, useMemo } from 'react'

interface Image {
  id: number
  name: string
  src: string
}

interface ImageListProps {
  images: Image[]
}

interface ImageProps {
  image: Image
  imageSize: number
}

interface ImageSizeContextValue {
  imageSize: number
  setImageSize: (size: number) => void
}

export const ImageSizeContext = createContext<ImageSizeContextValue>({
  imageSize: 100,
  setImageSize: () => {},
})

function ImageList({ images }: ImageListProps) {
  const [isLarge, setIsLarge] = useState(false)
  const imageSize = useMemo(() => (isLarge ? 150 : 100), [isLarge])

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked)
          }}
        />
        Use large images
      </label>
      <hr />
      <List images={images} imageSize={imageSize} />
    </>
  )
}

function List({ images, imageSize }: ImageListProps & { imageSize: number }) {
  const listItems = images.map((image) => (
    <li key={image.id}>
      <ImageComponent image={image} imageSize={imageSize} />
    </li>
  ))
  return <ul>{listItems}</ul>
}

function ImageComponent({ image, imageSize }: ImageProps) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/${image.src}`}
      alt={image.name}
      width={imageSize}
      height={imageSize}
    />
  )
}

export default ImageList

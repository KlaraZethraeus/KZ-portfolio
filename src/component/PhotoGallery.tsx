import { useState, useMemo, useEffect } from 'react'
import styled from 'styled-components'

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

const GridContainer = styled.div`
  /* display: grid; */
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'header header' 'image1 image2';
    justify-items: center;
    align-items: center;
  }
`

const GridItem = styled.div`
  font-family: Ubuntu;
  font-weight: 500;
  margin-top: 1.2rem;
`

const GridHeader = styled.h2`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  text-align: center;
  font-family: Ubuntu;
  font-weight: 500;


  @media (min-width: 768px) {
    font-size: 1rem;
    margin-top: 0.2rem;
    grid-area: header;
    justify-self: center
    margin-bottom: 4rem;
  }
`

const GridText = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
  text-transform: uppercase;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1rem;
    margin-top: 2.5rem;
    margin-bottom: 3rem;
    grid-column: 1/3;
  }
`

const GridImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-top: 1.2rem;
  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`
const SignAture = styled.footer`
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: -0.5rem;
  text-align: center;
  font-weight: 600;
  grid-column: 1/3;
`

const PhotoGallery = ({ images }: InspirationGridProps) => {
  const [loadedImages, setLoadedImages] = useState(false)
  const [imageData, setImageData] = useState<ImageData[]>([])

  const handleImagesLoaded = (data: ImageData[]) => {
    setLoadedImages(true)
    setImageData(data)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/portfolio-img.json`
      )
      const data = await response.json()
      handleImagesLoaded(data)
    }

    fetchData()
  }, [])
  const memoizedImageData = useMemo(() => imageData, [imageData])

  return (
    <GridContainer>
      <GridHeader>portfolio.</GridHeader>
      {loadedImages &&
        memoizedImageData.map((image: ImageData, index) => (
          <GridItem key={index}>
            <GridImage src={image.src} alt={image.name} />
          </GridItem>
        ))}
      <GridText>thanks.</GridText>
      <SignAture>kz</SignAture>
    </GridContainer>
  )
}

export default PhotoGallery

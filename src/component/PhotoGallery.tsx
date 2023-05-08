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
  grid-template-columns: 1fr;
  display: grid;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

const GridItem = styled.div`
  /* padding: 0.5rem; */
  /* padding-bottom: 1rem; */
  font-family: Ubuntu;
  font-weight: 500;
  margin-top: 1.2rem;
`

const GridHeader = styled.h2`
  font-size: 0.8rem;
  margin-top: -1rem;
  /* margin-bottom: 3rem; */
  text-align: center;
  font-family: Ubuntu;
  font-weight: 500;

  /* border-bottom: solid;
  border-width: 0.2px 5px; */

  @media (min-width: 768px) {
    font-size: 1.5em;
    margin-top: 2.5rem;
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
  }
`

const GridImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-top: 1.2rem;
  /* margin-bottom: -2.5rem; */
`
const SignAture = styled.footer`
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: -0.5rem;
  text-align: center;
  font-weight: 600;
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
      <GridItem>
        <GridHeader>portfolio.</GridHeader>
      </GridItem>
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
// import { useState, useMemo, useEffect } from 'react'
// import styled from 'styled-components'

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   grid-gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `

// const Image = styled.img`
//   display: block;
//   width: 100%;
//   height: auto;
// `

// interface InspirationGridProps {
//   images: {
//     id: number
//     name: string
//     src: string
//   }[]
// }

// type ImageData = {
//   id: number
//   name: string
//   src: string
// }

// const PhotoGallery = ({ images }: InspirationGridProps) => {
//   const [loadedImages, setLoadedImages] = useState(false)
//   const [imageData, setImageData] = useState<ImageData[]>([])

//   const handleImagesLoaded = (data: ImageData[]) => {
//     setLoadedImages(true)
//     setImageData(data)
//   }

//   // Använd useEffect för att hämta data från FetchGraphic-komponenten
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `${process.env.PUBLIC_URL}/portfolio-img.json`
//       )
//       const data = await response.json()
//       handleImagesLoaded(data)
//     }

//     fetchData()
//   }, [])

//   // Använd useMemo för att memoizera imageData och undvika onödiga omladdningar
//   const memoizedImageData = useMemo(() => imageData, [imageData])

//   return (
//     <div className="inspiration-grid">
//       <div className="grid-container">
//         <div className="grid-item item-1">
//           <h2>Welcome</h2>
//           <p>mitch match of work</p>
//         </div>
//         <div className="grid-item item-2">
//           {loadedImages &&
//             memoizedImageData.map((image: ImageData, index) => (
//               <img
//                 key={index}
//                 src={image.src}
//                 alt={image.name}
//                 // style={{ display: 'block', width: '100%', height: 'auto' }}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PhotoGallery

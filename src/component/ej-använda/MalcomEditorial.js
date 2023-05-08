// import { useState, useMemo, useEffect } from 'react'
// import GridContainer from './context/GridContainer'
// import GridProvider from './context/GridProvider'
// import GridLayOut from './context/GridLayOut'
// import styled from 'styled-components'
// interface InspirationGridProps {
//   images: {
//     id: string
//     name: string
//     src: string
//   }[]
// }

// type ImageData = {
//   id: string
//   name: string
//   src: string
// }

// const MalcomEditorial = ({ images }: InspirationGridProps) => {
//   const [loadedImages, setLoadedImages] = useState(false)
//   const [imageData, setImageData] = useState<ImageData[]>([])

//   const memoizedImageData = useMemo(() => imageData, [imageData])

//   useEffect(() => {
//     const fetchImageData = async () => {
//       const imageFiles = images.map((image) => ({
//         id: image.id,
//         name: image.name,
//         src: `/images/malcom/${image.src}`,
//       }))
//       setImageData(imageFiles)
//       setLoadedImages(true)
//     }
//     fetchImageData()
//   }, [images])

//   return (
//     <GridProvider>
//       <GridContainer>
//         <GridLayOut>
//           <div className="inspiration-grid">
//             <div className="grid-container">
//               <div className="grid-item item-2">
//                 {loadedImages &&
//                   memoizedImageData.map((image: ImageData) => (
//                     <img key={image.id} src={image.src} alt={image.name} />
//                   ))}
//               </div>
//               <div className="grid-item item-0">
//                 <Image
//                   className="triliby-street"
//                   src="/images/malcom/malcomlekplats.jpg"
//                   alt="Duablo"
//                 />
//                 <Image
//                   className="triliby-street"
//                   src="/images/malcom/malcomneck.jpg"
//                   alt="close up"
//                 />
//               </div>
//             </div>
//           </div>
//         </GridLayOut>
//       </GridContainer>
//     </GridProvider>
//   )
// }
// const Image = styled.img`
//   margin-top: 1rem;
//   /* margin: 20px; */
// `

// export default MalcomEditorial

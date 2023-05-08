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

// const OdalisqueEditortial = ({ images }: InspirationGridProps) => {
//   const [loadedImages, setLoadedImages] = useState(false)
//   const [imageData, setImageData] = useState<ImageData[]>([])

//   const memoizedImageData = useMemo(() => imageData, [imageData])

//   // const handleImagesLoaded = (data: ImageData[]) => {
//   //   setLoadedImages(true)
//   //   setImageData(data)
//   // }
//   useEffect(() => {
//     const fetchImageData = async () => {
//       const imageFiles = images.map((image) => ({
//         id: image.id,
//         name: image.name,
//         src: `/images/odalisque/${image.src}`,
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
//                 <ImageContainer>
//                   <ImageBigger>
//                     <div>
//                       <Image
//                         className="triliby-street"
//                         src="/images/odalisque/odalisquesvv3.jpg"
//                         alt="Duablo"
//                       />
//                     </div>
//                   </ImageBigger>
//                   <ImageSmaller>
//                     <div>
//                       <Image
//                         className="triliby-street"
//                         src="/images/odalisque/odalisquesvv6.jpg"
//                         alt="close up"
//                       />
//                     </div>
//                   </ImageSmaller>
//                 </ImageContainer>
//               </div>
//             </div>
//           </div>
//         </GridLayOut>
//       </GridContainer>
//     </GridProvider>
//   )
// }

// const ImageContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   grid-gap: 20px;
// `

// const Image = styled.img`
//   display: flex;
//   flex-direction: column;

//   /* margin-top: 1rem; */
//   /* margin: 20px; */
// `

// const ImageSmaller = styled.span`
//   /* margin: 4rem; */
//   margin-top: -2rem;
//   margin-left: 4rem;
// `
// const ImageBigger = styled.span`
//   margin: -2.5rem;
// `
// export default OdalisqueEditortial

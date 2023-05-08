// //updated
// import { useState, useMemo, useCallback, useEffect } from 'react'
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

// const InstituteMagazine = ({ images }: InspirationGridProps) => {
//   const [loadedImages, setLoadedImages] = useState(false)
//   const [imageData, setImageData] = useState<ImageData[]>([])

//   const memoizedImageData = useMemo(() => imageData, [imageData])

//   const handleImagesLoaded = useCallback((data: ImageData[]) => {
//     setImageData(data)
//     setLoadedImages(true)
//   }, [])

//   useEffect(() => {
//     const fetchImageData = async () => {
//       const imageFiles = images.map((image) => ({
//         id: image.id,
//         name: image.name,
//         src: `/images/Institute/${image.src}`,
//       }))
//       handleImagesLoaded(imageFiles)
//     }
//     fetchImageData()
//   }, [images, handleImagesLoaded])

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
//                         src="/images/Institute/institutelaurabohink.jpg"
//                         alt="close up"
//                       />
//                     </div>
//                   </ImageBigger>
//                   <ImageSmaller>
//                     <div>
//                       <Image
//                         className="triliby-street"
//                         src="/images/Institute/institutepaljett.jpg"
//                         alt="close up"
//                       />
//                     </div>
//                   </ImageSmaller>
//                   <ImageSmaller>
//                     <div>
//                       <Image
//                         className="triliby-street"
//                         src="/images/Institute/instutefur.jpg"
//                         alt="Duablo"
//                       />
//                     </div>
//                   </ImageSmaller>
//                   <ImageBigger>
//                     <div>
//                       <Image
//                         className="triliby-street"
//                         src="/images/Institute/institutesofa.jpg"
//                         alt="close up"
//                       />
//                     </div>
//                   </ImageBigger>
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
//   /* grid-template-columns: repeat(2, 1fr) */
//   grid-gap: 5px;
// `

// const Image = styled.img`
//   display: flex;
//   flex-direction: column;

//   /* margin-top: 1rem; */
//   /* margin: 20px; */
// `

// const ImageSmaller = styled.span`
//   /* margin: 4rem; */
//   margin-top: -2rem; */
//   /* margin-left: 4rem;
//   margin: 1.5rem;
// `
// const ImageBigger = styled.span`
//   /* margin: -2rem; */
//   /* padding: -3rem; */
//   /* margin-right: 2rem; */
//   /* align-items: right;
//   width: 100%; */
//   grid-column: 1 / span 1;
// `
// export default InstituteMagazine

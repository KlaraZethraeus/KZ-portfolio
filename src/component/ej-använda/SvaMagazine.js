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

// const SvaMagazine = ({ images }: InspirationGridProps) => {
//   const [loadedImages, setLoadedImages] = useState(false)
//   const [imageData, setImageData] = useState<ImageData[]>([])

//   const memoizedImageData = useMemo(() => imageData, [imageData])

//   const handleImagesLoaded = useCallback((data: ImageData[]) => {
//     setImageData(data)
//     setLoadedImages(true)
//   }, [])

//   // const handleImagesLoaded = (data: ImageData[]) => {
//   //   setLoadedImages(true)
//   //   setImageData(data)
//   // }
//   useEffect(() => {
//     const fetchImageData = async () => {
//       const imageFiles = images.map((image) => ({
//         id: image.id,
//         name: image.name,
//         src: `/images/moa/${image.src}`,
//       }))
//       handleImagesLoaded(imageFiles)
//       // setImageData(imageFiles)
//       // setLoadedImages(true)
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
//                 <img
//                   className="triliby-street"
//                   src="/images/pk-high-end/PLAZAKVINNAVÅRTREND0906web.jpg"
//                   alt="Duablo"
//                 />

//                 {/* <Image
//                   className="triliby-street"
//                   src="/images/moa/Moaacneweb.jpg"
//                   alt="Duablo"
//                 /> */}
//                 <Image
//                   className="triliby-street"
//                   src="/images/moa/Moa2ramweb.jpg"
//                   alt="Duablo"
//                 />
//                 <Image
//                   className="triliby-street"
//                   src="/images/moa/Moa3ramweb.jpg"
//                   alt="Duablo"
//                 />
//                 <Image
//                   className="triliby-street"
//                   src="/images/moa/Moa6ramweb.jpg"
//                   alt="Duablo"
//                 />
//                 <Image
//                   className="triliby-street"
//                   src="/images/moa/Moa4ramweb.jpg"
//                   alt="Duablo"
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
//   margin: -20px;
// `

// export default SvaMagazine

//moa.json
// [{ "id": "0", "name": "", "src": "/images/moa/Moaacneweb.jpg" }
// {"id":"6","name":"","src":"/images/moa/Moa1ramweb.jpg"}

// { "id": "2", "name": "", "src": "/images/moa/Moa5ramweb.jpg" },
// { "id": "3", "name": "", "src": "/images/moa/Moa4ramweb.jpg" },
// { "id": "4", "name": "", "src": "/images/moa/Moa3ramweb.jpg" },
// { "id": "5", "name": "", "src": "/images/moa/Moa2ramweb.jpg" }
// { "id": "1", "name": "", "src": "/images/moa/Moa6ramweb.jpg" }
// ]

// import { useTheme } from 'styled-components'
// import Img from 'react-image'
// import GridContainer from './context/GridContainer'
// import GridItem from './context/GridItem'
// import ThemeContext from './context/ThemeContext'
// import GridContext from './context/GridContext'

// // interface ImageData {
// //   id: string
// //   src: string
// //   colStart: number
// //   colEnd: number
// //   rowStart: number
// //   rowEnd: number
// // }

// const MixedWork = () => {
//   const theme = useTheme()

//   const images = [
//     {
//       id: '0',
//       src: '/images/billy-ss/baiwebstreetview.jpg',
//       colStart: 1,
//       colEnd: 13,
//       rowStart: 1,
//       rowEnd: 3,
//     },
//     {
//       id: '1',
//       src: '/images/billy-ss/baiunderbro.jpg',
//       colStart: 1,
//       colEnd: 7,
//       rowStart: 3,
//       rowEnd: 5,
//     },
//     {
//       id: '2',
//       src: '/images/billy-ss/baitrilibystreet.jpg',
//       colStart: 7,
//       colEnd: 13,
//       rowStart: 3,
//       rowEnd: 5,
//     },
//     {
//       id: '3',
//       src: '/images/billy-ss/baitrilibyprint.jpg',
//       colStart: 1,
//       colEnd: 7,
//       rowStart: 5,
//       rowEnd: 7,
//     },
//     {
//       id: '4',
//       src: '/images/billy-ss/baitrilibyleatherjacket.jpg',
//       colStart: 7,
//       colEnd: 13,
//       rowStart: 5,
//       rowEnd: 7,
//     },
//     {
//       id: '5',
//       src: '/images/billy-ss/baisuede.jpg',
//       colStart: 1,
//       colEnd: 7,
//       rowStart: 7,
//       rowEnd: 9,
//     },
//     {
//       id: '6',
//       src: '/images/billy-ss/bailookbookss13_3529.jpg',
//       colStart: 7,
//       colEnd: 13,
//       rowStart: 7,
//       rowEnd: 9,
//     },
//     {
//       id: '7',
//       src: '/images/billy-ss/bailookbookss13_3490.jpg',
//       colStart: 1,
//       colEnd: 7,
//       rowStart: 9,
//       rowEnd: 11,
//     },
//     {
//       id: '8',
//       src: '/images/billy-ss/baifotboll.jpg',
//       colStart: 7,
//       colEnd: 13,
//       rowStart: 9,
//       rowEnd: 11,
//     },
//     {
//       id: '9',
//       src: '/images/billy-ss/baicloseup.jpg',
//       colStart: 1,
//       colEnd: 7,
//       rowStart: 11,
//       rowEnd: 13,
//     },
//     {
//       id: '10',
//       src: '/images/billy-ss/baibron.jpg',
//       colStart: 7,
//       colEnd: 13,
//       rowStart: 11,
//       rowEnd: 13,
//     },
//   ]

//   return (
//     <GridContainer>
//       {images.map((image) => (
//         <GridItem
//           key={image.id}
//           colStart={image.colStart}
//           colEnd={image.colEnd}
//           rowStart={image.rowStart}
//           rowEnd={image.rowEnd}
//         >
//           <Img
//             src={image.src}
//             alt={`Image ${image.id}`}
//             width={theme.breakpoints.xl / 12}
//           />
//         </GridItem>
//       ))}
//     </GridContainer>
//   )
// }

// export default MixedWork

// // import { useEffect, useState } from 'react'
// // import { useTheme } from 'styled-components'
// // import GridContainer from './context/GridContainer'
// // import GridItem from './context/GridItem'
// // import GridProvider from './context/GridProvider'

// // const MixedWork = () => {
// //   const [images, setImages] = useState([])
// //   const theme = useTheme()

// //   useEffect(() => {
// //     const fetchImages = async () => {
// //       const res = await fetch('/images-json/billy-ss.json')
// //       const data = await res.json()
// //       const formattedData = data.map((image, index) => ({
// //         id: index.toString(),
// //         src: image.src,
// //         colStart: image.colStart,
// //         colEnd: image.colEnd,
// //         rowStart: image.rowStart,
// //         rowEnd: image.rowEnd,
// //       }))
// //       setImages(formattedData)
// //     }
// //     fetchImages()
// //   }, [])

// //   return (
// //     <GridContainer>
// //       {images.map((image) => (
// //         <GridItem
// //           key={image.id}
// //           colStart={image.colStart}
// //           colEnd={image.colEnd}
// //           rowStart={image.rowStart}
// //           rowEnd={image.rowEnd}
// //         >
// //           <Image
// //             src={image.src}
// //             alt={`Image ${image.id}`}
// //             width={theme.breakpoints.xl / 12}
// //           />
// //         </GridItem>
// //       ))}
// //     </GridContainer>
// //   )
// // }
// import { useState } from 'react'
// import FetchBillyAw from './FetchBillyAw'
// import '../css/BillyandI.css'
// import GridContainer from './context/GridContainer'
// import GridProvider from './context/GridProvider'
// import GridLayOut from './context/GridLayOut'

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

// const BillyAwWork = ({ images }: InspirationGridProps) => {
//   const [loadedImages, setLoadedImages] = useState(false)
//   const [imageData, setImageData] = useState(images)

//   const handleImagesLoaded = (data: any) => {
//     setLoadedImages(true)
//     setImageData(data)
//   }

//   return (
//     <GridProvider>
//       <GridContainer>
//         <GridLayOut>
//           <div className="inspiration-grid">
//             <div className="grid-container">
//               <div className="grid-item item-1">
//                 <h2>billy and I</h2>
//                 <p>Autum Winter</p>
//               </div>
//               <FetchBillyAw onImagesLoaded={handleImagesLoaded} />
//               {loadedImages &&
//                 imageData.map((image: ImageData) => (
//                   <img key={image.id} src={image.src} alt={image.name} />
//                 ))}
//             </div>
//             <div className="grid-item item-2">
//               <img src={imageData[1].src} alt={imageData[1].name} />
//               <img src={imageData[2].src} alt={imageData[2].name} />
//             </div>
//             {/* <FetchBillyAw onImagesLoaded={handleImagesLoaded} />
//                 {loadedImages &&
//                   imageData.map((image: ImageData) => (
//                     <img
//                       key={image.id}
//                       src={image.src}
//                       alt={image.name}
//                       // style={{ display: 'block', width: '100%', height: 'auto' }}
//                     />
//                   ))} */}

//             <div className="grid-item item-3">
//               <img src={imageData[3].src} alt={imageData[3].name} />
//               <img src={imageData[4].src} alt={imageData[4].name} />
//             </div>
//           </div>
//         </GridLayOut>
//       </GridContainer>
//     </GridProvider>
//   )
// }

// export default BillyAwWork

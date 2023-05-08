// updated
// import { useState, useMemo, useEffect } from 'react'
// import FetchBillyAw from './FetchBillyAw'
// import '../css/BillyandIAw.css'
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
//   const [imageData, setImageData] = useState<ImageData[]>([])

//   const handleImagesLoaded = useMemo(
//     () => (data: ImageData[]) => {
//       setLoadedImages(true)
//       setImageData(data)
//     },
//     []
//   )

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `${process.env.PUBLIC_URL}/images-json/billy-aw.json`
//       )
//       const data = await response.json()
//       handleImagesLoaded(data)
//     }

//     fetchData()
//   }, [handleImagesLoaded])

//   const memoizedImageData = useMemo(() => imageData, [imageData])

//   return (
//     // <GridProvider>
//     //   <GridContainer>
//     //     <GridLayOut>
//     <div className="inspiration-grid">
//       <div className="grid-container">
//         {/* <div className="grid-item item-1">
//                 <h2>billy and I</h2>
//                 <p>Autum Winter</p>
//               </div> */}
//         <div className="grid-item item-0">
//           {/* <img
//             className="triliby-street"
//             src="/images/duablo.jpg"
//             alt="Duablo"
//           /> */}
//           <img
//             className="triliby-street"
//             src="/images/billy-aw13.jpg"
//             alt="Duablo"
//           />
//         </div>
//         {/* <div className="grid-item item-2">
//           {loadedImages &&
//             memoizedImageData.map((image: ImageData) => (
//               <img
//                 key={image.id}
//                 src={image.src}
//                 alt={image.name}
//                 // style={{ display: 'block', width: '100%', height: 'auto' }}
//               />
//             ))}
//         </div> */}
//       </div>
//     </div>
//     /* </GridLayOut>
//       </GridContainer>
//     </GridProvider> */
//   )
// }

// export default BillyAwWork

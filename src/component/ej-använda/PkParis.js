// //updated
// // import { useState, useMemo, useEffect } from 'react'
// import '../css/BillyandIAw.css'
// import GridContainer from './context/GridContainer'
// import GridProvider from './context/GridProvider'
// import GridLayOut from './context/GridLayOut'

// // interface InspirationGridProps {
// //   images: {
// //     id: string
// //     name: string
// //     src: string
// //   }[]
// // }

// // type ImageData = {
// //   id: string
// //   name: string
// //   src: string
// // }

// const PkParis = () => {
//   return (
//     <GridProvider>
//       <GridContainer>
//         <GridLayOut>
//           <div className="inspiration-grid">
//             <div className="grid-container">
//               <div className="grid-item item-0">
//                 <img
//                   className="triliby-street"
//                   src={`${process.env.PUBLIC_URL}/images/plaza-paris/pkpariswindow.jpg`}
//                   alt="Duablo"
//                 />
//               </div>
//               <div className="grid-item item-2">
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/plaza-paris/jpg/image1.jpg`}
//                   alt=""
//                 />
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/plaza-paris/jpg/image2.jpg`}
//                   alt=""
//                 />
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/plaza-paris/jpg/image3.jpg`}
//                   alt=""
//                 />
//                 {/* Add more images here */}
//               </div>
//             </div>
//           </div>
//         </GridLayOut>
//       </GridContainer>
//     </GridProvider>
//   )
// }

// const PkParis = ({ images }: InspirationGridProps) => {
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
//         `${process.env.PUBLIC_URL}/images-json/plaza-paris.json`
//       )
//       const data = await response.json()
//       handleImagesLoaded(data)
//     }

//     fetchData()
//   }, [handleImagesLoaded])

//   const memoizedImageData = useMemo(() => imageData, [imageData])

//   return (
//     <GridProvider>
//       <GridContainer>
//         <GridLayOut>
//           <div className="inspiration-grid">
//             <div className="grid-container">
//               <div className="grid-item item-0">
//                 <img
//                   className="triliby-street"
//                   src="/images/plaza-paris/pkpariswindow.jpg"
//                   alt="Duablo"
//                 />
//               </div>
//               <div className="grid-item item-2">
//                 {loadedImages &&
//                   memoizedImageData.map((image: ImageData) => (
//                     <img
//                       key={image.id}
//                       src={image.src}
//                       alt={image.name}
//                       // style={{ display: 'block', width: '100%', height: 'auto' }}
//                     />
//                   ))}
//               </div>
//             </div>
//           </div>
//         </GridLayOut>
//       </GridContainer>
//     </GridProvider>
//   )
// }

// export default PkParis

// json: { "id": "1", "name": "", "src": "/images/plaza-paris/pkpariswindow.jpg" },
// { "id": "7", "name": "", "src": "/images/plaza-paris/pkparisapart.jpg" },
// { "id": "5", "name": "", "src": "/images/plaza-paris/pkparisorange.jpg" },

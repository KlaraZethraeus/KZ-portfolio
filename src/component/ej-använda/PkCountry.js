// import { useState, useMemo, useEffect } from 'react'
// // import FetchBillyAw from './FetchBillyAw'
// import '../css/BillyandIAw.css'
// // import GridContainer from './context/GridContainer'
// // import GridProvider from './context/GridProvider'
// // import GridLayOut from './context/GridLayOut'

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

// const PkCountry = ({ images }: InspirationGridProps) => {
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
//         `${process.env.PUBLIC_URL}/images-json/slätt.json`
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
//           <img
//             className="triliby-street"
//             src="/images/slätt/pkledberbal.jpg"
//             alt="Duablo"
//           />
//         </div>
//         <div className="grid-item item-2">
//           {loadedImages &&
//             memoizedImageData.map((image: ImageData) => (
//               <img
//                 key={image.id}
//                 src={image.src}
//                 alt={image.name}
//                 // style={{ display: 'block', width: '100%', height: 'auto' }}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//     //     </GridLayOut>
//     //   </GridContainer>
//     // </GridProvider>
//   )
// }

// export default PkCountry

//fiskhus/ institute
// { "id": "11", "name": "", "src": "/images/slätt/institutelaurabohink.jpg" }

// {"id":"9","name":"","src":"/images/slätt/pkledberbal.jpg"},
// { "id": "6", "name": "", "src": "/images/slätt/pkledbergblue.jpg" },

// { "id": "3", "name": "", "src": "/images/slätt/pkledbergplaywood.jpg" },

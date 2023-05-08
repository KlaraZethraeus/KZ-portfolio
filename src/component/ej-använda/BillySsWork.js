// import { useState, useMemo, useEffect } from 'react'
// import FetchBillySs from './FetchBillySs'
// import '../css/BillyandISs.css'
// import GridContainer from './context/GridContainer'
// import GridProvider from './context/GridProvider'
// import GridLayOut from './context/GridLayOut'
// import '../css/BillyandIAw.css'

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

// const BillySsWork = ({ images }: InspirationGridProps) => {
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
//         `${process.env.PUBLIC_URL}/images-json/billy-ss.json`
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
//                 <p>spring summer</p>
//               </div> */}
//         <div className="grid-item item-0">
//           <img
//             className="triliby-street"
//             src="/images/billy-ss1.jpg"
//             alt="ss13"
//           />
//         </div>
//         <div className="grid-item item-0">
//           <img
//             className="triliby-street"
//             src="/images/billy-ss2.jpg"
//             alt="ss13"
//           />
//         </div>
//         <div className="grid-item item-0">
//           <img
//             className="triliby-street"
//             src="/images/billy-ss3.jpg"
//             alt="ss13"
//           />
//         </div>
//         <div className="grid-item item-2">
//           {loadedImages &&
//             memoizedImageData.map((image: ImageData) => (
//               <img
//                 key={image.id}
//                 src={image.src}
//                 alt={image.name}
//                 // }
//               />
//               // </div>
//             ))}
//         </div>
//         <div className="grid-item item-0">
//           <img
//             className="street-vue"
//             src="/images/billy-ss/baiwebstreetview.jpg"
//             alt="ss13"
//           />
//         </div>
//       </div>
//     </div>
//     //     </GridLayOut>
//     //   </GridContainer>
//     // </GridProvider>
//   )
// }

// export default BillySsWork

// { "id": "2", "name": "", "src": "/images/billy-ss/baitrilibystreet.jpg" },

// { "id": "0", "name": "", "src": "/images/billy-ss/baiwebstreetview.jpg" },

// { "id": "5", "name": "", "src": "/images/billy-ss/baisuede.jpg" },
// { "id": "3", "name": "", "src": "/images/billy-ss/baitrilibyprint.jpg" },

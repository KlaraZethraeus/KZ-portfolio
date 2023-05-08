// //updated
// import { useState, useMemo, useEffect } from 'react'
// // import FetchBillyAw from './FetchBillyAw'
// import '../css/BillyandIAw.css'
// // import GridContainer from './context/GridContainer'
// // import GridProvider from './context/GridProvider'
// // import GridLayOut from './context/GridLayOut'
// import styled from 'styled-components'

// const skills = [
//   'Louis Vuiton',
//   'Alexander Mqeen',
//   'Bottega Veneta',
//   'Sport Max',
//   'Mullberry',
//   'Saint Lourant',
// ]
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

// const PkHighEnd = ({ images }: InspirationGridProps) => {
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
//         `${process.env.PUBLIC_URL}/images-json/pk-high-end.json`
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
//         <div className="grid-item item-0">
//           <img
//             className="triliby-street"
//             src="/images/pk-high-end/PLAZAKVINNAVÅRTREND0906web.jpg"
//             alt="Duablo"
//           />
//         </div>
//         <div className="grid-item item-2">
//           {loadedImages &&
//             memoizedImageData.map((image: ImageData) => (
//               <img key={image.id} src={image.src} alt={image.name} />
//             ))}
//         </div>
//         <div className="grid-item item-big">
//           <img
//             className="triliby-street"
//             src="/images/pk-high-end/PLAZAKVINNAVÅRTREND1118web.jpg"
//             alt="Duablo"
//           />
//           <img
//             className="triliby-street"
//             src="/images/pk-high-end/PLAZAKVINNAVÅRTREND0644web.jpg"
//             alt="Duablo"
//           />
//           <TableHeading>Thanks to:</TableHeading>
//           <Table>
//             <tbody>
//               <TableRow>
//                 <TableColumn>
//                   {skills.slice(0, 6).map((skill) => (
//                     <ColumnText key={skill}>{skill}</ColumnText>
//                   ))}
//                 </TableColumn>
//               </TableRow>
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </div>
//     //     </GridLayOut>
//     //   </GridContainer>
//     // </GridProvider>
//   )
// }

// const Table = styled.table`
//   margin-top: 7rem;
//   /* border-collapse: collapse; */
//   width: 100%;
//   margin-bottom: 1.5rem;
//   /* margin: 1 0 0.8rem 0; */
// `
// const TableHeading = styled.h3`
//   font-size: 1rem;
//   font-weight: 300;
// `
// const TableRow = styled.tr`
//   &:nth-child(even) {
//   }
// `

// const TableColumn = styled.td`
//   /* margin-top: 7rem; */
//   /* text-align: left; */
//   /* padding: 1rem 1rem 0.4rem 0; */
// `
// const ColumnText = styled.p`
//   font-size: 0.8rem;
//   /* margin-bottom: 0.2rem; */
//   line-height: 1.2rem;
//   letter-spacing: 0.02rem;
//   /* margin-top: 0.5rem; */
// `

// export default PkHighEnd

// {
// "id": "2",
// "name": "",
// "src": "/images/pk-high-end/PLAZAKVINNAVÅRTREND0906web.jpg"
// },

// {
//   "id": "4",
//   "name": "",
//   "src": "/images/pk-high-end/PLAZAKVINNAVÅRTREND0644web.jpg"
// }

// import { useState, useContext } from 'react'
// import { places } from './DataContext'
// import { getImageUrl } from './UtilsImage'
// import { ImageSizeContext } from './CreateContext'

// interface Place {
//   id: number
//   name: string
//   description: string
//   imageId: string
// }

// export default function App() {
//   const [isLarge, setIsLarge] = useState(false)
//   const imageSize = isLarge ? 150 : 100
//   return (
//     <ImageSizeContext.Provider value={imageSize}>
//       <label>
//         <input
//           type="checkbox"
//           checked={isLarge}
//           onChange={(e) => {
//             setIsLarge(e.target.checked)
//           }}
//         />
//       </label>
//       <hr />
//       <List />
//     </ImageSizeContext.Provider>
//   )
// }

// function List() {
//   const listItems = places.map((place: Place) => (
//     <li key={place.id}>
//       <PlaceComponent place={place} />
//     </li>
//   ))
//   return <ul>{listItems}</ul>
// }

// function PlaceComponent({ place }: { place: Place }) {
//   return (
//     <>
//       <PlaceImage place={place} />
//       <p>
//         <b>{place.name}</b>
//         {': ' + place.description}
//       </p>
//     </>
//   )
// }

// export function PlaceImage({ place }: { place: Place }) {
//   const imageSize = useContext(ImageSizeContext)
//   return (
//     <img
//       src={getImageUrl(place.imageId)}
//       alt={place.name}
//       width={imageSize}
//       height={imageSize}
//     />
//   )
// }
// import { useState, useContext } from 'react'
// import { places } from './DataContext'
// import { getImageUrl } from './UtilsImage'
// import { ImageSizeContext } from './CreateContext'

// interface Place {
//   id: number
//   name: string
//   description: string
//   imageId: string
// }
// export default function App() {
//   const [isLarge, setIsLarge] = useState(false)
//   const imageSize = isLarge ? 150 : 100
//   return (
//     <ImageSizeContext.Provider value={imageSize}>
//       <label>
//         <input
//           type="checkbox"
//           checked={isLarge}
//           onChange={(e) => {
//             setIsLarge(e.target.checked)
//           }}
//         />
//         Use large images
//       </label>
//       <hr />
//       <List />
//     </ImageSizeContext.Provider>
//   )
// }

// function List() {
//   const listItems = places.map((place: Place) => (
//     <li key={place.id}>
//       <Placecomponent place={place} />
//     </li>
//   ))
//   return <ul>{listItems}</ul>
// }

// function Placecomponent({ place }: { place: Place }) {
//   return (
//     <>
//       <PlaceImage place={place} />
//       <p>
//         <b>{place.name}</b>
//         {': ' + place.description}
//       </p>
//     </>
//   )
// }

// function PlaceImage({ place }: { place: Place }) {
//   const imageSize = useContext(ImageSizeContext)
//   return (
//     <img
//       src={getImageUrl(place)}
//       alt={place.name}
//       width={imageSize}
//       height={imageSize}
//     />
//   )
// }

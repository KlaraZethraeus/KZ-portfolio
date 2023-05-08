// import { useEffect } from 'react'

// type ImageData = {
//   name: string
//   src: string
//   id: string
// }

// type Props = {
//   onImagesLoaded: (images: ImageData[]) => void
// }

// const FetchBillyAw = ({ onImagesLoaded }: Props) => {
//   useEffect(() => {
//     fetch(`${process.env.PUBLIC_URL}/billy-aw.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         onImagesLoaded(data)
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   }, [onImagesLoaded])

//   return null
// }

// export default FetchBillyAw
// type ImageData = {
//   name: string
//   src: string
//   id: string
// }

// type Props = {
//   onImagesLoaded: (images: ImageData[]) => void
// }

// const FetchBillyAw = ({ onImagesLoaded }: Props) => {
//   useEffect(() => {
//     fetch(`${process.env.PUBLIC_URL}/billy-aw.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         onImagesLoaded(data)
//       })
//       .catch((error) => {
//         console.error(error)
//       })
//   })

//   return null
// }

// export default FetchBillyAw

// import { useEffect } from 'react'

// type ImageData = {
//   name: string
//   src: string
//   id: string
// }

// type Props = {
//   onImagesLoaded: (images: ImageData[]) => void
// }

// const FetchBillySs = ({ onImagesLoaded }: Props) => {
//   useEffect(() => {
//     fetch(`${process.env.PUBLIC_URL}/images-json/billy-ss.json`)
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

// export default FetchBillySs

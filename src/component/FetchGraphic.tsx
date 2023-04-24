//fetchar data och skickar vidare till graphicimages
import { useEffect } from 'react'

type ImageData = {
  name: string
  src: string
  id: string
}

type Props = {
  onImagesLoaded: (images: ImageData[]) => void
}

const FetchGraphic = ({ onImagesLoaded }: Props) => {
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/graphic-img.json`)
      .then((response) => response.json())
      .then((data) => {
        onImagesLoaded(data)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return null
}

export default FetchGraphic

// import { useEffect } from 'react'

// // type ImageData = {
// //   name: string
// //   src: string
// //   id: string
// // }

// // type Props = {
// //   onImagesLoaded: (images: ImageData[]) => void
// // }

// const FetchGraphic = () => {
//   useEffect(() => {
//     console.log('Fetching data from server')
//   }, [])

//   return null
// }

// export default FetchGraphic

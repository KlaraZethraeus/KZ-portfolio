//useeffect anropar stilleben med fetch och returnerar promise, callback med props som gör att bilderna visas i annan komponent
import { useEffect } from 'react'

type ImageData = {
  name: string
  src: string
  id: string
}

type Props = {
  onImagesLoaded: (images: ImageData[]) => void
}

const FetchImageJson = ({ onImagesLoaded }: Props) => {
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/stilleben.json`)
      .then((response) => response.json())
      .then((data) => {
        onImagesLoaded(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [onImagesLoaded])

  return null
}

export default FetchImageJson

// import { useEffect } from 'react'

// type ImageData = {
//   name: string
//   src: string
//   id: number
// }

// type Props = {
//   onImagesLoaded: (images: ImageData[]) => void
// }

// const FetchImageJson = ({ onImagesLoaded }: Props) => {
//   useEffect(() => {
//     fetch(`${process.env.PUBLIC_URL}/600x800-img.json`)
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

// export default FetchImageJson

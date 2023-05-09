import { useState, useMemo, useEffect } from 'react'
import '../css/stillebenstyle.css'

interface InspirationGridProps {
  images: {
    id: number
    name: string
    src: string
  }[]
}

type ImageData = {
  id: number
  name: string
  src: string
}

const GraphicImages = ({ images }: InspirationGridProps) => {
  const [loadedImages, setLoadedImages] = useState(false)
  const [imageData, setImageData] = useState<ImageData[]>([])

  const handleImagesLoaded = (data: ImageData[]) => {
    setLoadedImages(true)
    setImageData(data)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.PUBLIC_URL}/graphic-img.json`)
      const data = await response.json()
      handleImagesLoaded(data)
    }

    fetchData()
  }, [])

  const memoizedImageData = useMemo(() => imageData, [imageData])

  return (
    <div className="inspiration-grid">
      <div className="grid-container">
        <div className="grid-item item-1">
          <h2>Welcome</h2>
          <p>Image Grid Description</p>
        </div>
        <div className="grid-item item-2">
          {loadedImages &&
            memoizedImageData.map((image: ImageData, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.name}
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default GraphicImages
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchImages, selectImages, selectImagesLoading } from '../ReduxStore'

// interface InspirationGridProps {
//   images: {
//     id: number
//     name: string
//     src: string
//   }[]
// }

// interface ImageData {
//   id: string
//   name: string
//   src: string
// }

// const GraphicImages = ({ images }: InspirationGridProps) => {
//   const dispatch: Dispatch<any> = useDispatch()
//   const imageData: ImageData[] = useSelector(selectImages) ?? []
//   const loading: boolean = useSelector(selectImagesLoading)

//   useEffect(() => {
//     const fetchImagesAction = fetchImages()
//     dispatch(fetchImagesAction)
//   }, [dispatch])

//   return (
//     <div className="inspiration-grid">
//       <div className="grid-container">
//         <div className="grid-item item-1">
//           <h2>Welcome</h2>
//           <p>Image Grid Description</p>
//         </div>
//         <div className="grid-item item-2">
//           {loading && <p>Loading...</p>}
//           {imageData.length === 0 && !loading && <p>No images found</p>}
//           {imageData.map((image: ImageData) => (
//             <img
//               key={image.id}
//               src={image.src}
//               alt={String(image.name)}
//               style={{ display: 'block', width: '100%', height: 'auto' }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GraphicImages

// import { useQuery } from 'react-query'

// interface InspirationGridProps {
//   images: {
//     id: number
//     name: string
//     src: string
//   }[]
// }

// type ImageData = {
//   id: number
//   name: string
//   src: string
// }

// const GraphicImages = ({ images }: InspirationGridProps) => {
//   const [loadedImages, setLoadedImages] = useState(false)
//   const [imageData, setImageData] = useState<ImageData[]>([])

//   useEffect(() => {
//     fetch(`${process.env.PUBLIC_URL}/graphic-img.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         setImageData(data)
//         setLoadedImages(true)
//         console.log(imageData)
//       })

//       .catch((error) => {
//         console.error(error)
//       })
//   }, [imageData])

//   return (
//     <div className="inspiration-grid">
//       <div className="grid-container">
//         <div className="grid-item item-1">
//           <h2>Welcome</h2>
//           <p>Image Grid Description</p>
//         </div>
//         <div className="grid-item item-2">
//           {loadedImages &&
//             imageData.map((image: ImageData) => (
//               <img
//                 key={image.id}
//                 src={image.src}
//                 alt={image.name}
//                 style={{ display: 'block', width: '100%', height: 'auto' }}
//               />
//             ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GraphicImages

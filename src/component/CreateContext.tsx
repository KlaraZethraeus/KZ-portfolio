import { createContext } from 'react'

export const ImageSizeContext = createContext(500)

// -ImageSize,

// -DataContext, (places-array från Data), (skapar PlaceComponent= plats, bild, text), PlaceImage= visar bild och stl från ImageContext, som kommer från ImageSize,

// CreateContext/ ImageSizeContext= en context som bestämmer stl på bilden,
// contexten anvnds sedan i PlaceImage,

// -UtilsImage, imageId=argument och letar genom objekten i places i DC,

// AboutMe,
// App,

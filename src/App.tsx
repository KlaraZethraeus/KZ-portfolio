import React, { createContext } from 'react'
import {
  createHashRouter,
  Outlet,
  RouterProvider,
  // useParams,
} from 'react-router-dom'
import { GapProvider } from './component/context/GapProvider'
import { GridImages } from './component/GridImages'
import { GapButton } from './component/GapButton'
import AboutMe from './component/AboutMe'
import InspirationGrid from './component/InspirationGrid'
import PortFolio from './component/PortFolio'
import HeaderMobile from './component/HeaderMobile'
import { SignupProvider } from './component/context/SignupContext'
import PhotoGallery from './component/PhotoGallery'
import ContactMe from './component/ContactMe'
// import FooterSignature from './component/FooterSignature'

export const ImageSizeContext = createContext(500)
// export const setImageSizeContext = createContext(() => {})
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

function Root() {
  return (
    <>
      <HeaderMobile />
      <Outlet />
      {/* <FooterSignature signupLink="/about#signup" /> */}
    </>
  )
}

function App() {
  const router = createHashRouter([
    {
      children: [
        {
          element: <PhotoGallery images={[]} />,
          path: '/',
        },
        { element: <PortFolio />, path: '/portfolio' },

        {
          element: <AboutMe />,
          path: '/aboutme',
        },
        {
          element: <ContactMe />,
          path: '/contactme',
        },
        {
          element: <InspirationGrid images={[]} />,
          path: '/inspiration',
        },
        {
          element: (
            <SignupProvider>
              <GapProvider>
                <GridImages />
                <GapButton />
              </GapProvider>
            </SignupProvider>
          ),
          path: '/gridImages',
        },
        // {
        //   element: <ImagePortfolio />,
        //   path: '/ImagePortfolio',
        // },

        // useContext {
        //   element: (
        //     <ImageSizeContext.Provider value={imageSize}>
        //       <AboutMe />
        //     </ImageSizeContext.Provider>
        //   ),
        //   path: '/aboutme',
        // },
        //useParams
        // {
        //   element: <MySignupForm userName={useParams().userName} />,
        //   path: '/about/:userName',
        // },
      ],
      element: <Root />,
    },
  ])

  return <RouterProvider router={router} />
}
export default App

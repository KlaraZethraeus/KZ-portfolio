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
// import ImagePortfolio from './component/ImagePortfolio'
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
          element: (
            // <div>
            //   <ToastContainer
            //     className="foo"
            //     style={{
            //       width: '20rem',
            //       height: '10rem',
            //       fontSize: '1rem',
            //       marginTop: '1.5rem',
            //       padding: '1rem',
            //       // transitionDuration: '1s',
            //       lineHeight: '1.5',
            //       fontStyle: 'italic',
            //       fontFamily: 'Arial, sans-serif',
            //       // background: '#cad9d7',
            //       // boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            //     }}
            //     position="bottom-right"
            //     autoClose={4000}
            //     hideProgressBar={true}
            //     closeOnClick
            //     icon={false}
            //   />
            <ContactMe />
            // </div>
          ),
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

// import { useEffect, useState } from 'react'
// import styled, { createGlobalStyle } from 'styled-components'
// import { ImageSizeContext } from './component/CreateContext'
// import MySignupForm from './component/MySignupForm'
// import { FeedbackProvider } from './component/FeedbackProvider'
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
import NavigationB from './component/NavigationB'
import PortFolio from './component/PortFolio'
import { createContext } from 'react'

export const ImageSizeContext = createContext(500)
// export const setImageSizeContext = createContext(() => {})

function Root() {
  return (
    <>
      <NavigationB />
      <Outlet />
    </>
  )
}
// function About() {
//   const { userName } = useParams()

//   return <div>Hello {userName}!</div>
// }

function App() {
  // const [isLarge, setIsLarge] = useState(false)
  // const imageSize = isLarge ? 150 : 100

  const router = createHashRouter([
    {
      children: [
        {
          element: (
            <GapProvider>
              <GridImages />
              <GapButton />
            </GapProvider>
          ),
          path: '/',
        },
        { element: <PortFolio />, path: '/portfolio' },
        { element: <AboutMe />, path: '/aboutme' },

        {
          element: (
            <InspirationGrid
              images={
                [
                  /*array of images to display here*/
                ]
              }
            />
          ),
          path: '/inspiration',
        },

        // {
        //   element: (
        //     <ImageSizeContext.Provider value={imageSize}>

        //       <AboutMe />
        //     </ImageSizeContext.Provider>
        //   ),
        //   path: '/aboutme',
        // },
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

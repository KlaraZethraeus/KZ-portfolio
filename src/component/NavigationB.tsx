import { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'
import KzLogo from './KzLogo'
import DropUP from './DropUP'
// interface DropUpProps {
//   isOpen: boolean
//   handleToggle: () => void
// }

const NavigationB = () => {
  const [windowDimension, setWindowDimension] = useState(0)

  const [desktopDimension, setDesktopDimension] = useState(0)
  useEffect(() => {
    setDesktopDimension(window.innerWidth)
  }, [])
  useEffect(() => {
    function handleResize() {
      setDesktopDimension(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handleToggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    setWindowDimension(window.screen.width)
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.screen.width)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowDimension <= 430
  const isDesktop = desktopDimension >= 430

  return (
    <Styles.Wrapper>
      <CSSReset />

      {isMobile ? (
        <MobileNavbar.Wrapper>
          <MobileNavbar.Logo>
            <NavLink to="/">
              <KzLogo />
            </NavLink>
          </MobileNavbar.Logo>
          <MobileNavbar.Items>
            <MobileNavbar.Item>
              <NavLink onClick={handleToggle} to="/portfolio">
                Portfolio
              </NavLink>
              <DropUP
                isOpen={isOpen}
                education="Education"
                work="Work"
                skills="Skills"
              />
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              <NavLink to="/inspiration">Inspiration</NavLink>
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              <NavLink to="/aboutme">K.Z.</NavLink>
            </MobileNavbar.Item>
          </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
      ) : isDesktop ? (
        <Navbar.Wrapper>
          <Navbar.Logo>
            <NavLink to="/">
              <KzLogo />
            </NavLink>
          </Navbar.Logo>
          <Navbar.Items>
            <Navbar.Item>
              <NavLink to="/portfolio">Portfolio</NavLink>
              {/* <DropUp isOpen={isOpen} handleToggle={handleToggle} /> */}
            </Navbar.Item>
            <Navbar.Item>
              <NavLink to="/inspiration">Inspiration</NavLink>
            </Navbar.Item>
            <Navbar.Item>
              <NavLink to="/aboutme">K.Z.</NavLink>
            </Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
      ) : null}
    </Styles.Wrapper>
  )
}

const Styles = {
  Wrapper: styled.main`
    /* display: flex; */
  `,
}

const Navbar = {
  Wrapper: styled.nav`
     display: flex;

  /* flex: 1;
    align-self: flex-start;
    padding: 1.5rem 4rem;
    display: flex;
    justify-content: space-between; */
    /* align-items: center;
    background-color: #82abb0;
    .active {
      color: #471d37;
      font-weight: bold;
    }

    a {
      color: #213727;
      text-decoration: none;

      &:hover {
        color: #471d37;
        font-weight: bold;
      }
    } */ */
  `,

  Logo: styled.div`
    /* position: absolute;
    width: 2rem;
    height: 2rem; */
  `,
  Items: styled.ul`
    /* display: flex;
    list-style: none;
    margin-left: 15rem; */
  `,
  Item: styled.li`
    /* padding: 0 2rem;
    cursor: pointer;
    //ny 22 april
    position: relative; */
  `,
}

const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    /* position: fixed;
    width: 100vw;
    bottom: 0;
    justify-content: center; */
    /* background-color: #afc4af; */
    /* background-color: #82abb0;
    .active {
      color: #471d37;
      font-weight: bold;
    }

    a {
      color: #213727;
      text-decoration: none;

      &:hover {
        color: #471d37;
      }
    } */
  `,

  Logo: styled.div`
    /* position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 17rem; */
  `,
  Items: styled(Navbar.Items)`
    /* flex: 1;
    /* padding: 1rem; */
    display: flex;
    margin-left: 0.5rem;
    justify-content: space-around; */
  `,
  Item: styled(Navbar.Item)`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5rem;
    font-size: 1.2rem; */
  `,
}

const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }
  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`

export default NavigationB
//ny 22 apr

// const DropUp = ({ isOpen, handleToggle }: DropUpProps) => {
//   const dropUpRef = useRef<HTMLDivElement>(null)
//   const navLinkRef = useRef<HTMLAnchorElement>(null)

//   useEffect(() => {
//     if (isOpen && dropUpRef.current && navLinkRef.current) {
//       const navLinkRect = navLinkRef.current.getBoundingClientRect()
//       const dropUpRect = dropUpRef.current.getBoundingClientRect()

//       const newPosition =
//         navLinkRect.top - dropUpRect.height - navLinkRect.height / 2

//       dropUpRef.current.style.top = newPosition + 'px'
//     }
//   }, [isOpen])
//   return (
//     <>
//       <DropUpContainer ref={dropUpRef} isOpen={isOpen}>
//         <DropUpContent isOpen={isOpen}>
//           <h3>Portfolio</h3>
//           <p>Item 1</p>
//           <p>Item 2</p>
//           <p>Item 3</p>
//         </DropUpContent>
//       </DropUpContainer>
//       <DropUpArrow isOpen={isOpen} onClick={handleToggle} />
//     </>
//   )
// }

// interface DropUpContainerProps {
//   isOpen: boolean
// }

// const DropUpContainer = styled.div<DropUpContainerProps>`
//   position: relative;
//   top: -150px;
//   left: 0;
//   display: ${(props) => (props.isOpen ? 'block' : 'none')};
//   background-color: white;
//   padding: 16px;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
// `

// const DropUpContent = styled.div<DropUpContainerProps>`
//   position: absolute;
//   top: -150px;
//   left: 0;
//   display: ${(props) => (props.isOpen ? 'block' : 'none')};
//   background-color: white;
//   padding: 16px;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
// `
// interface DropUpArrowProps {
//   isOpen: boolean
// }
// const DropUpArrow = styled.div<DropUpArrowProps>`
//   position: absolute;
//   top: -15px;
//   left: 50%;
//   width: 0;
//   height: 0;
//   border-left: 10px solid transparent;
//   border-right: 10px solid transparent;
//   border-bottom: 10px solid ${(props) => (props.isOpen ? 'white' : 'black')};
//   transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
//   cursor: pointer;
// `

//rätt 22 april
// import { useEffect, useState } from 'react'
// import styled, { createGlobalStyle } from 'styled-components'
// import { NavLink } from 'react-router-dom'
// import KzLogo from './KzLogo'

// function NavigationB() {
//   const [windowDimension, setWindowDimension] = useState(0)

//   useEffect(() => {
//     setWindowDimension(window.innerWidth)
//   }, [])

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimension(window.innerWidth)
//     }

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const isMobile = windowDimension <= 430

//   return (
//     <Styles.Wrapper>
//       <CSSReset />

//       {isMobile ? (
//         <MobileNavbar.Wrapper>
//           <MobileNavbar.Logo>
//             <NavLink to="/">
//               <KzLogo />
//             </NavLink>
//           </MobileNavbar.Logo>
//           <MobileNavbar.Items>
//             <MobileNavbar.Item>
//               <NavLink to="/portfolio">Portfolio</NavLink>
//             </MobileNavbar.Item>
//             <MobileNavbar.Item>
//               <NavLink to="/inspiration">Inspiration</NavLink>
//             </MobileNavbar.Item>
//             <MobileNavbar.Item>
//               <NavLink to="/aboutme">K.Z.</NavLink>
//             </MobileNavbar.Item>
//           </MobileNavbar.Items>
//         </MobileNavbar.Wrapper>
//       ) : (
//         <Navbar.Wrapper>
//           <Navbar.Logo>
//             <NavLink to="/">
//               <KzLogo />
//             </NavLink>
//           </Navbar.Logo>
//           <Navbar.Items>
//             <Navbar.Item>
//               <NavLink to="/portfolio">Portfolio</NavLink>
//             </Navbar.Item>
//             <Navbar.Item>
//               <NavLink to="/inspiration">Inspiration</NavLink>
//             </Navbar.Item>
//             <Navbar.Item>
//               <NavLink to="/aboutme">K.Z.</NavLink>
//             </Navbar.Item>
//           </Navbar.Items>
//         </Navbar.Wrapper>
//       )}
//     </Styles.Wrapper>
//   )
// }

// const Styles = {
//   Wrapper: styled.main`
//     display: flex;
//   `,
// }

// const Navbar = {
//   Wrapper: styled.nav`
//     flex: 1;
//     align-self: flex-start;
//     padding: 1.5rem 4rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #82abb0;
//     .active {
//       color: #471d37;
//       font-weight: bold;
//     }

//     a {
//       color: #213727;
//       text-decoration: none;

//       &:hover {
//         color: #471d37;
//         font-weight: bold;
//       }
//     }
//   `,

//   Logo: styled.div`
//     position: absolute;
//     width: 2rem;
//     height: 2rem;
//   `,
//   Items: styled.ul`
//     display: flex;
//     list-style: none;
//     margin-left: 15rem;
//   `,
//   Item: styled.li`
//     padding: 0 2rem;
//     cursor: pointer;
//   `,
// }

// const MobileNavbar = {
//   Wrapper: styled(Navbar.Wrapper)`
//     position: fixed;
//     width: 100vw;
//     bottom: 0;
//     justify-content: center;
//     /* background-color: #afc4af; */
//     background-color: #82abb0;
//     .active {
//       color: #471d37;
//       font-weight: bold;
//     }

//     a {
//       color: #213727;
//       text-decoration: none;

//       &:hover {
//         color: #471d37;
//       }
//     }
//   `,

//   Logo: styled.div`
//     position: absolute;
//     background-size: contain;
//     background-repeat: no-repeat;
//     margin-right: 17rem;
//   `,
//   Items: styled(Navbar.Items)`
//     flex: 1;
//     /* padding: 1rem; */
//     display: flex;
//     margin-left: 4rem;
//     justify-content: space-around;
//   `,
//   Item: styled(Navbar.Item)`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 0 0.8rem;
//     font-size: 1.2rem;
//   `,
// }

// const CSSReset = createGlobalStyle`
//   *,
//   *::before,
//   *::after {
//     margin: 0;
//     padding: 0;
//     box-sizing: inherit;
//   }

//   html {
//     box-sizing: border-box;
//   }
//   body {
//     font-size: 1.4rem;
//     font-family: sans-serif;
//   }
// `

// export default NavigationB

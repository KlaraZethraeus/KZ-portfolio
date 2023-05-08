// import { useEffect, useRef } from 'react'
// import styled, { createGlobalStyle } from 'styled-components'
// import { NavLink } from 'react-router-dom'

// interface DropUpProps {
//   isOpen: boolean
//   work: string
//   education: string
//   skills: string
// }

// const DropUP = ({ isOpen, education, work, skills }: DropUpProps) => {
//   const dropUpRef = useRef<HTMLDivElement>(null)
//   const navLinkRef = useRef<HTMLAnchorElement>(null)

//   useEffect(() => {
//     if (isOpen && dropUpRef.current && navLinkRef.current) {
//       const navLinkRect = navLinkRef.current.getBoundingClientRect()
//       const dropUpRect = dropUpRef.current.getBoundingClientRect()

//       const newPosition =
//         navLinkRect.top - dropUpRect.height - navLinkRect.height

//       dropUpRef.current.style.top = newPosition + 'px'
//     }
//   }, [isOpen])
//   return (
//     <>
//       <CSSReset />
//       <DropUpContainer ref={dropUpRef} isOpen={isOpen}>
//         <DropUpContent>
//           <h3>Portfolio</h3>
//           <NavLink to="/BillyAwWork">{work}</NavLink>
//           <NavLink to="/ImagePortfolio">{education}</NavLink>
//           <NavLink to="/skills">{skills}</NavLink>
//         </DropUpContent>
//       </DropUpContainer>
//       <DropUpArrow isOpen={isOpen} />
//     </>
//   )
// }

// interface DropUpContainerProps {
//   isOpen: boolean
// }

// const DropUpContainer = styled.div<DropUpContainerProps>`
//   position: absolute;
//   top: -130px;
//   left: 0.5rem;
//   display: ${(props) => (props.isOpen ? 'flex' : 'none')};
//   flex-direction: column;
//   background-color: white;
//   /* padding: 5px; */
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
// `

// interface DropUpArrowProps {
//   isOpen: boolean
// }

// const DropUpContent = styled.div`
//   position: absolute;
//   /* right: 0; */
//   /* margin-top: 2px; */
//   background-color: #ffffff;
//   color: #213727;
//   font-size: 0.8rem;
//   width: 100px;
//   border-radius: 2px;
//   box-shadow: 2px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1;
//   text-align: left;
//   padding-bottom: 0.6rem;

//   h3 {
//     /* font-style: italic; */
//     font-size: 1rem;
//     font-weight: 500;
//     /* margin-top: 0.5rem;
//     margin-left: 0.3rem; */
//     margin: 1rem 0.5rem 0.3rem 1rem;
//   }
//   /* ul {
//     list-style: none;
//     margin: 2rem;
//     padding: 2rem;
//   } */

//   /* li {
//     padding: 10px 5px;
//   } */

//   a {
//     color: #213727;
//     text-decoration: none;
//     font-weight: 400;
//     display: block;
//     padding: 0.2rem;
//     /* margin-left: 5px; */
//     margin: 0.2rem 0.5rem 0 0.8rem;

//     &:hover {
//       color: #471d37;
//     }
//   }
//   /*
//   &::before {
//     content: '';
//     position: absolute;
//     top: -7px;
//     right: 5px;
//     border-width: 7px;
//     border-style: solid;
//     border-color: transparent transparent #82abb0 transparent;
//     transform: rotate(90deg);
//   }
//   @media (max-width: 430px) {
//     font-size: 10px;
//     width: 100px;
//     &::before {
//       border-width: 5px;
//     }
//   } */
// `
// const DropUpArrow = styled.div<DropUpArrowProps>`
//   position: absolute;
//   top: 6px;
//   left: 85%;
//   width: 0;
//   height: 0;
//   border-left: 7px solid transparent;
//   border-bottom: 7px solid transparent;
//   border-right: 7px solid ${(props) => (props.isOpen ? '#82abb0 ' : '#213727')};
//   transform: ${(props) => (props.isOpen ? 'rotate(-45deg)' : 'rotate(45deg)')};
//   cursor: pointer;
// `
// const CSSReset = createGlobalStyle`
//   *,
//   *::before,
//   *::after {
//     margin: 0;
//     padding: 0;
//     box-sizing: inherit;
//   }
// `
// export default DropUP

// const DropUpContent = styled.div<DropUpContainerProps>`
//   position: absolute;
//   top: -150px;
//   left: 0;
//   display: ${(props) => (props.isOpen ? 'block' : 'none')};
//   background-color: white;
//   padding: 16px;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
// `

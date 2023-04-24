import { useEffect, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'

interface DropUpProps {
  isOpen: boolean
  // handleToggle: () => void
  education: string //added hej prop
  work: string
  skills: string
}

const DropUP = ({
  isOpen,
  // handleToggle,
  education,
  work,
  skills,
}: DropUpProps) => {
  // updated props destructuring
  const dropUpRef = useRef<HTMLDivElement>(null)
  const navLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isOpen && dropUpRef.current && navLinkRef.current) {
      const navLinkRect = navLinkRef.current.getBoundingClientRect()
      const dropUpRect = dropUpRef.current.getBoundingClientRect()

      const newPosition =
        navLinkRect.top - dropUpRect.height - navLinkRect.height

      dropUpRef.current.style.top = newPosition + 'px'
    }
  }, [isOpen])
  return (
    <>
      <CSSReset />
      <DropUpContainer ref={dropUpRef} isOpen={isOpen}>
        {/* <DropUpContent isOpen={isOpen}> */}
        <h3>Portfolio</h3>
        <NavLink to="/education">{education}</NavLink>
        <NavLink to="/work">{work}</NavLink>
        <NavLink to="/skills">{skills}</NavLink>
        {/* </DropUpContent> */}
      </DropUpContainer>
      <DropUpArrow isOpen={isOpen} />
    </>
  )
}

interface DropUpContainerProps {
  isOpen: boolean
}

const DropUpContainer = styled.div<DropUpContainerProps>`
  position: relative;
  top: -100px;
  left: 2rem;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background-color: white;
  padding: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`

// const DropUpContent = styled.div<DropUpContainerProps>`
//   position: absolute;
//   top: -150px;
//   left: 0;
//   display: ${(props) => (props.isOpen ? 'block' : 'none')};
//   background-color: white;
//   padding: 16px;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
// `

interface DropUpArrowProps {
  isOpen: boolean
}
const DropUpArrow = styled.div<DropUpArrowProps>`
  position: absolute;
  top: 8px;
  left: 70%;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid ${(props) => (props.isOpen ? 'white' : 'black')};
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  cursor: pointer;
`
const CSSReset = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`
export default DropUP

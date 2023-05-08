//grid/tar emot props {container} och stylar den beroende på
import styled from 'styled-components'

const GridContainer = styled.div<{ container?: boolean }>`
  display: ${({ container }) => (container ? 'flex' : 'initial')};
  flex-wrap: wrap;
  margin: -1rem;
`
export default GridContainer

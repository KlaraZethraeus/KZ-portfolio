//grid/skapar responsiv layout beroende på skärmstorlek.

import styled from 'styled-components'

const GridItem = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  margin: 1rem;
  ${({ xs, theme }: { xs?: number; theme: any }) =>
    xs && `width: calc(${(xs / 12) * 100}% - 2rem);`}
  ${({ sm, theme }: { sm?: number; theme: any }) =>
    sm &&
    `@media screen and (min-width: ${theme.breakpoints.sm}) { width: calc(${
      (sm / 12) * 100
    }% - 2rem); }`}
  ${({ md, theme }: { md?: number; theme: any }) =>
    md &&
    `@media screen and (min-width: ${theme.breakpoints.md}) { width: calc(${
      (md / 12) * 100
    }% - 2rem); }`}
  ${({ lg, theme }: { lg?: number; theme: any }) =>
    lg &&
    `@media screen and (min-width: ${theme.breakpoints.lg}) { width: calc(${
      (lg / 12) * 100
    }% - 2rem); }`}
  ${({ xl, theme }: { xl?: number; theme: any }) =>
    xl &&
    `@media screen and (min-width: ${theme.breakpoints.xl}) { width: calc(${
      (xl / 12) * 100
    }% - 2rem); }`}
`

export default GridItem

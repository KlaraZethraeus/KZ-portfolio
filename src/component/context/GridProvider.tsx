//grid/ tar emot stl props och children.
//renderar en gridprovider med breakpionts.
//innehåller också container + items. kontext för grid.
import React, { useContext } from 'react'
import GridContext from './GridContext'
import ThemeContext from './ThemeContext'
import GridContainer from './GridContainer'
import GridItem from './GridItem'

interface GridProviderProps {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  children: React.ReactNode
}

const GridProvider = ({ children }: GridProviderProps) => {
  const theme = useContext(ThemeContext)
  const { breakpoints } = theme

  return (
    <GridContext.Provider value={breakpoints}>
      <GridContainer>
        {React.Children.map(children, (child, index) => (
          <GridItem key={index} theme={theme}>
            {child}
          </GridItem>
        ))}
      </GridContainer>
    </GridContext.Provider>
  )
}

export default GridProvider

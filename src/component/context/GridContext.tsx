//grid/context som definierar olika storlekar på grid
import { createContext } from 'react'

interface GridContextValue {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

const GridContext = createContext<GridContextValue>({})

export default GridContext

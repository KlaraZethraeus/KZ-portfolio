//grid/context som definierar olika breakpoints, objekt med 5 key
import { createContext } from 'react'

interface ThemeContextValue {
  breakpoints: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
}
const ThemeContext = createContext<ThemeContextValue>({
  breakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
})

export default ThemeContext

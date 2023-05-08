//gap/bilder
import { createContext } from 'react'

interface IGapContext {
  hasGap: boolean
  toggleGap: () => void
}

export const GapContext = createContext<IGapContext>({
  hasGap: false,
  toggleGap: () => {},
})

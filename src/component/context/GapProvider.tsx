import { GapContext } from './GapContext'
import { useState } from 'react'

interface IGapProviderProps {
  children: React.ReactNode
}

export const GapProvider = ({ children }: IGapProviderProps) => {
  const [hasGap, setHasGap] = useState(false)

  const toggleGap = () => setHasGap(!hasGap)

  return (
    <GapContext.Provider value={{ hasGap, toggleGap }}>
      {children}
    </GapContext.Provider>
  )
}

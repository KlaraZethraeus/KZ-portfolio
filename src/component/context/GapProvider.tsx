//gap/images
import { GapContext } from './GapContext'
import { useState, useMemo, useCallback } from 'react'

interface IGapProviderProps {
  children: React.ReactNode
}

export const GapProvider = ({ children }: IGapProviderProps) => {
  const [hasGap, setHasGap] = useState(false)

  const toggleGap = useCallback(() => {
    setHasGap((hasGap) => !hasGap)
  }, [])

  const value = useMemo(() => ({ hasGap, toggleGap }), [hasGap, toggleGap])

  return <GapContext.Provider value={value}>{children}</GapContext.Provider>
}

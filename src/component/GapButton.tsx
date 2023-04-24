import { GapContext } from './context/GapContext'
import { useContext } from 'react'

export const GapButton = () => {
  const { hasGap, toggleGap } = useContext(GapContext)

  return (
    <button onClick={toggleGap}>{hasGap ? 'Remove Gap' : 'Add Gap'}</button>
  )
}

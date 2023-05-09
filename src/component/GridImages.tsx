import { GapContext } from './context/GapContext'
import { useContext } from 'react'
import GraphicImages from './GraphicImages'

export const GridImages = () => {
  const { hasGap } = useContext(GapContext)

  return (
    <div id="myGrid" className={`container ${hasGap ? 'row-padding' : 'row'}`}>
      <GraphicImages images={[]} />
    </div>
  )
}

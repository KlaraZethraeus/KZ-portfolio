//använder gapcontext för att bestämma gap eller inte, sen hämtas graphicimages för att visa bilderna med gapcontext
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

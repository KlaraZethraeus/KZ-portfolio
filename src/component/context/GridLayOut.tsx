//grid/tar emot flera props för att konfiguera en grid-layout
//ink container true/false och stl på kolumn/griditems
//gridprovider renderas och skickar stl props som arg. sen renderas children somprop
import React from 'react'
import GridProvider from './GridProvider'

interface GridProps {
  container?: boolean
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  children?: React.ReactNode
}

const GridLayOut = ({
  container = false,
  xs = 0,
  sm,
  md,
  lg,
  xl,
  children,
}: GridProps) => (
  <GridProvider xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
    {children}
  </GridProvider>
)

export default GridLayOut

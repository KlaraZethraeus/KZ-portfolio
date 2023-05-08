import React from 'react'
import ReactPlayer from 'react-player'

type VideoPlayerProps = {
  url: string
}

const InnerDevGoals = ({ url }: VideoPlayerProps) => {
  return <ReactPlayer url={url} controls={true} width="100%" height="100%" />
}

export default InnerDevGoals

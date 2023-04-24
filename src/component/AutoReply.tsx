import React from 'react'

interface AutoReplyProps {
  userName: string
}

const AutoReply = ({ userName }: AutoReplyProps) => {
  return (
    <div>
      <h1>Thank you for contacting me, {userName}!</h1>
      <p>I will get back to you shortly.</p>
      <p>Best Klara</p>
    </div>
  )
}

export default AutoReply

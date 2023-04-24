import { useState, ReactNode } from 'react'
import { FeedbackContext } from './FeedbackContext'

interface FeedbackProviderProps {
  children: ReactNode
}
export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const [feedbackMessage, setFeedbackMessage] = useState('')

  return (
    <FeedbackContext.Provider value={{ feedbackMessage, setFeedbackMessage }}>
      {children}
    </FeedbackContext.Provider>
  )
}
// export const FeedbackProvider = ({ children }) => {
//   const [feedbackMessage, setFeedbackMessage] = useState('')

//   return (
//     <FeedbackContext.Provider value={{ feedbackMessage, setFeedbackMessage }}>
//       {children}
//     </FeedbackContext.Provider>
//   )
// }

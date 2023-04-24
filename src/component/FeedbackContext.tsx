import { createContext } from 'react'
import styled from 'styled-components'

export const FeedbackContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.feedbackBackgroundColor};
  color: ${({ theme }) => theme.feedbackTextColor};
`

export const FeedbackMessage = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`

export const FeedbackCloseButton = styled.button`
  margin-left: 1rem;
  background-color: ${({ theme }) => theme.feedbackCloseButtonBackgroundColor};
  color: ${({ theme }) => theme.feedbackCloseButtonTextColor};
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      theme.feedbackCloseButtonHoverBackgroundColor};
    color: ${({ theme }) => theme.feedbackCloseButtonHoverTextColor};
  }
`

interface FeedbackContextProps {
  feedbackMessage: string
  setFeedbackMessage: (message: string) => void
}

export const FeedbackContext = createContext<FeedbackContextProps>({
  feedbackMessage: '',
  setFeedbackMessage: () => {},
})

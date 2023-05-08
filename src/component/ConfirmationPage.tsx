import { useContext } from 'react'
import { SignupContext } from './context/SignupContext'

const ConfirmationPage = () => {
  const { formData } = useContext(SignupContext)

  return (
    <div>
      <h2>Thank you, {formData?.firstName}!</h2>
      <p>We have received your information and will contact you shortly.</p>
    </div>
  )
}

export default ConfirmationPage

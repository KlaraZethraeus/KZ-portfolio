import React from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa'

interface FooterProps {
  signupLink: string
}

const FooterSignature: React.FC<FooterProps> = ({ signupLink }) => {
  return (
    <div className="footer">
      <p>Thanks for visiting!</p>
      <a href={signupLink}>Sign up for updates</a>
      <div className="social-icons">
        <a href="https://www.instagram.com/your-instagram-handle">
          <FaInstagram />
        </a>
        <a href="https://www.github.com/your-github-handle">
          <FaGithub />
        </a>
      </div>
    </div>
  )
}

export default FooterSignature

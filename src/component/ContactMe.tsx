import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import SignupForm from './MySignupForm'

const me = {
  name: "Let's grab a coffee...",
  imageSrc: './bild_86.jpg',
}

const ContactMe = () => {
  return (
    <Container>
      <Header>
        <Heading>{me.name}</Heading>
        <Img src="./bild_86.jpg" alt="Profile" />
      </Header>
      <Content>
        <Text>
          Say hello and meet me for a talk and see where it takes us.
          <Link to="/">back to portfolio</Link>
        </Text>
      </Content>
      <div>
        <SignupForm />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cad9d7;
  margin: 2rem 0 3rem 0rem;
  @media (min-width: 768px) {
    justify-content: center;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`

const Heading = styled.h1`
  font-size: 2.1rem;
  font-family: Ubuntu;
  font-weight: 400;
  margin-top: 1.2rem;
  margin-bottom: 15rem;
  padding: 1.1rem;
  margin-left: 2.8rem;
  margin-right: 1rem;
  color: #333;
  z-index: 1;
`
const Img = styled.img`
  position: absolute;
  top: 22px;
  left: 45px;
  width: 90%;
  max-width: 30rem;
  z-index: 0;
`

const Content = styled.div`
  max-width: 22rem;
  margin: 2.5rem 2.2rem 2rem 2rem;
  padding: 2.5rem 2rem 2rem;
  background-color: #f7f7f7;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  @media (min-width: 468px) {
    padding: 2.5rem 2rem 2rem 2rem;
  }
  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.2;
  margin-top: 4rem;
`

const Link = styled(NavLink)`
  display: block;
  margin-top: 2rem;
  font-size: 0.9rem;
  font-style: italic;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`

export default ContactMe

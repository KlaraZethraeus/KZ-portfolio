// import { useContext, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import SignupForm from './MySignupForm'
import FromNow from './FromNow-Back'
// import ImageList, { ImageSizeContext } from './ImageList'
// import { PlaceImage } from './ImageSize'
// import { places } from './DataContext'
// import ImageSize from './ImageSize'

const me = {
  name: 'Klara Zethraeus',
  imageSrc: './bild_86.jpg',
}

// function AboutMeComponent() {
//   const imageSize = useContext(ImageSizeContext);
// type Props = {
//   setIsLarge: React.Dispatch<React.SetStateAction<boolean>>
//   isLarge: boolean
// }

// function
const AboutMe = () => {
  // const imageSizeContext = useContext(ImageSizeContext)
  // const AboutMe = ({ setIsLarge, isLarge }: Props) => {
  //   const imageSize = useContext(ImageSizeContext)

  return (
    <Container>
      <Header>
        <Heading>{me.name}</Heading>
        <Img src="./bild_86.jpg" alt="Profile" />
      </Header>
      <Content>
        <Text>
          <FromNow />
          {/* Hej! Jag heter Klara och jag älskar att designa och bygga saker för
          webben. Om du vill samarbeta, anlita mig eller bara säga hej, tveka
          inte att skicka ett meddelande med formuläret nedan. */}
          <Link to="/">Hem</Link>
        </Text>
      </Content>
      {/* <ImageSizeContext.Provider value={{ imageSize, setImageSize }}>
        <ImageList images={places} />
        <div>
          {places.map((place) => (
            <div key={place.id}>
              {/* <PlaceImage place={place} /> */}
      {/*} </Container> <p>
                <b>{place.name}</b>
                {': ' + place.description}
              </p>
            </div>
          ))}
        </div> */}
      {/* {imageSize === 'small' ? (
          <Img src="./small-profile.jpg" alt="Profile" />
        ) : (
          <Img src="./large-profile.jpg" alt="Profile" />
        )}
        <ImageSize /> */}
      {/* </ImageSizeContext.Provider> */}
      <SignupForm />
    </Container>
  )
}

//hela
const Container = styled.div`
  //bättre utan på mob??
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  //ta bort mob, lägg till desk
  align-items: center;
  //mobile, ta bort på desktop
  min-height: 100vh;
  background-color: #cad9d7;
  /* margin-bottom: 20rem; */
  @media (min-width: 768px) {
    justify-content: center;
  }
`
//namn + bild
const Header = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  right: 25px;
  //gör så att img hamnar lite över texten
  /* margin-right: 15rem; */
  z-index: 1;
`
//namn
const Heading = styled.h1`
  /* position: relative; */
  font-size: 2.8rem;
  font-family: Ubuntu;
  font-weight: 400;
  /* margin-bottom: 70rem; */
  /* margin-left: 0.5rem; */
  margin-top: 1.5rem;
  margin-bottom: 16rem;
  padding: 0.5rem;
  margin-left: 0.6rem;
  color: #333;
  /* margin-right: 15rem; */
  z-index: 1;
`
//bild
const Img = styled.img`
  position: absolute;
  top: 28px;
  left: 50px;
  /* left: 0px; */
  width: 100%;
  max-width: 30rem;
  z-index: 0;
  /* filter: grayscale(100%);*/
`

const Content = styled.div`
  /* max-width: 40rem; */
  /* margin-left: auto; */
  /* margin-top: 1rem; */
  margin: 4.2rem 3rem 2rem 0.8rem;
  padding: 3rem 2rem 2rem;
  background-color: #f7f7f7;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin-top: 4rem;
    max-width: 40rem;
  }
`

const Text = styled.span`
  font-size: 1.1rem;
  line-height: 1.5;
  /* margin-bottom: 2rem; */
`

const Link = styled(NavLink)`
  display: block;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #666;
  }
`

export default AboutMe
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import ContactForm from './ContactForm'

// interface AboutMeProps {}

// const AboutMe: React.FC<AboutMeProps> = (props) => {
//   return (
//     <div className="about-me-container">
//       <div className="about-me-content">
//         <h1>Klara Zethraeus</h1>
//         <p>Hej</p>
//         <img src="insert-image-url-here" alt="Insert alt text here" />
//         <img src="insert-image-url-here" alt="Insert alt text here" />
//         <ContactForm />
//         <NavLink to="/">Hem</NavLink>
//       </div>
//     </div>
//   )
// }

// export default AboutMe

// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import ContactForm from './ContactForm'

// interface AboutMeProps {}

// const AboutMe: React.FC<AboutMeProps> = (props) => {
//   return (
//     <div className="about-me-container">
//       <div className="about-me-content">
//         <h1>Klara Zethraeus</h1>
//         <p>Hej</p>
//         <img src="insert-image-url-here" alt="Insert alt text here" />
//         <img src="insert-image-url-here" alt="Insert alt text here" />
//         <ContactForm />
//         <NavLink to="/">Hem</NavLink>
//       </div>
//     </div>
//   )
// }

// export default AboutMe// function AboutMe() {
//   const heading = 'Om'
//   return (
//     <div className="App" id={heading}>
//       <h1>Om</h1>
//     </div>
//   )
// }
// export default AboutMe

import styled from 'styled-components'
import PersonalValues from './PersonalValues'
import LanguageSkills from './LanguageSkills'
import WorkExperience from './WorkExperience'
import WorkNow from './WorkNow'
import SomeSkills from './SomeSkills'
import SkillsWayback from './SkillsWayback'
// import MasterEducations from './MasterEducations'
import EducationMixed from './EducationMixed'
import AkademyCourses from './AkademyCourses'
// import FromNow from './FromNow-Back'
// import { useParams } from 'react-router-dom'

const PortFolio = () => {
  // const { id } = useParams()
  return (
    <Container>
      <Header>
        <Hello>HELLO,</Hello>
        <Img src="./kz.jpg" alt="Profile" />
        <ImageVerticalLine />
        <JoyText>a portrait of me.</JoyText>
        <ShortInfo>
          <ShortInfoText>
            Klara Zethraeus
            <br />
            81
            <VerticalLine />
            July
            <VerticalLine />
            22
            <br />
            kz.aroundkz.com
            <br />
            46 739 443621
          </ShortInfoText>
        </ShortInfo>
      </Header>
      <Main>
        <Column>
          <FlexContainer>
            <ColumnHeading>Values</ColumnHeading>
            <ExtraInfo>.personal </ExtraInfo>
          </FlexContainer>
          <PersonalValues />
          <FlexContainer>
            <ColumnHeading>Skills</ColumnHeading>
            <ExtraInfo>.in progress</ExtraInfo>
          </FlexContainer>
          <SomeSkills />
          <FlexContainer>
            <ColumnHeading>Work</ColumnHeading>
            <ExtraInfo>.ongoing</ExtraInfo>
          </FlexContainer>
          <ColumnText>
            <Design>Frelance project & customers</Design>
            <WorkNow />
          </ColumnText>
          <FlexContainer>
            <ColumnHeading>Akademy</ColumnHeading>
            <ExtraInfo>.courses</ExtraInfo>
          </FlexContainer>
          <SectionGroup>
            <AkademyCourses />
          </SectionGroup>
          <FlexContainer>
            <ColumnHeading>Languages</ColumnHeading>
          </FlexContainer>
          <LanguageSkills />
        </Column>
        <Column>
          <FlexContainer>
            <ColumnHeading>Work</ColumnHeading>
            <ExtraInfo>.a time travel</ExtraInfo>
          </FlexContainer>
          <ColumnText>
            <WorkExperience />
          </ColumnText>
          <FlexContainer>
            <ColumnHeading>Education</ColumnHeading>
            <ExtraInfo>.way back</ExtraInfo>
          </FlexContainer>
          <EducationMixed />
          <FlexContainer>
            <ColumnHeading>Design skills</ColumnHeading>
            <ExtraInfo>.feels like forever</ExtraInfo>
          </FlexContainer>
          <SkillsWayback />
        </Column>
      </Main>
      {/* <QrCode src="./KZkub.jpg" alt="QR code" /> */}
      <NoteItem>thanks.</NoteItem>
      <NoteItem>kz</NoteItem>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  margin: 0.2rem;
  margin-top: 2rem;
  margin-bottom: 7rem;
`
const JoyText = styled.p`
  display: grid;
  grid-row: 3 / 4;
  grid-column: 2 / 2;
  margin-top: 0.2rem;
  margin-left: -1.6rem;
  font-size: 0.7rem;
  font-family: Ubuntu;
  font-weight: 500;
  color: #141414;
  @media (min-width: 530px) {
    /* font-size: 1.5rem; */
  }
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
  @media (min-width: 990px) {
    font-size: 1.1rem;
    margin-left: -8.6rem;
    text-align: left;
    grid-column: 2 / 3;
  }
`
const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr 3fr 1fr;
`
const Hello = styled.h1`
  display: grid;
  grid-row: 2/ 3;
  grid-column: 1 / 2;
  font-size: 2rem;
  font-family: Ubuntu;
  font-weight: 600;
  color: #000000;
  transform: translate(-14%, -16%) rotate(-90deg);
  @media (min-width: 530px) {
    /* font-size: 1.5rem; */
  }
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
  @media (min-width: 990px) {
    font-size: 2.5rem;
    transform: translate(-6%, -32%) rotate(-90deg);
  }
`
const ImageVerticalLine = styled.div`
  display: grid;
  grid-column: 2 / 3;
  position: relative;
  grid-row: 1 / 2;
  top: -0.3rem;
  left: 2.8rem;
  height: 60%;
  width: 2px;
  background-color: #000000;
  @media (min-width: 530px) {
  }
  @media (min-width: 768px) {
    left: -2rem;
    grid-column: 2 / 3;
  }
  @media (min-width: 990px) {
    left: -2rem;
    grid-column: 2 / 3;
    margin-top: 4.8rem;
  }
`
const Img = styled.img`
  display: grid;
  grid-row: 1 / 3;
  grid-column: 1/ 2;
  width: 100%;
  height: auto;
  margin-left: 2.5rem;
  opacity: 1;
  @media (min-width: 460px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 80%;
  }
  @media (min-width: 990px) {
    display: grid;
    max-width: 70%;
    margin-left: 7rem;
    margin-top: 5rem;
  }
`

const ShortInfo = styled.div`
  display: grid;
  flex-direction: column;
  grid-row: 2/ 3;
  grid-column: 2 / 3;
  padding-left: 0.5rem;
  align-items: center;
  @media (min-width: 530px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 990px) {
    padding-right: 5.5rem;
  }
`

const ShortInfoText = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  margin-top: 2rem;
  margin-left: 0.1rem;
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  @media (min-width: 530px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`

const VerticalLine = styled.span`
  display: grid;
  display: inline-block;
  margin: 0 0.4rem;
  border-left: 1px solid #333;
  height: 0.5rem;
  @media (min-width: 530px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
`

const Main = styled.div`
  display: grid;
  /* margin-left: 1rem; */
  grid-gap: 1.5rem;
  padding: 1.5rem;
  margin-top: 0.2rem;
  @media (min-width: 530px) {
    /* grid-template-columns: repeat(2, 1fr); */
  }
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
  /* @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`

const SectionGroup = styled.div``
//making main start at the same top-line
const Column = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items; center:
  margin: 2rem;
  width: 100%;

` //make .info flex after heading
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 0.5px solid #333;
  margin-bottom: 0.2rem;
`

const ColumnHeading = styled.h2`
  margin-left: 1rem;
  font-size: 1.2rem;
  font-family: Ubuntu;
  margin-bottom: 0;
  font-weight: 600;
  padding-top: 0.1rem;
`

const ExtraInfo = styled.p`
  color: #302a2a;
  font-style: italic;
  font-weight: 300;
  font-size: 0.7rem;
  margin-left: 0.4rem;
  padding-top: 1rem;
`
const Design = styled.div`
  font-style: italic;
  margin-left: 1.2rem;
  font-size: 0.9rem;
  font-weight: 300;
  padding-bottom: 0.5rem;
`
const ColumnText = styled.div`
  font-size: 0.8rem;
`
const NoteItem = styled.p`
  text-align: center;
  font-weight: 300;
  font-style: italic;
  font-size: 1.2rem;
`
// const QrCode = styled.img`
//   position: absolute;
//   top: 2rem;
//   right: 3rem;
//   width: 4rem;
//   height: 4rem;
//   z-index: 1;
// `
export default PortFolio

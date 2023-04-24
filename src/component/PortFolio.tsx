import styled from 'styled-components'
import PersonalValues from './PersonalValues'
import LanguageSkills from './LanguageSkills'
import WorkExperience from './WorkExperience'
import WorkNow from './WorkNow'
import SomeSkills from './SomeSkills'
import SkillsWayback from './SkillsWayback'
import MasterEducations from './MasterEducations'
import AkademyCourses from './AkademyCourses'
import SkillsPersonal from './SkillsPersonal'
import FromNow from './FromNow-Back'
// import { useParams } from 'react-router-dom'

const PortFolio = () => {
  // const { id } = useParams()
  return (
    <Container>
      <Header>
        <Hello>HELLO,</Hello>
        <Img
          src="./klaraflorens.jpg"
          alt="Profile"
          // style={{ marginLeft: '1rem' }}
        />
        <ImageVerticalLine
        // style={{ marginTop: '1.6rem' }}
        />
        {/* <Img src="./klaraflorens.jpg" alt="Profile" /> */}
        <JoyText>a portrait of m.e.</JoyText>
        <ShortInfo>
          <ShortInfoText>
            Klara Zethraeus
            <br />
            81
            <VerticalLine />
            July
            <VerticalLine />
            22
            {/* <br />
          Frufällan
          <VerticalLine />
          Sweden */}
            {/* <br />
          Based in Borås <VerticalLine /> Frufällan */}
            <br />
            kz.aroundkz.com
            <br />
            +46 739 443621
          </ShortInfoText>
        </ShortInfo>
      </Header>

      <Main>
        {/* left column */}
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
            <ColumnHeading>Languages</ColumnHeading>
          </FlexContainer>
          <LanguageSkills />
          <LineSeparation>
            <ColumnHeading>Design skills</ColumnHeading>
            <ExtraInfos>.feels like forever</ExtraInfos>
          </LineSeparation>
          <SkillsWayback />
          <FlexContainer>
            <ColumnHeading>Education</ColumnHeading>
            <ExtraInfo>.way back</ExtraInfo>
          </FlexContainer>
          <MasterEducations />
        </Column>
        {/* right column */}

        <Column>
          <FlexContainer>
            <ColumnHeading>Work</ColumnHeading>
            <ExtraInfo>.ongoing</ExtraInfo>
          </FlexContainer>
          <ColumnText>
            <WorkNow />
          </ColumnText>
          <FlexContainer>
            <ColumnHeading>Work</ColumnHeading>
            <ExtraInfo>.a time travel</ExtraInfo>
          </FlexContainer>
          <ColumnText>
            <WorkExperience />
          </ColumnText>
          <FlexContainer>
            <ColumnHeading>Akademy</ColumnHeading>
            <ExtraInfo>.courses</ExtraInfo>
          </FlexContainer>
          <AkademyCourses />
          <FlexContainer>
            <ColumnHeading>Skills</ColumnHeading>
            <ExtraInfo>.personal</ExtraInfo>
          </FlexContainer>
          <SkillsPersonal />
        </Column>
        <FromNowContainer>
          <FromNow />
        </FromNowContainer>
      </Main>
      {/* <QrCode src="./KZkub.jpg" alt="QR code" /> */}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  margin: 0.2rem;
  margin-top: 2rem;
  /* min-height: 100vh; */
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const JoyText = styled.p`
  display: grid;
  grid-row: 3 / 4;
  grid-column: 2 / 2;
  margin-top: 0.2rem;
  font-size: 0.6rem;
  font-family: Ubuntu;
  font-weight: 500;
  color: #141414;
`
const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr 3fr 1fr;
`
const Hello = styled.h1`
  display: grid;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  margin-top: 0.1rem;
  padding-right: 1rem;
  font-size: 3rem;
  font-family: Ubuntu;
  font-weight: 600;
  color: #050505;
  padding-right: 0.4rem;
  transform: rotate(-90deg);
  z-index: 1;
`
const ImageVerticalLine = styled.div`
  display: grid;
  grid-column: 2 / 3;
  /* position: absolute; */
  grid-row: 1 / 2;
  top: 3rem;
  right: 5.4rem;
  height: 40%;
  width: 2px;
  background-color: #333;
`
const Img = styled.img`
  display: grid;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  width: 100%;
  height: auto;
  margin-left: 3rem;
`

const ShortInfo = styled.div`
  display: grid;
  flex-direction: column;
  grid-row: 2/ 3;
  grid-column: 2 / 3;
  padding-top: 4rem;
  align-items: center;
`

const ShortInfoText = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  /* margin-top: 8rem;
  margin-left: 15rem; */
  margin-top: 0;
  margin-left: 0;
  grid-row: 3 / 4;
  grid-column: 3 / 4;
`

const VerticalLine = styled.span`
  display: grid;
  display: inline-block;
  margin: 0 0.4rem;
  border-left: 1px solid #333;
  height: 0.6em;
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 1.5rem;
  padding: 1.5rem;
  margin-top: 0.2rem;
  /* background-color: #f7f7f7; */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 1rem; */
`
// const ExtraInfo = styled.div`
//   font-size: 0.7rem;
//   color: #302a2a;
//   font-style: italic;
//   padding-top: 1rem;
//   /* padding: 0.1rem; */
// `
const LineSeparation = styled.div`
  border-top: 0.5px solid #333;
  margin-bottom: 0.2rem;
`
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 0.5px solid #333;
  margin-bottom: 0.2rem;
`

const ColumnHeading = styled.h2`
  font-size: 1.2rem;
  font-family: Ubuntu;
  margin-bottom: 0;
  font-weight: 600;
  padding-top: 1.5rem;
`

const ExtraInfo = styled.p`
  color: #302a2a;
  font-style: italic;
  font-weight: 300;
  font-size: 0.7rem;
  margin-left: 0.4rem;
  padding-top: 1.7rem;
`
const ExtraInfos = styled.div`
  font-size: 0.7rem;
  color: #302a2a;
  font-style: italic;
  padding-top: 0.2rem;
`
const FromNowContainer = styled.div`
  grid-column: 1 / -1; /* span over all columns */
  grid-row: 4; /* fourth row */
  display: flex;
  justify-content: center;
  /* margin-top: 0.5rem; */
  margin-bottom: 15rem;
  // const ColumnHeading = styled.h2
`
//   font-size: 1.2rem;
//   font-family: Ubuntu;
//   font-weight: 600;
//   margin: 0;
//   margin-bottom: 0.1rem;
//   border-top: 0.5px solid #333;
//   padding-top: 1.5rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   ${ExtraInfo} {
//     font-size: 0.7rem;
//   }
// `
// const FlexContainer = styled.div`
//   display: flex;
//   /* justify-content: space-between; */
//   /* align-items: center; */

//   /* margin-bottom: 1rem; */
// `

const ColumnText = styled.div`
  font-size: 0.8rem;
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
// import styled from 'styled-components'
// import PersonalValues from './PersonalValues'
// import LanguageSkills from './LanguageSkills'
// import WorkExperience from './WorkExperience'
// import WorkNow from './WorkNow'
// import SomeSkills from './SomeSkills'
// import SkillsWayback from './SkillsWayback'

// const PortFolio = () => {
//   return (
//     <Container>
//       <Header>
//         <Hello>HELLO,</Hello>
//         <Img
//           src="./klaraflorens.jpg"
//           alt="Profile"
//           // style={{ marginLeft: '1rem' }}
//         />
//         <ImageVerticalLine
//         // style={{ marginTop: '1.6rem' }}
//         />
//         {/* <Img src="./klaraflorens.jpg" alt="Profile" /> */}
//         <JoyText>a portrait of m.e.</JoyText>
//         <ShortInfo>
//           <ShortInfoText>
//             Klara Zethraeus
//             <br />
//             81
//             <VerticalLine />
//             July
//             <VerticalLine />
//             22
//             {/* <br />
//           Frufällan
//           <VerticalLine />
//           Sweden */}
//             {/* <br />
//           Based in Borås <VerticalLine /> Frufällan */}
//             <br />
//             kz.aroundkz.com
//             <br />
//             +46 739 443621
//           </ShortInfoText>
//         </ShortInfo>
//       </Header>
//       <Main>
//         {/* left column */}
//         <Column>
//           <ColumnHeading>Personal Values</ColumnHeading>
//           <PersonalValues />
//           <ColumnHeading>Skills</ColumnHeading>
//           <ExtraInfo>in progress</ExtraInfo>
//           <SomeSkills />
//           <ColumnHeading>Languages</ColumnHeading>
//           <LanguageSkills />
//           <ColumnHeading>Design skills</ColumnHeading>
//           <ExtraInfo>way back</ExtraInfo>
//           <SkillsWayback />
//         </Column>
//         {/* right column */}
//         <Column>
//           <ColumnHeading>Work</ColumnHeading>
//           <ColumnText>
//             <WorkNow />
//           </ColumnText>
//           <ColumnHeading>Work</ColumnHeading>
//           <ExtraInfo>a time travel</ExtraInfo>
//           <ColumnText>
//             <WorkExperience />
//           </ColumnText>
//         </Column>
//       </Main>
//       {/* <QrCode src="./KZkub.jpg" alt="QR code" /> */}
//     </Container>
//   )
// }

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: auto auto 1fr auto;
//   margin-top: 2rem;
//   /* min-height: 100vh; */
//   @media (min-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
// `
// const JoyText = styled.p`
//   display: grid;
//   grid-row: 3 / 4;
//   grid-column: 2 / 2;
//   margin-top: 0.2rem;
//   font-size: 0.6rem;
//   font-family: Ubuntu;
//   font-weight: 500;
//   color: #141414;
// `
// const Header = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: 2fr 3fr 1fr;
// `
// const Hello = styled.h1`
//   display: grid;
//   grid-row: 2 / 3;
//   grid-column: 1 / 2;
//   margin-top: 0.1rem;
//   padding-right: 1rem;
//   font-size: 3rem;
//   font-family: Ubuntu;
//   font-weight: 600;
//   color: #050505;
//   padding-right: 0.4rem;
//   transform: rotate(-90deg);
//   z-index: 1;
// `
// const ImageVerticalLine = styled.div`
//   display: grid;
//   position: absolute;
//   top: 1.5rem;
//   right: 10.4rem;
//   height: 10%;
//   width: 2px;
//   background-color: #333;
// `
// const Img = styled.img`
//   display: grid;
//   grid-row: 1 / 3;
//   grid-column: 1 / 2;
//   width: 100%;
//   height: auto;
//   margin-left: 3rem;
// `

// const ShortInfo = styled.div`
//   display: grid;
//   flex-direction: column;
//   grid-row: 2/ 3;
//   grid-column: 3 / 4;
//   padding-right: 3.2rem;
//   padding-top: 4rem;
// `

// const ShortInfoText = styled.p`
//   font-size: 0.8rem;
//   line-height: 1.6;
//   /* margin-top: 8rem;
//   margin-left: 15rem; */
//   margin-top: 0;
//   margin-left: 0;
//   grid-row: 3 / 4;
//   grid-column: 3 / 4;
// `

// const VerticalLine = styled.span`
//   display: grid;
//   display: inline-block;
//   margin: 0 0.4rem;
//   border-left: 1px solid #333;
//   height: 0.6em;
// `

// const Main = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: auto auto;
//   grid-gap: 1.5rem;
//   padding: 1.5rem;
//   margin-top: 0.2rem;
//   /* background-color: #f7f7f7; */

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `

// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* margin-left: 1rem; */
// `
// const ExtraInfo = styled.div`
//   font-size: 0.7rem;
//   color: #302a2a;
//   font-style: italic;
// `
// const ColumnHeading = styled.h2`
//   font-size: 1.2rem;
//   font-family: Ubuntu;
//   font-weight: 600;
//   margin: 0;
//   margin-bottom: 0.1rem;
//   border-top: 0.5px solid #333;
//   padding-top: 1.5rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   ${ExtraInfo} {
//     font-size: 0.7rem;
//   }
// `
// const ColumnText = styled.p`
//   font-size: 0.8rem;
//   /* line-height: ; */
// `

// // const QrCode = styled.img`
// //   position: absolute;
// //   top: 2rem;
// //   right: 3rem;
// //   width: 4rem;
// //   height: 4rem;
// //   z-index: 1;
// // `
// export default PortFolio

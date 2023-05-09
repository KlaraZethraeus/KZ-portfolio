import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  margin-top: 4.5rem;
`

const LogoImage = styled.img`
  height: 55px;
`

// const LogoText = styled.h1`
//   font-family: 'Gaegu-Light', sans-serif;
//   font-size: 2.4rem;
//   margin: 0;
// `

function KzLogo() {
  return (
    <LogoWrapper>
      <LogoImage src="/KZkub.jpg" alt="Logo" />
      {/* <LogoText>kz</LogoText> */}
    </LogoWrapper>
  )
}

export default KzLogo

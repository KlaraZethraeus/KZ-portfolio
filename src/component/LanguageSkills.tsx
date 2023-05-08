import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`
const LanguageItem = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.2rem;
`
const LanguageName = styled.p`
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
`
const LanguageBar = styled.div`
  background-color: #f2f2f2;
  height: 5px;
  border-radius: 4px;
  margin-right: 1.5rem;
`
const LanguageLevel = styled.div`
  background-color: #aac1c3;
  height: 100%;
  border-radius: 4px;
`
const LanguageSkills = () => {
  return (
    <Container>
      <LanguageItem>
        <LanguageName>English</LanguageName>
        <LanguageBar>
          <LanguageLevel style={{ width: '100%' }} />
        </LanguageBar>
      </LanguageItem>
      <LanguageItem>
        <LanguageName>French</LanguageName>
        <LanguageBar>
          <LanguageLevel style={{ width: '55%' }} />
        </LanguageBar>
      </LanguageItem>
      <LanguageItem>
        <LanguageName>German</LanguageName>
        <LanguageBar>
          <LanguageLevel style={{ width: '25%' }} />
        </LanguageBar>
      </LanguageItem>
    </Container>
  )
}

export default LanguageSkills

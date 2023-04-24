import styled from 'styled-components'

const other = [
  'Love to dance.',
  'Raises to artists like Kendrick Lamar, Leonard Cohen and Mattias Alkberg.',
  'Got the rest of my family into skateboarding.',
  'Grows as much as goes on a plot of land.',
  'Running, preferably in the woods, preferably in the dark with a headlamp.',
  'Green card in climbing, despite fear of heights.',
  'As a 15-year-old, I went to Sthlm to attend the Ballet Academy. Studied parallel high school remotely.',
  'discovered India, Istanbul, Sri Lanka, Gambia alone.',
  'Was in Kenya and Tanzania for a longer period as an 8-year-old. Dad helped with medicine and care in villages, schools and hospitals.',
  'Likes to sleep under the open sky',
  'Hugging trees',
]

const FromNow = () => {
  return (
    <List>
      {other.map((skill) => (
        <ListItem key={skill}>
          <SkillText>{skill}</SkillText>
        </ListItem>
      ))}
    </List>
  )
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`

const SkillText = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 0.02rem;
`

export default FromNow

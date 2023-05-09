import styled from 'styled-components'

const SpareTime = [
  'Love to dance.',
  'Kendrick Lamar, Leonard Cohen and Mattias Alkberg makes me crank up the volume.',
  'Got the rest of my family into skateboarding.',
  'Grows as much as possible on a plot of land.',
  'Running, preferably in the woods, preferably in the dark with a headlamp.',
  'Green card in climbing, despite fear of heights.',
  'Moved as a 15-year-old to Sthlm to attend the Ballet Academy, in parallel with high school distance-learning.',
  'Discovered India, Istanbul, Sri Lanka, Gambia alone.',
  'Was in Kenya and Tanzania for a longer period as an 8-year-old. Dad helped with medicine and care in villages, schools and hospitals.',
  'Likes to sleep under the open sky',
  'Hugging trees',
]

const FreeTime = () => {
  return (
    <List>
      {SpareTime.map((skill) => (
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

export default FreeTime

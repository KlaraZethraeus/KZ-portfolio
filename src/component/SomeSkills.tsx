import styled from 'styled-components'
const skills = [
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Redux',
  'Vue',
  'Vuex',
  'Nuxt.js',
  'Vite',
  'UX/UI',
  'JavaScript',
  'TypeScript',
  'Express',
  'Node.js',
  'MongoDB',
  'Mongosse',
  'SQL/SQLite',
  'Websocket',
  'SASS',
  'BOOTSTRAP',
]

const SomeSkills = () => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableColumn>
            {skills.slice(0, 10).map((skill) => (
              <ColumnText key={skill}>{skill}</ColumnText>
            ))}
          </TableColumn>
          <TableColumn>
            {skills.slice(10).map((skill) => (
              <ColumnText key={skill}>{skill}</ColumnText>
            ))}
          </TableColumn>
        </TableRow>
      </tbody>
    </Table>
  )
}

const Table = styled.table`
  display: grid;
  grid-template-columns: repeat(200px, 1fr);
  justify-content: center;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1.5rem;
`
const TableRow = styled.tr`
  &:nth-child(even) {
  }
`
const TableColumn = styled.td`
  text-align: left;
  padding: 0.5rem;
  &:first-child {
    padding-right: 2.5rem;
  }
  &:last-child {
    padding-left: 2.5rem;
  }
`
const ColumnText = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
`

export default SomeSkills

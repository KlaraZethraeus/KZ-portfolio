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
  //'Agil utveckling',
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
`
const ColumnText = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  align-items: center;
  margin-left: 1rem;
  margin-right: 3.4rem;
`

export default SomeSkills

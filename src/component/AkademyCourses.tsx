import styled from 'styled-components'
const skills = [
  'Agile development',
  'Web development',
  'Data scripting',
  'Data systems',
  'PHP, JavaScript',
  'Interaction design',
  'Digital images',
  'Project mgmt.',
  'Photography',
  'Image editing',
  'Ceramics',
  'Philosophy',
]
const AkademyCourses = () => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableColumn>
            {skills.slice(0, 6).map((skill) => (
              <ColumnText key={skill}>{skill}</ColumnText>
            ))}
          </TableColumn>
          <TableColumn>
            {skills.slice(6).map((skill) => (
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
    padding-right: 1.6rem;
  }
  &:last-child {
    padding-left: 1.6rem;
  }
`

const ColumnText = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
`

export default AkademyCourses

import styled from 'styled-components'
const skills = ['Breakdancer', 'Skater', 'Gardener']

const SkillsWayback = () => {
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
  border-collapse: collapse;
  width: 100%;
  /* margin: 1 0 0.8rem 0; */
`
const TableRow = styled.div`
  &:nth-child(even) {
  }
`
const TableColumn = styled.div`
  text-align: left;
  padding: 1rem 1rem 0.4rem 0;
`
const ColumnText = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`

export default SkillsWayback

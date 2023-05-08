import styled from 'styled-components'
const skills = [
  'Breaking',
  'Ballet',
  'Skating',
  'Painting',
  'Gardening',
  'Medition',
  'Running',
  'Yoga',
]

const SkillsPersonal = () => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableColumn>
            {skills.slice(0, 4).map((skill) => (
              <ColumnText key={skill}>{skill}</ColumnText>
            ))}
          </TableColumn>
          <TableColumn>
            {skills.slice(4).map((skill) => (
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
  margin-bottom: 0.5rem;
`
const TableRow = styled.tr`
  &:nth-child(even) {
  }
`
const TableColumn = styled.td`
  text-align: left;
`
const ColumnText = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  align-items: center;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-bottom: 0.2rem;
  @media only screen and (min-width: 600px) {
    margin-left: 4.5rem;
    margin-right: 4.5rem;
  }
  @media only screen and (min-width: 768px) {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`

export default SkillsPersonal

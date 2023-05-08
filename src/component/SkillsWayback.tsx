import styled from 'styled-components'
const skills = [
  'Branding',
  'Product',
  'Concept',
  'Graphic',
  'Typing',
  'Editorial',
  'Pattern',
  'Illustrations',
  'Decorator',
  'Illustrator',
  'InDesign',
  'Photoshop',
]

const SkillsWayback = () => {
  return (
    <Table>
      <tbody>
        {/* <TableRow>
          <TableColumn colSpan={2}>
            <ColumnTitle>in progress</ColumnTitle>
          </TableColumn>
        </TableRow> */}
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

export default SkillsWayback

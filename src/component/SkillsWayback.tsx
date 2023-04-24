import styled from 'styled-components'
const skills = [
  'Branding',
  'Product',
  'Concept',
  'Graphic',
  'Set',
  'Editorial',
  'Pattern',
  'Illustrations',
  'Typing',
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
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1.5rem;

  /* margin: 1 0 0.8rem 0; */
`
const TableRow = styled.tr`
  &:nth-child(even) {
  }
`
const TableColumn = styled.td`
  text-align: left;
  /* padding: 1rem 1rem 0.4rem 0; */
`
const ColumnText = styled.p`
  font-size: 0.8rem;
  /* margin-bottom: 0.2rem; */
  line-height: 1.5rem;
  letter-spacing: 0.02rem;
  /* margin-top: 0.5rem; */
`

export default SkillsWayback

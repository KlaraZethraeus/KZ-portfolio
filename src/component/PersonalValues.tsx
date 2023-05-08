import styled from 'styled-components'
const values = [
  'Creativity',
  'Innovation',
  'Cooperation',
  'Dedication',
  'Flexibility',
  'Curiosity',
  'Optimism',
  'Humility',
]

const PersonalValues = () => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableColumn>
            {values.slice(0, 4).map((value) => (
              <ColumnText key={value}>{value}</ColumnText>
            ))}
          </TableColumn>
          <TableColumn>
            {values.slice(4).map((value) => (
              <ColumnText key={value}>{value}</ColumnText>
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
  margin-right: 3rem;
`

export default PersonalValues

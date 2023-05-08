import styled from 'styled-components'

const jobs = [
  'C.D.',
  'Stylist',
  'Advertising',
  'Photo prod.',
  'Fashion shows',
  'Film prod.',
  'Exhibitions',
  'Set design',
  'Concept design',
  'Teaching',
  'Workshops',
  'Product dev.',
  'Business dev.',
  'Project mgt.',
]
const customers = [
  'Plaza Kvinna',
  'Saint Laurent',
  'Sport Max',
  'Lindex',
  'Swe.Textile School',
  'Drivhuset',
  'Television',
  'Melodifestivalen',
  'Louis Vuitton',
  'Malene Birger',
  'SVA Magazine',
  'Institute Magazine',
  'VGR Klimat 2030',
  'Way out West',
]

const WorkNow = () => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableColumn>
            {jobs.slice(0, 14).map((job) => (
              <ColumnText key={job}>{job}</ColumnText>
            ))}
          </TableColumn>
          <TableColumn>
            {customers.map((customer) => (
              <ColumnText key={customer}>{customer}</ColumnText>
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
'  text-align: left;
`
const ColumnText = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  align-items: center;
  margin-left: 1.2rem;
  margin-right: 2rem;
`

export default WorkNow

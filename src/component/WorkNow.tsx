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
  'Project mgmt.',
]
const customers = [
  'Plaza Kvinna',
  'Saint Laurent',
  'Sport Max',
  'Lindex',
  'Swe. School of Textile',
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
    padding-right: 1.5rem;
  }
  &:last-child {
    padding-left: 1.5rem;
  }
`
const ColumnText = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
`

export default WorkNow

import styled from 'styled-components'
const skills = [
  'Agil utveckling',
  'Web development',
  'Data scripting',
  'Data systems (PHP,JavaScript)',
  'Interaction design',
  'Digital images',
  'Project management',
  'Photography',
  'Image editing',
  'Ceramics',
  'Filosofy',
]

const AkademyCourses = () => {
  return (
    <Table>
      <tbody>
        <TableRow>
          <TableColumn>
            {skills.slice(0, 12).map((skill) => (
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
  /* padding: 0.5rem 1.5rem 0 0; */
`
// const ColumnTitle = styled.h2`
//   font-size: 0.8rem;
//   font-style: italic;
//   font-weight: 300;
//   margin-bottom: 0.4rem;
// `
const ColumnText = styled.p`
  font-size: 0.8rem;
  /* margin-bottom: 0.2rem; */
  line-height: 1.5rem;
  letter-spacing: 0.02rem;
  padding-right: 0.8rem;
`

export default AkademyCourses

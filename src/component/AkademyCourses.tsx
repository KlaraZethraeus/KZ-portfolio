import styled from 'styled-components'
const skills = [
  'Agil utveckling',
  'Web development',
  'Data scripting',
  'Data systems',
  'PHP,JavaScript',
  'Interaction design',
  'Digital images',
  'Project mgmt',
  'Photography',
  'Image editing',
  'Ceramics',
  'Philosphy',
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

// const AkademyCourses = () => {
//   return (
//     <Table>
//       <tbody>
//         <TableRow>
//           <TableColumn>
//             {skills.slice(0, 12).map((skill) => (
//               <ColumnText key={skill}>{skill}</ColumnText>
//             ))}
//           </TableColumn>
//           <TableColumn>
//             {skills.slice(0, 6).map((skill) => (
//               <ColumnText key={skill}>{}</ColumnText>
//             ))}
//           </TableColumn>
//         </TableRow>
//       </tbody>
//     </Table>
//   )
// }

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1.5rem;
`
const TableRow = styled.tr`
  &:nth-child(even) {
  }
`
const TableColumn = styled.td`
  /* text-align: left; */
`
const ColumnText = styled.p`
  font-size: 0.8rem;
  line-height: 1.1rem;
  letter-spacing: 0.01rem;
  margin-left: 1.2rem;
  margin-right: 3rem;
`

export default AkademyCourses

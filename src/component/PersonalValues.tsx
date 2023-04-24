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
  //'Agil utveckling',
]

const PersonalValues = () => {
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
  /* padding-right: 0.2rem; */
`

export default PersonalValues

// import styled from 'styled-components'

// const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   margin-bottom: 1.5rem;
//   /* margin: 0 0 0.8rem 0; */
// `
// const TableRow = styled.tr`
//   &:nth-child(even) {
//   }
// `
// const TableColumn = styled.td`
//   text-align: left;

//   /* padding: 0 1rem 0.4rem 0; */
// `
// const ColumnText = styled.span`
//   font-size: 0.8rem;
//   line-height: 1.3rem;
// `
// const PersonalValues = () => {
//   return (
//     <Table>
//       <tbody>
//         <TableRow>
//           <TableColumn>
//             <ColumnText>
//               Creativity
//               <br />
//               Innovation
//               <br />
//               Cooperation
//               <br />
//               Dedication
//             </ColumnText>
//           </TableColumn>
//           <TableColumn>
//             <ColumnText>
//               Flexibility
//               <br />
//               Curiosity
//               <br />
//               Optimism
//               <br />
//               Humility
//             </ColumnText>
//           </TableColumn>
//         </TableRow>
//       </tbody>
//     </Table>
//   )
// }

// export default PersonalValues

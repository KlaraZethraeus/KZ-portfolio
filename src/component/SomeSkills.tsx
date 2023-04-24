import styled from 'styled-components'
const skills = [
  'HTML',
  'CSS',
  'React',
  'Next.js',
  'Redux',
  'Vue',
  'Vuex',
  'Nuxt.js',
  'Vite',
  'UX/UI',
  'JavaScript',
  'TypeScript',
  'Express',
  'Node.js',
  'MongoDB',
  'Mongosse',
  'SQL/SQLite',
  'Websocket',
  'SASS',
  'BOOTSTRAP',
  //'Agil utveckling',
]

const SomeSkills = () => {
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
            {skills.slice(0, 10).map((skill) => (
              <ColumnText key={skill}>{skill}</ColumnText>
            ))}
          </TableColumn>
          <TableColumn>
            {skills.slice(10).map((skill) => (
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

export default SomeSkills
// import styled from 'styled-components'

// const SomeSkills = () => {
//   return (
//     <Table>
//       <tbody>
//         <TableRow>
//           <TableColumn>
//             <ColumnHeader>Frontend</ColumnHeader>
//             <ColumnText>
//               HTML,
//               <br />
//               CSS
//               <br />
//               Native JavaScript
//               <br />
//               Vue.js, Vuex, Vite, Nuxt.js
//               <br />
//               UX, UI
//               <br />
//               Next.js, React: Vite, Redux
//               <br />
//             </ColumnText>
//           </TableColumn>
//           <TableColumn>
//             <ColumnHeader>Backend</ColumnHeader>
//             <ColumnText>
//               React
//               <br />
//               Agil utveckling
//               <br />
//               TypeScript
//               <br />
//               SASS, BOOTSTRAP
//               <br />
//               Express
//               <br />
//               SQL
//               <br />
//               SQLite, Node.js
//               <br />
//               MongoDB, Mongosse
//               <br />
//               Websocket
//             </ColumnText>
//           </TableColumn>
//         </TableRow>
//       </tbody>
//     </Table>
//   )
// }

// const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   margin: 0 0 0.8rem 0;
// `

// const TableRow = styled.tr`
//   &:nth-child(even) {
//   }
// `

// const TableColumn = styled.td`
//   text-align: left;
//   padding: 0 1rem 0.4rem 0;

//   @media (min-width: 768px) {
//     width: 50%;
//     padding: 0 0.5rem 0.4rem 0;
//   }
// `

// const ColumnHeader = styled.h3`
//   font-size: 1rem;
//   margin-bottom: 0.5rem;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `

// const ColumnText = styled.span`
//   font-size: 0.8rem;
//   line-height: 1.1rem;

//   @media (min-width: 768px) {
//     font-size: 1rem;
//   }
// `

// export default SomeSkills
// import styled from 'styled-components'

// const skills = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Vue.js',
//   'Node.js',
//   'Express',
//   'MongoDB',
//   'SQL',
// ]

// const SomeSkills = () => {
//   return (
//     <SkillsWrapper>
//       <SkillsColumn>
//         <h3>Frontend</h3>
//         <ul>
//           {skills.slice(0, 5).map((skill) => (
//             <li key={skill}>{skill}</li>
//           ))}
//         </ul>
//       </SkillsColumn>
//       <SkillsColumn>
//         <h3>Backend</h3>
//         <ul>
//           {skills.slice(5).map((skill) => (
//             <li key={skill}>{skill}</li>
//           ))}
//         </ul>
//       </SkillsColumn>
//     </SkillsWrapper>
//   )
// }

// const SkillsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `

// const SkillsColumn = styled.div`
//   flex: 1;
//   padding: 0 1rem;
//   margin-bottom: 1rem;

//   h3 {
//     text-align: center;
//     margin-bottom: 0.5rem;
//   }

//   ul {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     text-align: center;
//   }

//   li {
//     font-size: 1.2rem;
//     margin-bottom: 0.5rem;
//   }
// `

// export default SomeSkills

// import styled from 'styled-components'

// const SomeSkills = () => {
//   return (
//     <Table>
//       <tbody>
//         <TableRow>

//           <TableColumn>
//             <ColumnText>
//               HTML,
//               <br />
//               CSS
//               <br />
//               Native JavaScript
//               <br />
//               Vue.js, Vuex, Vite, Nuxt.js
//               <br />
//               UX, UI
//               <br />
//               Next.js, React: Vite, Redux
//               <br />
//             </ColumnText>
//           </TableColumn>
//           <TableColumn>
//             <ColumnText>
//               React
//               <br />
//               Agil utveckling
//               <br />
//               TypeScript
//               <br />
//               SASS, BOOTSTRAP
//               <br />
//               Express
//               <br />
//               SQL
//               <br />
//               SQLite, Node.js
//               <br />
//               MongoDB, Mongosse
//               <br />
//               Websocket
//             </ColumnText>
//           </TableColumn>
//         </TableRow>
//       </tbody>
//     </Table>
//   )
// }
// const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   margin: 0 0 0.8rem 0;
// `
// const TableRow = styled.tr`
//   &:nth-child(even) {
//   }
// `
// const TableColumn = styled.td`
//   text-align: left;
//   padding: 0 1rem 0.4rem 0;
// `
// const ColumnText = styled.span`
//   font-size: 0.8rem;
//   line-height: 1.1rem;
// `

// export default SomeSkills

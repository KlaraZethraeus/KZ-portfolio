//ex kod

function BottomNav() {
  const heading = 'PortFolio'
  return (
    <div className="App" id={heading}>
      <h1>Odla</h1>
    </div>
  )
}
export default BottomNav
// import React from 'react'
// import './styles.css'
// import QRCode from 'react-qr-code'
// import useSWR from 'swr'

// export default function App() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>

//   return (
//     <div className="App">
//       <h1>Hotspot app</h1>
//       <h2>Visitors, scan the following qr code</h2>
//       <QRCode value="as;dfj;adsf" size="250" />
//     </div>
//   )
// }

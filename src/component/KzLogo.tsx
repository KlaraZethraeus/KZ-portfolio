import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  margin-top: 4.5rem;
  /* margin-bottom: -0.8rem; */
  /* margin-right: 30px; */
`

const LogoImage = styled.img`
  height: 55px;

  /* margin-right: 10px; */
`

// const LogoText = styled.h1`
//   font-family: 'Gaegu-Light', sans-serif;
//   font-size: 2.4rem;
//   margin: 0;
// `

function KzLogo() {
  return (
    <LogoWrapper>
      <LogoImage src="/KZkub.jpg" alt="Logo" />
      {/* <LogoText>kz</LogoText> */}
    </LogoWrapper>
  )
}

export default KzLogo

// import React from 'react'
// import { View, Image, StyleSheet } from 'react-native'

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
// })

// const DisplayAnImage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.tinyLogo}
//         source={require('@expo/snack-static/react-native-logo.png')}
//       />
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       />
//       <Image
//         style={styles.logo}
//         source={{
//           uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
//         }}
//       />
//     </View>
//   )
// }

// export default DisplayAnImage

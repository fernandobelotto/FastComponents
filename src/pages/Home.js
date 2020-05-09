import React from 'react'
import { View } from 'react-native'

import Splash from '../img/splash.svg'

const Home = () => {
  return (
    <View style={{ flex: 1, margin: 0, alignItems: 'center', justifyContent: 'center' }}>
      <Splash width={400} height={900} />
    </View>
  )
}

export default Home

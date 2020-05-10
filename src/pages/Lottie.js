import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

const Lottie = () => {
  return (
    <View>
      <Text>Lottie animations yeah</Text>
      <LottieView style={{ height: 400 }} source={require('../img/animations/animation1.json')} autoPlay loop />
    </View>
  )
}

export default Lottie

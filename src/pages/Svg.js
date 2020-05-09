import SvgUri from 'react-native-svg-uri'

import React from 'react'
import { View, Text } from 'react-native'

const Svg = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ marginBottom: 50 }}>Essa é uma imagem svg</Text>
      <SvgUri
        width='200'
        height='200'
        source={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }}
      />
    </View>
  )
}

export default Svg

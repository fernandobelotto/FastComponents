import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import Video from 'react-native-video'
const sample = require('../img/videos/sample.mp4')
const VideoPlayer = () => {
  const [play, setPlay] = useState(false)

  return (
    <View>
      <Text>VideoPlayer component</Text>
      <Video
        source={sample}
        style={{ height: 200, width: 350, margin: 20 }}
        paused={play}
      />
      <Button title='pause' onPress={() => setPlay(!play)} style={{ marginTop: 200 }} />
    </View>
  )
}

export default VideoPlayer

import React, { useRef } from 'react'
import { Animated, Button, View, Text, StyleSheet } from 'react-native'

const Animation = () => {
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start()
  }
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,

      duration: 1000
    }).start()
  }

  const moveLeft = () => {
    Animated.timing(Anim, {
      toValue: 0,
      duration: 1000
    }).start()
  }
  const moveRight = () => {
    Animated.timing(Anim, {
      toValue: 200,
      duration: 1000
    }).start()
  }

  const fadeAnim = useRef(new Animated.Value(0)).current
  const Anim = useRef(new Animated.Value(0)).current
  return (
    <View>
      <Text>Fade in and out Animation</Text>
      <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
        <Text>Fading View</Text>
        <View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title='Fade In' onPress={fadeIn} />
        <Button title='Fade Out' onPress={fadeOut} />
      </View>
      <Text>Move animation</Text>
      <Animated.View style={[styles.moveContainer, { left: Anim }]}>
        <Text>Animation view</Text>
        <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title='Left' onPress={moveLeft} />
        <Button title='Right' onPress={moveRight} />
      </View>
    </View>
  )
}

export default Animation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue'
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10
  },
  moveContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
})

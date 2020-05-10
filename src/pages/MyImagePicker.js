import React, { useState } from 'react'
import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

const MyImagePicker = () => {
  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  }
  function handleImage() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const images = { uri: response.uri }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setSource({
          avatarSource: images
        })
      }
    })
  }

  const [source, setSource] = useState({})
  return (
    <View>
      <Text>Image Picker Component</Text>
      <Image source={source.avatarSource} style={{ height: 100, width: 100 }} />
      <Button title='image picker' onPress={() => handleImage()} />
    </View>
  )
}

export default MyImagePicker

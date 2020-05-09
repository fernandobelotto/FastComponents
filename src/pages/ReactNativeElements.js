import React, { useState } from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native'
import { Avatar, Badge, Button, Icon, ButtonGroup, Card, Divider, CheckBox, Header, Input, Overlay, PricingCard, AirbnbRating, SearchBar, Slider } from 'react-native-elements'

const ReactNativeElements = () => {
  const [visible, setVisible] = useState(false)
  const [term, setTerm] = useState('')
  const [value, setValue] = useState(0)
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#e4e4e4' }}>
      <Text>React Native Elements</Text>
      <Text>Avatars</Text>
      <View style={{ flexDirection: 'row' }}>

        <Avatar
          size={100}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
          }}
          showAccessory
        />
        <Avatar
          size={100}
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
          }}
        />

        <Avatar
          size='medium'
          overlayContainerStyle={{ backgroundColor: 'blue' }}
          icon={{ name: 'meetup', color: 'red', type: 'font-awesome' }}
        />
        <Avatar
          size='large'
          icon={{ name: 'rocket', color: 'blue', type: 'font-awesome' }}
          overlayContainerStyle={{ backgroundColor: 'white' }}
        />
      </View>
      <Text>Badge</Text>
      <Text>Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.</Text>
      <Badge value='99+' status='error' />
      <Badge value={<Text>My Custom Badge</Text>} />
      <Badge status='success' />
      <Badge status='error' />
      <Badge status='primary' />
      <Badge status='warning' />
      <Text>Buttons</Text>
      <Button
        title='Solid Button'
      />

      <Button
        title='Outline button'
        type='outline'
      />

      <Button
        title='Clear button'
        type='clear'
      />
      <Button
        icon={
          <Icon
            name='arrow-back'
            size={15}
            color='white'
          />
        }
        title='Button with icon component'
      />

      <Button
        icon={{
          name: 'arrow-back',
          size: 15,
          color: 'white'
        }}
        title='Button with icon object'
      />

      <Button
        icon={
          <Icon
            name='arrow-back'
            size={15}
            color='white'
          />
        }
        iconRight
        title='Button with right icon'
      />
      <Button
        title='Loading button'
        loading
      />
      <Text>ButtonGroup</Text>
      <Text>ButtonGroup is a linear set of segments, each of which function as a button that can display a different view. Use a ButtonGroup to offer choices that are closely related but mutually exclusive.</Text>
      <ButtonGroup
        onPress={() => console.log('hi')}
        // index of the button selected
        selectedIndex={2}
        // array of buttons
        buttons={[<Text>Hello</Text>, <Text>Hello</Text>, <Text>Hello</Text>]}
        containerStyle={{ height: 50 }}
      />
      <Text>Card</Text>
      <Text>Cards are a great way to display information, usually containing content and actions about a single subject. Cards can contain images, buttons, text and more.</Text>
      <Card title='CARD WITH DIVIDER'>
        <View key={1}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode='cover'
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
          />
          <Text>Card</Text>
        </View>
      </Card>
      <Text>CheckBox</Text>
      <Text>CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings on or off. It provides a clear visual of either a true or false choice.</Text>
      <CheckBox
        center
        title='Click Here to Remove This Item'
        iconRight
        iconType='material'
        checkedIcon='clear'
        uncheckedIcon='add'
        checkedColor='red'
        checked
      />
      <CheckBox
        center
        title='Click Here to Remove This Item'
        iconRight
        iconType='material'
        checkedIcon='clear'
        uncheckedIcon='add'
        checkedColor='red'
        checked={false}
      />
      <CheckBox
        center
        title='Click Here'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked
      />
      <Text>Dividers</Text>
      <Text>Dividers are visual separators of content. Use Divider when you want to make a distinction between sections of content.</Text>
      <Divider style={{ backgroundColor: 'blue' }} />
      <Text>Header</Text>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Header
        placement='left'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Text>Icons</Text>
      <View style={{ flexDirection: 'row' }}>

        <Icon
          name='rowing'
        />

        <Icon
          name='g-translate'
          color='#00aced'
        />

        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        />

        <Icon
          reverse
          name='ios-american-football'
          type='ionicon'
          color='#517fa4'
        />

        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('hello')}
        />
      </View>
      <Text>Image</Text>
      <Text>Drop-in replacement for the standard React Native Image component that displays images with a placeholder and smooth image load transitioning.</Text>
      <Image
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}
        style={{ width: 100, height: 100 }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Text>Input</Text>
      <Text>Inputs allow users to enter text into a UI. They typically appear in forms and dialogs.</Text>
      <Input
        placeholder='BASIC INPUT'
      />

      <Input
        placeholder='INPUT WITH ICON'
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      />

      <Input
        placeholder='INPUT WITH CUSTOM ICON'
        leftIcon={
          <Icon
            name='group'
            size={24}
            color='black'
          />
        }
      />

      <Input
        placeholder='Comment'
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
      />

      <Input
        placeholder='INPUT WITH ERROR MESSAGE'
        errorStyle={{ color: 'red' }}
        errorMessage='ENTER A VALID ERROR HERE'
      />
      <Input placeholder='Password' secureTextEntry />
      <Text>Input</Text>
      <View>
        <Button title='Open Overlay' onPress={() => setVisible(!visible)} />
        <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
          <Text>Hello from Overlay!</Text>
        </Overlay>
      </View>
      <Text>Pricing</Text>
      <Text>Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way.</Text>
      <PricingCard
        color='#4f9deb'
        title='Free'
        price='$0'
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
      />
      <Text>Rating</Text>
      <Text>Ratings are used to collect measurable feedback from users. Use Rating over an Input where imagery can increase user interaction.</Text>
      <AirbnbRating />
      <AirbnbRating
        useNativeDriver
        count={11}
        reviews={['Terrible', 'Bad', 'Meh', 'OK', 'Good', 'Hmm...', 'Very Good', 'Wow', 'Amazing', 'Unbelievable', 'Jesus']}
        defaultRating={11}
        size={20}
      />
      <Text>SearchBar</Text>
      <Text>SearchBars are used to search or filter items. Use a SearchBar when the number of items directly impacts a user's ability to find one of them.</Text>
      <SearchBar
        placeholder='Type Here...'
        onChangeText={(text) => { setTerm(text) }}
        value={term}
      />
      <SearchBar
        placeholder='Type Here...'
        onChangeText={(text) => { setTerm(text) }}
        value={term}
        lightTheme
      />
      <Text>Slider</Text>
      <Text>Sliders allow users to select a value from a fixed set of options.</Text>
      {/* <Slider
        value={value}
        onValueChange={value => setValue(value)}
      />
      <Text>{value}</Text> */}
    </ScrollView>
  )
}

export default ReactNativeElements

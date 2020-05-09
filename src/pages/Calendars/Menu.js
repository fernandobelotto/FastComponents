import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Menu = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', margin: 20 }}>
      <Text style={styles.text}>My Calendar</Text>
      <Button title='go to Calendar' onPress={() => navigation.navigate('MyCalendar')} />
      <Text style={styles.text}>My Agenda</Text>
      <Button title='go to Agenda' onPress={() => navigation.navigate('MyAgenda')} />
      <Text style={styles.text}>My Calendar List</Text>
      <Button title='go to Calendar List' onPress={() => navigation.navigate('MyCalendarList')} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 20
  }
})
export default Menu

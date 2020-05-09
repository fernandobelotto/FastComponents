import React from 'react'
import MyAgenda from './MyAgenda'
import MyCalendar from './MyCalendar'
import MyCalendarList from './MyCalendarList'
import { createStackNavigator } from '@react-navigation/stack'
import Menu from './Menu'

const Stack = createStackNavigator()
const CalendarsStack = () => {
  return (
    <Stack.Navigator initialRouteName='Calendars'>
      <Stack.Screen name='Calendars' component={Menu} />
      <Stack.Screen name='MyAgenda' component={MyAgenda} />
      <Stack.Screen name='MyCalendar' component={MyCalendar} />
      <Stack.Screen name='MyCalendarList' component={MyCalendarList} />
    </Stack.Navigator>
  )
}

export default CalendarsStack

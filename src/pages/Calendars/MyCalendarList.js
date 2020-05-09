import React from 'react'
import { View } from 'react-native'
import { CalendarList } from 'react-native-calendars'

const MyCalendarList = () => {
  return (
    <View>
      <CalendarList
        // Enable horizontal scrolling, default = false
        horizontal
        // Enable paging on horizontal, default = false
        pagingEnabled
        // Set custom calendarWidth.
        calendarWidth={320}
      />
    </View>
  )
}

export default MyCalendarList

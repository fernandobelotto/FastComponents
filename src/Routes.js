import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Svg from './pages/Svg'
import CalendarsStack from './pages/Calendars/CalendarsStack'
import Home from './pages/Home'
import MyCollapsible from './pages/Collapsible'
import ReactNativeElements from './pages/ReactNativeElements'
import ReactNativePaper from './pages/ReactNativePaper'
import DeckSwiper from './pages/DeckSwiper'
import Lottie from './pages/Lottie'
import Chat from './pages/Chat'
import Camera from './pages/Camera'

const Drawer = createDrawerNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={{ width: '60%' }}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='React Native Elements' component={ReactNativeElements} />
        <Drawer.Screen name='React Native Paper' component={ReactNativePaper} />
        <Drawer.Screen name='Collapsible' component={MyCollapsible} />
        <Drawer.Screen name='DeckSwiper' component={DeckSwiper} />
        <Drawer.Screen name='SVG' component={Svg} />
        <Drawer.Screen name='Calendars' component={CalendarsStack} />
        <Drawer.Screen name='Chat' component={Chat} />
        <Drawer.Screen name='Camera' component={Camera} />
        <Drawer.Screen name='Lottie' component={Lottie} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

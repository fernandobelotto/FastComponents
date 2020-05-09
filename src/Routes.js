import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Svg from './pages/Svg'
import Home from './pages/Home'
import MyCollapsible from './pages/Collapsible'
import ReactNativeElements from './pages/ReactNativeElements'
import ReactNativePaper from './pages/ReactNativePaper'
import DeckSwiper from './pages/DeckSwiper'

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
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

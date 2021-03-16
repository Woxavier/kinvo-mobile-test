import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import {
  HomeScreen,
  FundsScreen,
  PensionsScreen,
  StockScreen
} from '../screens'

import Routes from './routes'

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Funds}
        component={FundsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Pensions}
        component={PensionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Stocks}
        component={StockScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

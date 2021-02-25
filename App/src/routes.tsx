import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import FundsScreen from './screens/FundsScreen'
import PensionsScreen from './screens/PensionsScreen'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Desafio">
      <Stack.Screen
        name="Desafio"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fundos"
        component={FundsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Previdencia"
        component={PensionsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

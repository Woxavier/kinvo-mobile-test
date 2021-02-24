import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from './screens/Home'
import Founds from './screens/Founds'
import Pensions from './screens/Pensions'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Desafio">
      <Stack.Screen
        name="Desafio"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fundos"
        component={Founds}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Previdencia"
        component={Pensions}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

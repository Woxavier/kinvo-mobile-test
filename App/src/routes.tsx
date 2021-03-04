import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen, FundsScreen, PensionsScreen, StockScreen } from './screens'

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
      <Stack.Screen
        name="Ações"
        component={StockScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

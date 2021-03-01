import React from 'react'
import Presentational from './presentational'

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function HomeScreen({ navigation }: any) {
  function onPressNavigateToScreens(screen: string) {
    navigation.navigate(screen)
  }

  return React.createElement(Presentational, {
    onPressNavigateToScreens
  })
}

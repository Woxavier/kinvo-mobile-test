//Dependencies
import React from 'react'
import Presentational from './presentational'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PensionsScreen({ navigation }: any) {
  function onPressNavigateToHome() {
    navigation.navigate('Home')
  }

  return React.createElement(Presentational, {
    onPressNavigateToHome
  })
}

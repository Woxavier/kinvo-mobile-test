//Dependencies
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

//Styles
import colors from '../../styles/colors'
import { createStyles } from './styles'

export default function Presentational() {
  const styles = createStyles

  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={colors.purple} />
    </View>
  )
}

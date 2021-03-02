//Dependencies
import React from 'react'
import { Text, View } from 'react-native'

//Styles
import { createStyles } from './styles'

interface PropsTitle {
  title: string
}

export default function Presentational({ title }: PropsTitle) {
  const styles = createStyles
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

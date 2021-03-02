//Dependencies
import React from 'react'

//Styles
import { createStyles } from './styles'

import { AntDesign } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface PropsHeader {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPress: any
}

export default function Presentational({ title, onPress }: PropsHeader) {
  const styles = createStyles

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="left" size={20} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

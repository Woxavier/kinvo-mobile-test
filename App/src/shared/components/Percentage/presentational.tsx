//Dependencies
import React from 'react'

//Styles
import { createStyles } from './styles'

//Components
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

interface PropsPercentage {
  value: number
  color: string
}

export default function Percentage({ value, color }: PropsPercentage) {
  const style = createStyles

  if (value == 0) {
    return <Text style={style.valueZero}>{value}%</Text>
  } else if (value < 0) {
    return (
      <View style={style.container}>
        <Feather style={{ color: color }} name="arrow-down" size={20} />
        <Text style={{ color: color, fontWeight: 'bold' }}>{value}%</Text>
      </View>
    )
  } else {
    return (
      <View style={style.container}>
        <AntDesign name="arrowup" size={20} style={{ color: color }} />
        <Text style={{ color: color, fontWeight: 'bold' }}>{value}%</Text>
      </View>
    )
  }
}

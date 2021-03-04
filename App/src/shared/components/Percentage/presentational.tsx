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
  status: number
}

const style = createStyles

function PositivePercentage({ value, status }: PropsPercentage) {
  if (status === 2) {
    return (
      <View style={style.container}>
        <AntDesign name="arrowup" size={20} style={style.valueZero} />
        <Text style={style.valueZero}>{value}%</Text>
      </View>
    )
  }

  return (
    <View style={style.container}>
      <AntDesign name="arrowup" size={20} style={style.positivePercentage} />
      <Text style={style.positivePercentage}>{value}%</Text>
    </View>
  )
}

function NegativePercentage({ value, status }: PropsPercentage) {
  if (status === 2) {
    return (
      <View style={style.container}>
        <Feather style={style.valueZero} name="arrow-down" size={20} />
        <Text style={style.valueZero}>{value}%</Text>
      </View>
    )
  }

  return (
    <View style={style.container}>
      <Feather style={style.negativePercentage} name="arrow-down" size={20} />
      <Text style={style.negativePercentage}>{value}%</Text>
    </View>
  )
}

export default function Presentational({ value, status }: PropsPercentage) {
  if (value === 0) {
    return <Text style={style.valueZero}>{value}%</Text>
  }

  if (value < 0) {
    return <NegativePercentage status={status} value={value} />
  }

  return <PositivePercentage status={status} value={value} />
}

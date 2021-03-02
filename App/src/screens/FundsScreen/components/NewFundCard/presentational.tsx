//Dependencies
import React from 'react'

//Styles
import colors from '../../../../shared/styles/colors'
import { creatStyles } from './styles'

//Components
import {
  NewOrClosedLabel,
  Percentage,
  Rating
} from '../../../../shared/components'
import { Text, View } from 'react-native'

interface CardProps {
  dados: {
    name: string
    type: string
    minimumValue: number
    rating: number
    profitability: number
    status: number
  }
}

export default function Presentational({ dados }: CardProps) {
  const styles = creatStyles
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleView}>
          <Text
            style={{
              ...styles.title,
              color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
            }}
          >
            {dados.name}
          </Text>
          <Text
            style={{
              ...styles.subTitle,
              color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
            }}
          >
            {dados.type}
          </Text>
        </View>

        <NewOrClosedLabel status={dados.status} />
      </View>

      <View style={styles.divTitle} />

      <View style={styles.main}>
        <Text
          style={{
            ...styles.infos,
            color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
          }}
        >
          Classificação:{' '}
        </Text>

        <Rating
          color={dados.status == 2 ? colors.lightGrey : colors.yellow}
          value={dados.rating}
        />
      </View>

      <View style={styles.main}>
        <Text
          style={{
            ...styles.infos,
            color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
          }}
        >
          Valor mínimo:{' '}
        </Text>

        <Text
          style={{
            ...styles.infos,
            color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
          }}
        >
          R$ {dados.minimumValue},00
        </Text>
      </View>

      <View style={styles.main}>
        <Text
          style={{
            ...styles.infos,
            color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
          }}
        >
          Rentabilidade:{' '}
        </Text>

        <Percentage
          color={
            dados.status == 2
              ? colors.lightGrey
              : dados.profitability < 0
              ? colors.orange
              : colors.green
          }
          value={dados.profitability}
        />
      </View>
    </View>
  )
}

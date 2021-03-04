//Dependencies
import React from 'react'

//Styles
import colors from '../../../../shared/styles/colors'
import { creatStyles } from './styles'

//Components
import { NewOrClosedLabel, Percentage } from '../../../../shared/components'
import Rating from '../Rating'
import { Text, View } from 'react-native'

interface CardProps {
  fund: {
    name: string
    type: string
    minimumValue: number
    rating: number
    profitability: number
    status: number
  }
}

const styles = creatStyles

function Header({ fund }: CardProps) {
  const titleStyles = {
    ...styles.title,
    color: fund.status === 2 ? colors.lightGrey : colors.DarkGrey
  }

  const subTitleStyles = {
    ...styles.subTitle,
    color: fund.status === 2 ? colors.lightGrey : colors.DarkGrey
  }

  return (
    <View style={styles.header}>
      <View style={styles.titleView}>
        <Text style={titleStyles}>{fund.name}</Text>
        <Text style={subTitleStyles}>{fund.type}</Text>
      </View>

      <NewOrClosedLabel status={fund.status} />
    </View>
  )
}

function Main({ fund }: CardProps) {
  const infoStyles = {
    ...styles.infos,
    color: fund.status === 2 ? colors.lightGrey : colors.DarkGrey
  }

  return (
    <>
      <View style={styles.main}>
        <Text style={infoStyles}>Classificação: </Text>

        <Rating value={fund.rating} status={fund.status} />
      </View>

      <View style={styles.main}>
        <Text style={infoStyles}>Valor mínimo: </Text>

        <Text style={infoStyles}>R$ {fund.minimumValue},00</Text>
      </View>

      <View style={styles.main}>
        <Text style={infoStyles}>Rentabilidade: </Text>

        <Percentage status={fund.status} value={fund.profitability} />
      </View>
    </>
  )
}

export default function Presentational({ fund }: CardProps) {
  return (
    <View style={styles.container}>
      <Header fund={fund} />
      <View style={styles.divTitle} />
      <Main fund={fund} />
    </View>
  )
}

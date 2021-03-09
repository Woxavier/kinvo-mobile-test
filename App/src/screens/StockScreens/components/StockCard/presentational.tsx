//Dependecies
import React from 'react'

//Components
import { Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

//Styles
import { createStyles } from './styles'
import { Percentage } from '../../../../shared/components'

const styles = createStyles

interface StocksInterface {
  stocks: {
    id: number
    name: string
    ticker: string
    minimumValue: number
    profitability: number
    isFavorite: boolean
  }
  onPress: () => void
}

export default function Presentational({ stocks, onPress }: StocksInterface) {
  function Favorite() {
    if (stocks.isFavorite) {
      return <AntDesign name="heart" size={20} color="purple" />
    }

    return <AntDesign name="hearto" size={20} color="purple" />
  }

  function Header() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>{stocks.name}</Text>
            <Text style={styles.subtitle}>{stocks.ticker}</Text>
          </View>

          <TouchableOpacity onPress={onPress}>
            <Favorite />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function DivCard() {
    return <View style={styles.div} />
  }

  function MinimumValueInfo() {
    return (
      <View style={styles.infosContainer}>
        <Text style={styles.infosText}>Valor mínimo: </Text>

        <Text style={{ ...styles.infosText, fontWeight: 'bold' }}>
          R$ {stocks.minimumValue}
        </Text>
      </View>
    )
  }

  function ProfitabilityInfo() {
    return (
      <View style={styles.infosContainer}>
        <Text style={styles.infosText}>Rentabilidade: </Text>

        <Percentage status={0} value={stocks.profitability} />
      </View>
    )
  }

  function Main() {
    return (
      <View>
        <MinimumValueInfo />

        <ProfitabilityInfo />
      </View>
    )
  }

  return (
    <View style={styles.contanier}>
      <Header />

      <DivCard />

      <Main />
    </View>
  )
}

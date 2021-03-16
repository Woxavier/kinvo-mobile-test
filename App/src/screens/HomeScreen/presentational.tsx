/* eslint-disable @typescript-eslint/no-explicit-any */
//Dependencies
import React from 'react'

//Components
import NavigationScreensCard from './components/NavigationScreensCard'

//Styles
import { createStyles } from './styles'

//Assets
import { Funds, Pension, Actions } from '../../assets'
import { Text, View } from 'react-native'
import Routes from '../../navigation/routes'

export default function Presentational({ onPressNavigateToScreens }: any) {
  const styles = createStyles

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Title}>Desafio</Text>
      </View>

      <NavigationScreensCard
        isNewBolder={false}
        title="Ações"
        info="Nacionais"
        img={Actions}
        onPress={() => onPressNavigateToScreens(Routes.Stocks)}
      />
      <NavigationScreensCard
        title="Fundos"
        info="De investimentos"
        img={Funds}
        onPress={() => onPressNavigateToScreens(Routes.Funds)}
        isNewBolder={true}
      />
      <NavigationScreensCard
        title="Previdências"
        info="Privadas"
        img={Pension}
        onPress={() => onPressNavigateToScreens(Routes.Pensions)}
        isNewBolder={false}
      />
    </View>
  )
}

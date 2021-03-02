//Dependencies
import React from 'react'

//Components
import NavigationScreensCard from './components/NavigationScreensCard'

//Styles
import { createStyles } from './styles'

//Assets
import { Funds, Pension, Actions } from '../../assets'
import { Text, View } from 'react-native'

export default function Presentational({ onPressNavigateToScreens }) {
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
        onPress={() => onPressNavigateToScreens('Fundos')}
      />
      <NavigationScreensCard
        title="Fundos"
        info="De investimentos"
        img={Funds}
        onPress={() => onPressNavigateToScreens('Fundos')}
        isNewBolder={true}
      />
      <NavigationScreensCard
        title="Previdências"
        info="Privadas"
        img={Pension}
        onPress={() => onPressNavigateToScreens('Previdencia')}
        isNewBolder={false}
      />
    </View>
  )
}

//Dependencies
import React from 'react'
import { View } from 'react-native'

//Components
import ScreensHeaderNavigate from '../../shared/components/ScreensHeaderNavigate'
import PensionFilter from './PensionsFilter'

//Style
import { createStyles } from './styles'

interface Props {
  onPressNavigateToHome: () => void
}

export default function Presentational({ onPressNavigateToHome }: Props) {
  const styles = createStyles

  return (
    <>
      <ScreensHeaderNavigate
        onPress={onPressNavigateToHome}
        title="Previdência"
      />

      <View style={styles.container}>
        <View style={styles.header}>
          <PensionFilter title="SEM TAXA" />
          <PensionFilter title="R$ 100,00" />
          <PensionFilter title="D + 1" />
        </View>

        <View style={styles.div} />
      </View>
    </>
  )
}

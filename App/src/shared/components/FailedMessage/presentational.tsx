//Dependencies
import React from 'react'

//Components
import { View, Text, TouchableOpacity } from 'react-native'

//Style
import createStyles from './styles'

interface PropsError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPress: () => void
}

export default function Presentational({ onPress }: PropsError) {
  const styles = createStyles

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ocorreu um erro.</Text>

      <Text style={styles.subtitle}>
        Não foi possível conectar ao banco de fundos
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.bold}>TENTAR NOVAMENTE</Text>
      </TouchableOpacity>
    </View>
  )
}

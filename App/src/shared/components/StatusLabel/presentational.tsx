//Dependencies
import React from 'react'
import { Text, View } from 'react-native'

//Styles
import { createStyles } from './styles'

interface PropStatus {
  status: number
}

const STATUS = {
  NEW: 1,
  CLOSED: 2
}

export default function Presentational({ status }: PropStatus) {
  const styles = createStyles

  if (status == STATUS.NEW) {
    return (
      <View style={styles.containerNew}>
        <Text style={styles.text}>Novo</Text>
      </View>
    )
  } else if (status == STATUS.CLOSED) {
    return (
      <View style={styles.containerClosed}>
        <Text style={styles.text}>Fechado</Text>
      </View>
    )
  } else {
    return <></>
  }
}

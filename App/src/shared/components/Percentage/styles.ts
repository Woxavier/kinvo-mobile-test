import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export const createStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  valueZero: {
    fontWeight: 'bold',
    color: colors.enabled
  },
  positivePercentage: {
    color: colors.postiveValues,
    fontWeight: 'bold'
  },
  negativePercentage: {
    color: colors.negativeValues,
    fontWeight: 'bold'
  }
})

import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export const createStyles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  valueZero: {
    fontWeight: 'bold',
    color: colors.lightGrey
  },
  positivePercentage: {
    color: colors.green,
    fontWeight: 'bold'
  },
  negativePercentage: {
    color: colors.orange,
    fontWeight: 'bold'
  }
})

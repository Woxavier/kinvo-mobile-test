import { StyleSheet } from 'react-native'
import colors from '../../../shared/styles/colors'

export const createStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    width: 100,
    alignItems: 'center'
  },
  title: {
    color: colors.DarkGrey,
    fontWeight: 'bold'
  }
})

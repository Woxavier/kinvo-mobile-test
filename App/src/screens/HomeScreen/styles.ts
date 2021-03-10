import { StyleSheet } from 'react-native'
import colors from '../../shared/styles/colors'

export const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center'
  },
  header: {
    height: 120,
    backgroundColor: '#fff',
    width: '100%',
    padding: 30,
    justifyContent: 'center'
  },
  Title: {
    fontWeight: 'bold',
    color: colors.favorite,
    fontSize: 25
  }
})

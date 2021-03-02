import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export const createStyles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#fff',
    padding: 30,
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    color: colors.purple,
    fontSize: 25
  },
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.purple,
    marginRight: 20
  }
})

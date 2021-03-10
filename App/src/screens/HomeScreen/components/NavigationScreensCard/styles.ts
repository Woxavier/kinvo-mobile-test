import { StyleSheet } from 'react-native'
import colors from '../../../../shared/styles/colors'

export const createStyles = StyleSheet.create({
  container: {
    width: '90%',
    height: 150,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    textAlign: 'center'
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 10
  },
  bold: {
    color: colors.favorite,
    fontWeight: 'bold',
    fontSize: 18
  },
  info: {
    color: colors.bold,
    fontSize: 14
  },
  imgContainer: {
    padding: 20,
    backgroundColor: colors.background,
    width: 80,
    borderRadius: 50,
    alignItems: 'center'
  }
})

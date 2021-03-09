import { StyleSheet } from 'react-native'
import colors from '../../../../shared/styles/colors'

export const createStyles = StyleSheet.create({
  contanier: {
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    elevation: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerLeft: {
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold',
    color: colors.DarkGrey,
    fontSize: 19
  },
  subtitle: {
    color: colors.DarkGrey,
    fontWeight: 'bold'
  },
  div: {
    height: 1,
    opacity: 100,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#DCDCDC'
  },
  infosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  infosText: {
    color: colors.DarkGrey
  }
})

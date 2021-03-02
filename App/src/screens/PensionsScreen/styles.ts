import { StyleSheet } from 'react-native'
import colors from '../../shared/styles/colors'

export const createStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  div: {
    marginTop: 30,
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGrey
  }
})

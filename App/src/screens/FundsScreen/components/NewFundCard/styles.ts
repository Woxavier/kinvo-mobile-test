import { StyleSheet } from 'react-native'
import colors from '../../../../shared/styles/colors'

export const creatStyles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 20
  },
  header: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 5
  },
  titleView: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 20,
    color: colors.DarkGrey,
    fontWeight: 'bold',
    marginRight: 30
  },
  subTitle: {
    fontSize: 14,
    color: colors.DarkGrey,
    fontWeight: 'bold'
  },
  divTitle: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray,
    marginTop: 10,
    marginBottom: 20
  },
  main: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 20
  },
  infos: {
    color: colors.DarkGrey,
    fontSize: 12,
    fontWeight: 'bold'
  },
  minimum: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.DarkGrey
  }
})

import { StyleSheet } from 'react-native'
import colors from '../../../../shared/styles/colors'

export const creatStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10
  },
  header: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10
  },
  titleView: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 19,
    color: colors.DarkGrey,
    fontWeight: 'bold',
    marginRight: 30
  },
  subTitle: {
    fontSize: 13,
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
    paddingBottom: 15
  },
  infos: {
    color: colors.DarkGrey
  },
  minimum: {
    fontWeight: 'bold',
    color: colors.DarkGrey
  }
})

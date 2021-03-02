// import styled from 'styled-components/
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const createStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    padding: 50
  },
  title: {
    color: colors.DarkGrey,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  subtitle: {
    color: colors.DarkGrey,
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    width: '80%',
    padding: 10,
    backgroundColor: colors.purple,
    alignItems: 'center',
    borderRadius: 20
  },
  bold: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default createStyles

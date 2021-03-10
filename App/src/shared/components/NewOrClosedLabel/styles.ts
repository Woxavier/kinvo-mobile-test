// import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export const createStyles = StyleSheet.create({
  containerNew: {
    padding: 5,
    backgroundColor: colors.newLabel,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 20
  },
  containerClosed: {
    padding: 5,
    backgroundColor: colors.bold,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

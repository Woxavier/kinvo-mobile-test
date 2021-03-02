// import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export const createStyles = StyleSheet.create({
  containerNew: {
    padding: 5,
    backgroundColor: colors.aqua,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  containerClosed: {
    padding: 5,
    backgroundColor: colors.DarkGrey,
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

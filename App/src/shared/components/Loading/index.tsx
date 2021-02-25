//Dependencies
import React from 'react'
import { ActivityIndicator } from 'react-native'

//Styles
import colors from '../../styles/colors'
import { LoadingContainer } from './styles'

export default function Loading() {
  return (
    <LoadingContainer>
      <ActivityIndicator size={80} color={colors.purple} />
    </LoadingContainer>
  )
}

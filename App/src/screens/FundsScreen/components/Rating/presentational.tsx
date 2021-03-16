//Dependencies
import React from 'react'

//Components
import { Entypo } from '@expo/vector-icons'

//Styles
import { createStyles } from './styles'
import { View } from 'react-native'
import colors from '../../../../shared/styles/colors'

interface Props {
  starsRatingValue: Array<number>
  starCompleteRatingValue: Array<number>
  status: number
}

const styles = createStyles

function FundClosed({ starsRatingValue, starCompleteRatingValue }: Props) {
  return (
    <View style={styles.container}>
      {starsRatingValue.map((value: number) => {
        return (
          <Entypo name="star" size={24} color={colors.enabled} key={value} />
        )
      })}

      {starCompleteRatingValue.map((value: number) => {
        return (
          <Entypo
            name="star-outlined"
            size={24}
            color={colors.enabled}
            key={value}
          />
        )
      })}
    </View>
  )
}

function FundOpen({ starsRatingValue, starCompleteRatingValue }: Props) {
  return (
    <View style={styles.container}>
      {starsRatingValue.map((value: number) => {
        return <Entypo name="star" size={24} color={colors.star} key={value} />
      })}

      {starCompleteRatingValue.map((value: number) => {
        return (
          <Entypo
            name="star-outlined"
            size={24}
            color={colors.star}
            key={value}
          />
        )
      })}
    </View>
  )
}

export default function Presentational({
  status,
  starsRatingValue,
  starCompleteRatingValue
}: Props) {
  if (status === 2)
    return (
      <FundClosed
        status={status}
        starsRatingValue={starsRatingValue}
        starCompleteRatingValue={starCompleteRatingValue}
      />
    )

  return (
    <FundOpen
      status={status}
      starsRatingValue={starsRatingValue}
      starCompleteRatingValue={starCompleteRatingValue}
    />
  )
}

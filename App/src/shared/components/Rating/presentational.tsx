//Dependencies
import React from 'react'

//Components
import { Entypo } from '@expo/vector-icons'

//Styles
import { Container } from './styles'

interface Props {
  starsRatingValue: Array<number>
  starCompleteRatingValue: Array<number>
  color: string
}

export default function Presentational({
  starsRatingValue,
  starCompleteRatingValue,
  color
}: Props) {
  return (
    <Container>
      {starsRatingValue.map((value: number) => {
        return <Entypo name="star" size={24} color={color} key={value} />
      })}

      {starCompleteRatingValue.map((value: number) => {
        return (
          <Entypo name="star-outlined" size={24} color={color} key={value} />
        )
      })}
    </Container>
  )
}

//Dependecies
import React, { useEffect, useState } from 'react'

import Presentational from './presentational'

interface ratingProps {
  value: number
  status: number
}

export default function Rating({ value, status }: ratingProps) {
  const [starsRatingValue, setStarsRatingValue] = useState<Array<number>>([])
  // eslint-disable-next-line prettier/prettier
  const [starCompleteRatingValue, setStarCompleteRatingValue] = useState<Array<number>>([])

  useEffect(() => {
    const ratingValue: Array<number> | null = []
    for (let i = 1; i <= value; i++) {
      ratingValue.push(i)
    }

    setStarsRatingValue(ratingValue)

    const completeRatingValue: Array<number> | null = []
    for (let i = 1; i <= 5 - value; i++) {
      completeRatingValue.push(i)
    }

    setStarCompleteRatingValue(completeRatingValue)
  }, [])

  return React.createElement(Presentational, {
    starsRatingValue,
    starCompleteRatingValue,
    status
  })
}

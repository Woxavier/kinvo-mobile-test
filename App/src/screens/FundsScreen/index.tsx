/* eslint-disable @typescript-eslint/no-explicit-any */

// Dependencies
import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Components
// import { CardNewFund } from './components'

//Presentational
import Presentational from './presentational'

interface FundsInterface {
  name: string
  type: string
  minimumValue: number
  rating: number
  profitability: number
  status: number
}

export default function FundsScreen({ navigation }: any) {
  const [funds, setFunds] = useState<[FundsInterface]>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  function onPressNavigateToHome() {
    navigation.navigate('Desafio')
  }

  function obtainDataFunds() {
    setLoading(true)
    setError(false)
    axios
      .get('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/funds')
      .then((response) => {
        setFunds(response.data.data)
        setError(false)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }

  useEffect(() => obtainDataFunds(), [])

  function onPressRetry() {
    obtainDataFunds()
  }

  return React.createElement(Presentational, {
    onPressNavigateToHome,
    loading,
    error,
    funds,
    onPressRetry
  })
}

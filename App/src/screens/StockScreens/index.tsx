/* eslint-disable @typescript-eslint/no-explicit-any */
//Dependencies
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Presentational from './presentational'

interface StocksInterface {
  id: number
  name: string
  ticker: string
  minimumValue: number
  profitability: number
}

export default function StockScreen({ navigation }: any) {
  const [stocks, setStocks] = useState<[StocksInterface]>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  function onPressNavigateToHome() {
    navigation.navigate('Desafio')
  }

  function handleSucessGetDataStocks(dataStocks: [StocksInterface]) {
    setLoading(false)
    setStocks(dataStocks)
  }

  function handleFailedGetDataStocks() {
    setError(true)
    setLoading(false)
  }

  function onPressRetry() {
    obtainStocksData()
  }

  async function obtainStocksData() {
    setLoading(true)
    setError(false)

    const apiResponse = await axios
      .get('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks')
      .then((response) => {
        console.log(response.data.data)
        return response.data
      })
      .catch(() => 'error')

    if (apiResponse.data != undefined) {
      const { data } = apiResponse
      handleSucessGetDataStocks(data)
    } else {
      handleFailedGetDataStocks()
    }
  }

  useEffect(() => {
    obtainStocksData()
  }, [])

  return React.createElement(Presentational, {
    onPressNavigateToHome,
    loading,
    error,
    stocks,
    onPressRetry
  })
}

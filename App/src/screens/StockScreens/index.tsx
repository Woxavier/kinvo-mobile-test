/* eslint-disable @typescript-eslint/no-explicit-any */

//Dependencies
import axios from 'axios'
import React, { useEffect, useState } from 'react'

//Helpers
import { sortStocks, sortFavoritesStocks } from './helpers'

//Presentational
import Presentational from './presentational'

interface StocksInterface {
  id: number
  name: string
  ticker: string
  minimumValue: string
  profitability: number
  isFavorite: boolean
}

export default function StockScreen({ navigation }: any) {
  const [stocks, setStocks] = useState<[StocksInterface]>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [favorite, setFavorite] = useState(true)

  function onPressNavigateToHome() {
    navigation.navigate('Desafio')
  }

  function handleSucessGetDataStocks(dataStocks: [StocksInterface]) {
    const stocks = sortStocks(dataStocks)
    setStocks(stocks)
  }

  function handleFailedGetDataStocks() {
    setError(true)
  }

  function onPressRetry() {
    obtainStocks()
  }

  async function obtainStocks() {
    setLoading(true)
    setError(false)

    const apiResponse = await axios
      .get('https://d68b5a2f-8234-4863-9c81-7c8a95dff8eb.mock.pstmn.io/stocks')
      .then((response) => {
        return response.data
      })
      .catch(() => 'error')

    if (apiResponse.data != undefined) {
      const { data } = apiResponse
      handleSucessGetDataStocks(data)
    } else {
      handleFailedGetDataStocks()
    }
    setLoading(false)
  }

  function onPressHandleFavorite(value: number) {
    if (stocks[value].isFavorite) {
      stocks[value].isFavorite = false
    } else {
      stocks[value].isFavorite = true
    }

    if (favorite) {
      setFavorite(false)
    } else {
      setFavorite(true)
    }

    const orderStock = sortFavoritesStocks(stocks)
    setStocks(orderStock)
  }

  useEffect(() => {
    obtainStocks()
  }, [])

  return React.createElement(Presentational, {
    onPressNavigateToHome,
    loading,
    error,
    stocks,
    favorite,
    onPressRetry,
    onPressHandleFavorite
  })
}

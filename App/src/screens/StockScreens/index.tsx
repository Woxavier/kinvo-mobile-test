/* eslint-disable @typescript-eslint/no-explicit-any */

//Dependencies
import axios from 'axios'
import React, { useEffect, useState } from 'react'

//Navigation
import Routes from '../../navigation/routes'

//Helpers
import { sortStocks, sortFavoritesStocks } from './helpers'

//Presentational
import Presentational from './presentational'

interface Stocks {
  id: number
  name: string
  ticker: string
  minimumValue: string
  profitability: number
  isFavorite: boolean
}

export default function StockScreen({ navigation }: any) {
  const [stocks, setStocks] = useState<[Stocks]>()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  function onPressNavigateToHome() {
    navigation.navigate(Routes.Home)
  }

  function handleSucessGetDataStocks(stocksData: [Stocks]) {
    const stocks = sortStocks(stocksData)
    setStocks(stocks)
  }

  function handleFailedObtainDataStocks() {
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
      handleFailedObtainDataStocks()
    }
    setLoading(false)
  }

  function onPressHandleFavorite(index: number) {
    const stocksItem = Object.values(stocks).map((value) => {
      return value
    })

    if (stocksItem[index].isFavorite) {
      stocksItem[index].isFavorite = false
    } else {
      stocksItem[index].isFavorite = true
    }

    const orderedStock = sortFavoritesStocks(stocksItem)
    setStocks(orderedStock)
  }

  useEffect(() => {
    obtainStocks()
  }, [])

  return React.createElement(Presentational, {
    onPressNavigateToHome,
    loading,
    error,
    stocks,
    onPressRetry,
    onPressHandleFavorite
  })
}

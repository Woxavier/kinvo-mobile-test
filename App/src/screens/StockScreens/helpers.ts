/* eslint-disable @typescript-eslint/no-explicit-any */
interface StocksInterface {
  id: number
  name: string
  ticker: string
  minimumValue: any
  profitability: number
  isFavorite: boolean
}

function formatedStocksItem(stockItem: StocksInterface) {
  const { id, name, ticker, minimumValue, profitability } = stockItem
  const formattedMinimumValue = formatValue(minimumValue)

  const formattedStocks = {
    id,
    name,
    ticker,
    profitability,
    minimumValue: formattedMinimumValue,
    isFavorite: false
  }

  return formattedStocks
}

function formatedStocksAddIsFavorite(stocks: Array<StocksInterface>) {
  return stocks.map((value) => {
    return formatedStocksItem(value)
  })
}

function sortAlphabeticalStocks(stocks: Array<StocksInterface>) {
  const sortAlphabeticalStocks = stocks.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })

  return sortAlphabeticalStocks
}

export function sortStocks(stocks: Array<StocksInterface>) {
  const formatStocksItem = formatedStocksAddIsFavorite(stocks)
  const formatedStocks = sortAlphabeticalStocks(formatStocksItem)

  return formatedStocks
}

export function sortFavoritesStocks(stocks: Array<StocksInterface>) {
  const stocksData = sortAlphabeticalStocks(stocks)

  const sortFavorites = stocksData.sort((a, b) => {
    if (a.isFavorite && b.isFavorite === false) {
      return -1
    }
    if (a.isFavorite === false && b.isFavorite) {
      return 1
    }
    return 0
  })

  return sortFavorites
}

function formatValue(value: any) {
  const minimumValue = parseFloat(value).toFixed(2)
  const splitValue = minimumValue.split('.')
  const ajust = `${splitValue[0]},${splitValue[1]}`

  return ajust
}

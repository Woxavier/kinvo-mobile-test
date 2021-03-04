/* eslint-disable @typescript-eslint/no-explicit-any */
//Dependecies
import React from 'react'

//Components
import { View, FlatList } from 'react-native'
import {
  FailedMessage,
  Loading,
  ScreensHeaderNavigate
} from '../../shared/components'
import StockCard from './components/StockCard/presentational'

//Styles
import { createStyles } from './styles'

const styles = createStyles

interface Props {
  onPressNavigateToHome: () => void
  loading: boolean
  error: boolean
  stocks: any
  onPressRetry: () => void
}

const renderItem = ({ item }: any) => <StockCard stocks={item} />

export default function Presentational({
  onPressNavigateToHome,
  loading,
  error,
  stocks,
  onPressRetry
}: Props) {
  function Content() {
    if (loading) {
      return <Loading />
    }

    if (error) {
      return <FailedMessage onPress={onPressRetry} />
    }

    return (
      <FlatList
        data={stocks}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(__, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <ScreensHeaderNavigate title="Ações" onPress={onPressNavigateToHome} />

      <Content />
    </View>
  )
}

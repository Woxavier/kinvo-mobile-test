/* eslint-disable @typescript-eslint/no-explicit-any */

// Dependencies
import React from 'react'

// Components
import { CardNewFund } from './components'
import {
  FailedMessage,
  ScreensHeaderNavigate,
  Loading
} from '../../shared/components'
import { FlatList, View } from 'react-native'

//Styles
import { createStyles } from './styles'

const renderItem = ({ item }: any) => <CardNewFund dados={item} />

interface Props {
  onPressNavigateToHome: () => void
  loading: boolean
  error: boolean
  funds: any
  onPressRetry: () => void
}

const styles = createStyles

export function Presentational({
  onPressNavigateToHome,
  loading,
  error,
  funds,
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
        data={funds}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(__, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    )
  }

  return (
    <>
      <ScreensHeaderNavigate onPress={onPressNavigateToHome} title="Fundos" />
      <View style={styles.container}>
        <Content />
      </View>
    </>
  )
}

export default Presentational

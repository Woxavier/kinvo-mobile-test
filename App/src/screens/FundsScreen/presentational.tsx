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

//Styles
import { Container, Wrapper } from './styles'
import { FlatList } from 'react-native'

const renderItem = ({ item }: any) => <CardNewFund dados={item} />

interface Props {
  onPressNavigateToHome: () => void
  loading: boolean
  error: boolean
  funds: any
  onPressRetry: () => void
}

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
    <Wrapper>
      <ScreensHeaderNavigate onPress={onPressNavigateToHome} title="Fundos" />
      <Container>
        <Content />
      </Container>
    </Wrapper>
  )
}

export default Presentational

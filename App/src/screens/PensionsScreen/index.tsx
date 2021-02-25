import React from 'react'
import ScreensHeaderNavigate from '../../shared/components/ScreensHeaderNavigate'
import PensionFilter from './PensionsFilter'
import { Container, Div, Header, Wrapper } from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PensionsScreen({ navigation }: any) {
  function onPressNavigateToHome() {
    navigation.navigate('Desafio')
  }

  return (
    <Wrapper>
      <ScreensHeaderNavigate
        onPress={onPressNavigateToHome}
        title="Previdência"
      />

      <Container>
        <Header>
          <PensionFilter title="SEM TAXA" />
          <PensionFilter title="R$ 100,00" />
          <PensionFilter title="D + 1" />
        </Header>

        <Div />
      </Container>
    </Wrapper>
  )
}

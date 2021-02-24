import React from 'react'
import HeaderScreens from '../../components/HeaderScreens'
import PensionFilter from '../../components/PensionsFilter'
import { Container, Div, Header, Wrapper } from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Pensions({ navigation }: any) {
  function navigateToHome() {
    navigation.navigate('Desafio')
  }

  return (
    <Wrapper>
      <HeaderScreens onPress={navigateToHome} title="Previdência" />

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

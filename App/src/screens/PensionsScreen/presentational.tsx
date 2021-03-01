//Dependencies
import React from 'react'

//Components
import ScreensHeaderNavigate from '../../shared/components/ScreensHeaderNavigate'
import PensionFilter from './PensionsFilter'

//Style
import { Container, Div, Header, Wrapper } from './styles'

interface Props {
  onPressNavigateToHome: () => void
}

export default function Presentational({ onPressNavigateToHome }: Props) {
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

//Dependencies
import React from 'react'

//Components
import NavigationScreensCard from './components/NavigationScreensCard'

//Styles
import { Container, Header, Title } from './styles'

//Assets
import { Funds, Pension, Actions } from '../../assets'

export default function Presentational({ onPressNavigateToScreens }) {
  return (
    <Container>
      <Header>
        <Title>Desafio</Title>
      </Header>

      <NavigationScreensCard
        isNewBolder={false}
        title="Ações"
        info="Nacionais"
        img={Actions}
        onPress={() => onPressNavigateToScreens('Fundos')}
      />
      <NavigationScreensCard
        title="Fundos"
        info="De investimentos"
        img={Funds}
        onPress={() => onPressNavigateToScreens('Fundos')}
        isNewBolder={true}
      />
      <NavigationScreensCard
        title="Previdências"
        info="Privadas"
        img={Pension}
        onPress={() => onPressNavigateToScreens('Previdencia')}
        isNewBolder={false}
      />
    </Container>
  )
}

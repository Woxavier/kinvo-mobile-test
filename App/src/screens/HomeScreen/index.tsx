/* eslint-disable @typescript-eslint/no-explicit-any */

//Dependencies
import React from 'react'

//Components
import CardsNavigationScreens from './components/CardsNavigationScreens'

//Styles
import { Wrapper, Header, Title } from './styles'

//Assets
import { Funds, Pension, Actions } from '../../assets'

export default function HomeScreen({ navigation }: any) {
  function navigateToScreens(screen: string) {
    navigation.navigate(screen)
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Title>Desafio</Title>
        </Header>

        <CardsNavigationScreens
          isNewBolder={false}
          title="Ações"
          info="Nacionais"
          img={Actions}
          onPress={() => navigateToScreens('Fundos')}
        />
        <CardsNavigationScreens
          title="Fundos"
          info="De investimentos"
          img={Funds}
          onPress={() => navigateToScreens('Fundos')}
          isNewBolder={true}
        />
        <CardsNavigationScreens
          title="Previdências"
          info="Privadas"
          img={Pension}
          onPress={() => navigateToScreens('Previdencia')}
          isNewBolder={false}
        />
      </Wrapper>
    </>
  )
}

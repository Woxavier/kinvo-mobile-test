/* eslint-disable @typescript-eslint/no-explicit-any */

//Dependencies
import React from 'react'

//Components
import NavigationScreensCard from './components/NavigationScreensCard'

//Styles
import { Wrapper, Header, Title } from './styles'

//Assets
import { Funds, Pension, Actions } from '../../assets'

export default function HomeScreen({ navigation }: any) {
  function onPressnavigateToScreens(screen: string) {
    navigation.navigate(screen)
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Title>Desafio</Title>
        </Header>

        <NavigationScreensCard
          isNewBolder={false}
          title="Ações"
          info="Nacionais"
          img={Actions}
          onPress={() => onPressnavigateToScreens('Fundos')}
        />
        <NavigationScreensCard
          title="Fundos"
          info="De investimentos"
          img={Funds}
          onPress={() => onPressnavigateToScreens('Fundos')}
          isNewBolder={true}
        />
        <NavigationScreensCard
          title="Previdências"
          info="Privadas"
          img={Pension}
          onPress={() => onPressnavigateToScreens('Previdencia')}
          isNewBolder={false}
        />
      </Wrapper>
    </>
  )
}

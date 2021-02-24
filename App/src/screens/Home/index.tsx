/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'

import CardsNavigationScreens from '../../components/CardsNavigationScreens'

import { Wrapper, Header, Title } from './styles'

import Funds from '../../../assets/funds.png'
import Pension from '../../../assets/pension.png'
import Actions from '../../../assets/actions.png'

export default function Home({ navigation }: any) {
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

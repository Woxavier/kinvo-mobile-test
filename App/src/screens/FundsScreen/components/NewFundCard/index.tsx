//Dependencies
import React from 'react'

//Styles
import colors from '../../../../shared/styles/colors'
import {
  Container,
  DivTitle,
  Header,
  Infos,
  Main,
  SubTitle,
  Title,
  TitleView,
  Minimun
} from './styles'

//Components
import {
  NewOrClosedLabel,
  Percentage,
  Rating
} from '../../../../shared/components'

interface CardProps {
  dados: {
    name: string
    type: string
    minimumValue: number
    rating: number
    profitability: number
    status: number
  }
}

export default function CardNewFund({ dados }: CardProps) {
  return (
    <Container>
      <Header>
        <TitleView>
          <Title
            style={{
              color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
            }}
          >
            {dados.name}
          </Title>
          <SubTitle
            style={{
              color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
            }}
          >
            {dados.type}
          </SubTitle>
        </TitleView>

        <NewOrClosedLabel status={dados.status} />
      </Header>

      <DivTitle />

      <Main>
        <Infos
          style={{
            color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
          }}
        >
          Classificação:{' '}
        </Infos>

        <Rating
          color={dados.status == 2 ? colors.lightGrey : colors.yellow}
          value={dados.rating}
        />
      </Main>

      <Main>
        <Infos
          style={{
            color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
          }}
        >
          Valor mínimo:{' '}
        </Infos>

        <Minimun
          style={{
            color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
          }}
        >
          R$ {dados.minimumValue},00
        </Minimun>
      </Main>

      <Main>
        <Infos
          style={{
            color: dados.status == 2 ? colors.lightGrey : colors.DarkGrey
          }}
        >
          Rentabilidade:{' '}
        </Infos>

        <Percentage
          color={
            dados.status == 2
              ? colors.lightGrey
              : dados.profitability < 0
              ? colors.orange
              : colors.green
          }
          value={dados.profitability}
        />
      </Main>
    </Container>
  )
}

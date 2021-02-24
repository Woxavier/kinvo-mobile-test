/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import {
  Bold,
  Container,
  Content,
  ContentLeft,
  Img,
  ImgContainer,
  Info,
  TextContainer
} from './styles'

import { NewOrClosed } from '../NewOrClosed'

interface PropsCards {
  onPress: any
  title: string
  info: string
  img: any
  isNewBolder: boolean
}

export default function CardsNavigationScreens({
  onPress,
  title,
  info,
  img,
  isNewBolder
}: PropsCards) {
  return (
    <Container onStartShouldSetResponder={onPress}>
      <Content>
        <ContentLeft>
          <ImgContainer>
            <Img source={img}></Img>
          </ImgContainer>

          <TextContainer>
            <Bold>{title}</Bold>
            <Info>{info}</Info>
          </TextContainer>
        </ContentLeft>

        {isNewBolder ? <NewOrClosed status={1} /> : <></>}
      </Content>
    </Container>
  )
}

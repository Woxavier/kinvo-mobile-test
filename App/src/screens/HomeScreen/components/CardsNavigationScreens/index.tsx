/* eslint-disable @typescript-eslint/no-explicit-any */
//Dependencies
import React from 'react'

//Styles
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

//Components
import NewOrClosedLabel from '../../../../shared/components/NewOrClosedLabel'

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

        {isNewBolder ? <NewOrClosedLabel status={1} /> : <></>}
      </Content>
    </Container>
  )
}

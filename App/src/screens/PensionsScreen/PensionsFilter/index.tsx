//Dependencies
import React from 'react'

//Styles
import { Container, Title } from './styles'

interface PropsTitle {
  title: string
}

export default function PensionFilter({ title }: PropsTitle) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

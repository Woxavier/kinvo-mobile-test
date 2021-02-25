import React from 'react'
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

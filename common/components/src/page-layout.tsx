import { Container } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

export const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <Container maxWidth='container.lg' marginY={6}>
      {children}
    </Container>
  )
}

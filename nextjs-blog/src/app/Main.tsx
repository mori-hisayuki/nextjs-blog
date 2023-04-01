import React from 'react'
import { Container} from './common/components'

export const Main = ({children}: {children: React.ReactNode}) => (
    <Container
      as="main"
      maxW="container.lg"
      my="4"
      minH="calc(100vh - 115px - 2rem)"
    >
      {children}
    </Container>
)

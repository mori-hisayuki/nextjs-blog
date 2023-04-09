import { Center, Flex, VStack } from '@chakra-ui/react'
import { ChildrenProps } from '../@types/react'
import { Header } from './Header'

export const MainLayout: React.FC<ChildrenProps> = (props: ChildrenProps) => (
  <Center backgroundColor="green.50" minHeight="100vh" minWidth="100vw">
    <VStack
      minHeight="100vh"
      width="100%"
      maxWidth="container.lg"
      spacing="0"
      backgroundColor="white"
      shadow="md"
    >
      <Header></Header>
      {props.children}
    </VStack>
  </Center>
)

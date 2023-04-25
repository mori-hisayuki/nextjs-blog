import { ChakraProvider } from './chakra-ui'

export const Provider = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider>{children}</ChakraProvider>
)

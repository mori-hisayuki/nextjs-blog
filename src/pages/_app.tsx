import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App

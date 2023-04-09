import { ChakraProvider, Container } from '@chakra-ui/react'
import { MainLayout } from '../components/MainLayout'
import { Post } from '../interface/post'

type HomeProps = {
  posts: Array<Post>
}

const Home = ({ posts }: HomeProps) => {
  return (
    <ChakraProvider>
      <MainLayout>
        <Container maxWidth="container.md">Hallo World</Container>
      </MainLayout>
    </ChakraProvider>
  )
}

export default Home

import { Container } from '../src/components/chakra-ui'
import { MainLayout } from '../src/components/MainLayout'
import { Post } from '../src/interface/post'

type HomeProps = {
  posts: Array<Post>
}

const Home = ({ posts }: HomeProps) => {
  return (
    <MainLayout>
      <Container maxWidth="container.md">Hallo World</Container>
    </MainLayout>
  )
}

export default Home

import { Post } from '../interface/post'

type HomeProps = {
  posts: Array<Post>
}

const Home = ({ posts }: HomeProps) => {
  return <>Hallo World</>
}

export default Home

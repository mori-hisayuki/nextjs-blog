import { Container, Box, Text} from './common/components'

export const Footer = () => (
  <Box bg="gray.50" color="gray.700" as="footer">
    <Container maxW='5xl' py={4}>
      <Text as="small">2023 blog</Text>
    </Container>
  </Box>
)

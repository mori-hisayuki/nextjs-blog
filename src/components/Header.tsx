import { Flex, Heading, Link, Text } from './chakra-ui'

export const Header = () => (
  <Flex
    align="flex-end"
    padding={{ base: '2', lg: '2' }}
    justify="space-between"
    width="100%"
  >
    <Heading>
      <Link href="/" color="gray.600">
        <Text as="u" fontSize={{ base: 'large', lg: '3xl' }}>
          Life Retrospective
        </Text>
      </Link>
    </Heading>
  </Flex>
)

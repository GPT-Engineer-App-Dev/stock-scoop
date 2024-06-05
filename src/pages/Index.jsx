import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
            <Link href="#" color="white">Life & Arts</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Heading as="h2" size="2xl" mb={4}>Main Headline: Breaking News</Heading>
          <Text fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Heading as="h3" size="xl" mb={6}>Featured Articles</Heading>
          <VStack spacing={8}>
            <Box bg="gray.50" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Article Title 1</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="gray.50" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Article Title 2</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box bg="gray.50" p={6} borderRadius="md" shadow="md" w="full">
              <Heading as="h4" size="md" mb={2}>Article Title 3</Heading>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={8}>
              <Link href="#" color="white">Contact Us</Link>
              <Link href="#" color="white">Privacy Policy</Link>
              <Link href="#" color="white">Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;
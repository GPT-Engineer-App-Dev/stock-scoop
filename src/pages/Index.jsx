import { Box, Container, Flex, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box bg="gray.100" py={16}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h2" size="2xl">Main Headline</Heading>
          <Text fontSize="lg">This is the main headline section where the top news story will be featured.</Text>
        </VStack>
      </Box>

      {/* Featured Articles Section */}
      <Box py={16}>
        <Heading as="h3" size="xl" textAlign="center" mb={8}>Featured Articles</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={8} justify="center">
          <Box bg="gray.200" p={8} borderRadius="md" maxW="sm">
            <Heading as="h4" size="md" mb={4}>Article 1</Heading>
            <Text>This is a brief description of the first featured article.</Text>
          </Box>
          <Box bg="gray.200" p={8} borderRadius="md" maxW="sm">
            <Heading as="h4" size="md" mb={4}>Article 2</Heading>
            <Text>This is a brief description of the second featured article.</Text>
          </Box>
          <Box bg="gray.200" p={8} borderRadius="md" maxW="sm">
            <Heading as="h4" size="md" mb={4}>Article 3</Heading>
            <Text>This is a brief description of the third featured article.</Text>
          </Box>
        </Stack>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={8}>
        <VStack spacing={4} textAlign="center">
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
          <HStack spacing={8}>
            <Link href="#" color="white">Contact Us</Link>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
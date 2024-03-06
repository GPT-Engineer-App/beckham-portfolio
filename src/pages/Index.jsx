import React from "react";
import { Box, Container, Flex, Heading, Text, Stack, Image, Button, Icon, Link, VStack, HStack } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" minH="100vh" p={8}>
        {/* Profile Section */}
        <Box flexShrink={0}>
          <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1559004328-d65ee06c5947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEYXZpZCUyMEJlY2toYW18ZW58MHx8fHwxNzA5NzU5MzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="David Beckham" mb={{ base: 4, md: 0 }} mr={{ md: 8 }} />
        </Box>

        {/* About Section */}
        <Stack flex={1} justifyContent="center" alignItems="flex-start" spacing={6}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            David Beckham
          </Heading>
          <Text fontSize="xl">Former professional footballer, current president & co-owner of Inter Miami CF and co-owner of Salford City. Off the pitch, I'm a global ambassador for sport, father, and philanthropist.</Text>
          <HStack spacing={4}>
            <SocialButton label="Instagram" href="https://www.instagram.com/davidbeckham">
              <FaInstagram />
            </SocialButton>
            <SocialButton label="Twitter" href="https://twitter.com/davidbeckham">
              <FaTwitter />
            </SocialButton>
            <SocialButton label="Facebook" href="https://www.facebook.com/Beckham">
              <FaFacebook />
            </SocialButton>
            <SocialButton label="LinkedIn" href="https://www.linkedin.com/in/davidbeckham">
              <FaLinkedin />
            </SocialButton>
          </HStack>
        </Stack>
      </Flex>
    </Container>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <Button as={Link} href={href} isExternal size="lg" rounded="full" bg="gray.100" _hover={{ bg: "gray.200" }}>
      <Icon as={children} w={6} h={6} />
    </Button>
  );
};

export default Index;

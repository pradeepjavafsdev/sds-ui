import {
  Box,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  VStack,
  HStack,
  Link,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"; // Properly imported

const AboutUs = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="white" py={10} px={[4, 8, 16]} w="full" bgColor={"green.500"}>
      <Flex
        direction={["column", "column", "row"]}
        justify="space-between"
        align="center"
        mb={10}
        gap={10}
      >
        {/* Left Section */}
        <VStack align="flex-start" spacing={4} flex="1">
          <Heading fontSize={["2xl", "3xl"]} fontWeight="bold">
            FUELING GROWTH, <br />
            ROOTED IN QUALITY.
          </Heading>
          <HStack spacing={4}>
            <IconButton
              as={Link}
              href="https://twitter.com"
              aria-label="Twitter"
              variant="ghost"
              fontSize="20px"
            />
            <IconButton
              as={Link}
              href="https://instagram.com"
              aria-label="Instagram"
              variant="ghost"
              fontSize="20px"
            />
            <IconButton
              as={Link}
              href="https://wa.me/919437950194"
              aria-label="WhatsApp"
              variant="ghost"
              fontSize="20px"
            />
          </HStack>
        </VStack>

        {/* Middle Section */}
        <VStack flex="1" spacing={4}>
          <HStack flexWrap="wrap" spacing={3} justify="center">
            {[
              "Product",
              "About Us",
              "Contact Us",
              "Technology",
              "Partnership",
              "Testimonials",
            ].map((text) => (
              <Box
                key={text}
                px={4}
                py={2}
                bg="black"
                color="white"
                borderRadius="full"
                fontSize="sm"
              >
                {text}
              </Box>
            ))}
          </HStack>
        </VStack>

        {/* Right Section */}
        <VStack align="flex-start" spacing={1} flex="1">
          <Text fontWeight="bold">Contact</Text>
          <Text>Suryadev Seeds</Text>
          <Text>info@suryadevseeds.in</Text>
          <Text>+91 9437950194 / +91 9439693245</Text>
        </VStack>
      </Flex>

      {/* Footer */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align="center"
        borderTop="1px solid"
        borderColor="gray.200"
        pt={6}
      >
        <Text fontSize="sm">©2025 Suryadev Seeds</Text>
        <VStack
          spacing={1}
          align="start"
          cursor="pointer"
          transition="all 0.3s ease"
          transitionDelay="0.1s"
        >
          <HStack spacing={3} align="center">
            <Image
              src="/assets/logosds.png"
              alt="Logo"
              boxSize={{
                base: "50px",
                md: "70px",
              }}
              transition="all 0.3s ease"
            />
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{
                  base: "xl",
                  md: "3xl",
                }}
                transition="all 0.3s ease"
              >
                SURYADEV SEEDS
              </Text>
              <Box borderBottom="0.2px solid" borderColor="black" />
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="gray.700"
                whiteSpace="nowrap"
              >
                Improving Agriculture, Improving Lives.
              </Text>
            </Box>
          </HStack>
        </VStack>
        <HStack spacing={4}>
          <Link fontSize="sm" href="#">
            Terms and Conditions
          </Link>
          <Link fontSize="sm" href="#">
            Privacy Policy
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default AboutUs;

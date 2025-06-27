import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const scrollToWhySDS = () => {
  const element = document.getElementById("whysds");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => (
  <MotionBox
    h="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgImage="url('/assets/seedsanimation.gif')"
    bgSize="cover"
    bgPosition="center"
    bgRepeat="no-repeat"
    position="relative"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    _before={{
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      bg: "rgba(0, 0, 0, 0.4)", // dark overlay
      zIndex: 0,
    }}
  >
    <VStack spacing={7} textAlign="center" zIndex={1} color="white">
      <Heading as="h1" size="2xl">
        Building a Sustainable Future with Quality Seeds
      </Heading>
      <Text fontSize="xl">
        Committed to quality and sustainability from seed to harvest.
      </Text>
      <Button
        colorScheme="green"
        bg="green.400"
        _hover={{ bg: "green.500" }}
        onClick={scrollToWhySDS}
      >
        Learn More
      </Button>
    </VStack>
  </MotionBox>
);

export default Hero;

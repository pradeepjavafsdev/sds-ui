import {
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const farmers = [
  {
    name: "Ramesh Kumar",
    message: "Suryadev Seeds helped increase my yield by 30%.",
    image: "/assets/farmer1.jpg",
  },
  {
    name: "Sunita Devi",
    message: "Trusted quality and fast delivery – I’m impressed!",
    image: "/assets/farmer2.jpg",
  },
  {
    name: "Ajay Singh",
    message: "Healthy crops, happy harvest. Thanks SDS!",
    image: "/assets/farmer3.jpg",
  },
  {
    name: "Meena Sharma",
    message: "The best seed company I’ve worked with.",
    image: "/assets/farmer4.jpg",
  },
];

const OurHappyFarmers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % farmers.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + farmers.length) % farmers.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, []);

  const getIndexes = () => {
    const left = (currentIndex - 1 + farmers.length) % farmers.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % farmers.length;
    return [left, center, right];
  };

  const visibleIndexes = getIndexes();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      id="happy-farmers"
      bg="green.50"
      py={{ base: 12, md: 16 }}
      px={4}
      textAlign="center"
      overflowY="hidden" // 🔧 This removes vertical scroll
    >
      <Heading mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
        OUR HAPPY FARMERS
      </Heading>
      <Text mb={10} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
        Hear from the farmers who trust and grow with Suryadev Seeds
      </Text>

      <Box position="relative" maxW="960px" mx="auto" overflow="hidden">
        {/* Navigation Buttons */}
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
          onClick={prev}
          size="sm"
          borderRadius="full"
          position="absolute"
          left="2"
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          variant="solid"
          colorScheme="green"
        />

        <Box overflowX="auto" overflowY="hidden" px={2}>
          <HStack
            spacing={4}
            justify="center"
            align="center"
            minW="100%"
            overflow="visible"
            css={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {visibleIndexes.map((index, i) => {
              const farmer = farmers[index];
              const isCenter = i === 1;

              return (
                <MotionBox
                  key={farmer.name}
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  boxShadow="lg"
                  textAlign="center"
                  minW="250px"
                  maxW="250px"
                  scrollSnapAlign="center"
                  animate={{
                    scale: isCenter ? 1.05 : 0.9,
                    opacity: isCenter ? 1 : 0.6,
                    filter: isCenter ? "blur(0px)" : "blur(1px)",
                    zIndex: isCenter ? 2 : 1,
                  }}
                  transition="all 0.5s ease"
                >
                  <Image
                    src={farmer.image}
                    alt={farmer.name}
                    borderRadius="full"
                    boxSize="100px"
                    mx="auto"
                    mb={4}
                    objectFit="cover"
                  />
                  <Text fontWeight="bold" mb={2}>
                    {farmer.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {farmer.message}
                  </Text>
                </MotionBox>
              );
            })}
          </HStack>
        </Box>

        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next"
          onClick={next}
          size="sm"
          borderRadius="full"
          position="absolute"
          right="2"
          top="50%"
          transform="translateY(-50%)"
          zIndex={10}
          variant="solid"
          colorScheme="green"
        />
      </Box>
    </Box>
  );
};

export default OurHappyFarmers;

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  IconButton,
  Stack,
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
    >
      <Heading mb={4} fontSize={{ base: "2xl", md: "3xl" }}>
        OUR HAPPY FARMERS
      </Heading>
      <Text mb={10} color="gray.600" fontSize={{ base: "sm", md: "md" }}>
        Hear from the farmers who trust and grow with Suryadev Seeds
      </Text>

      <Box position="relative" maxW="960px" mx="auto">
        {!isMobile && (
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Previous"
            onClick={prev}
            size="sm"
            borderRadius="full"
            position="absolute"
            left="-10"
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            variant="solid"
            colorScheme="green"
          />
        )}

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          justify="center"
          align="center"
          overflow="hidden"
        >
          {visibleIndexes.map((index, i) => {
            const farmer = farmers[index];
            const isCenter = i === 1;

            return (
              <MotionBox
                key={farmer.name}
                bg="white"
                p={{ base: 4, md: 6 }}
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                minW={{ base: "100%", md: "250px" }}
                maxW="250px"
                transition={"0.6s ease-in-out"}
                animate={{
                  scale: isCenter ? 1.1 : 0.9,
                  opacity: isCenter ? 1 : 0.6,
                  filter: isCenter ? "blur(0px)" : "blur(1px)",
                  zIndex: isCenter ? 2 : 1,
                }}
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
        </Stack>

        {!isMobile && (
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Next"
            onClick={next}
            size="sm"
            borderRadius="full"
            position="absolute"
            right="-10"
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            variant="solid"
            colorScheme="green"
          />
        )}
      </Box>
    </Box>
  );
};

export default OurHappyFarmers;

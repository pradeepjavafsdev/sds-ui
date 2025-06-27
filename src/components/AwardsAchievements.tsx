// components/AwardsAchievements.tsx
import {
  Box,
  Heading,
  Text,
  Image,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const awards = [
  {
    title: "Best Hybrid Seeds 2022",
    image: "/assets/award1.png",
  },
  {
    title: "Excellence in AgriTech 2021",
    image: "/assets/award2.png",
  },
  {
    title: "Top Exporter Award",
    image: "/assets/award3.png",
  },
  {
    title: "Farmer's Choice 2020",
    image: "/assets/award4.png",
  },
];

const AwardsAchievements = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="awards" bg="gray.50" py={16} px={4} textAlign="center">
      <Heading mb={4}>AWARDS & ACHIEVEMENTS</Heading>
      <Text mb={10} color="gray.600">
        Recognizing our commitment to quality and innovation.
      </Text>

      <Box overflow="hidden" width="100%">
        <MotionBox
          display="flex"
          gap={6}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          {[...awards, ...awards].map((award, idx) => (
            <Box
              key={idx}
              minW={isMobile ? "200px" : "250px"}
              flexShrink={0}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              p={4}
              textAlign="center"
            >
              <Image
                src={award.image}
                alt={award.title}
                boxSize="80px"
                mx="auto"
                mb={4}
              />
              <Text fontWeight="semibold">{award.title}</Text>
            </Box>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
};

export default AwardsAchievements;

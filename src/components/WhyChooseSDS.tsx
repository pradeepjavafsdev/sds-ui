import { Box, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const reasons = [
  {
    image: "/assets/bag.png",
    text: "High-quality hybrid and OP vegetable, flower, herb and cover crop seeds.",
    bg: "orange.100",
  },
  {
    image: "/assets/field.png",
    text: "Offering organic, conventional, treated, untreated, and pelleted seeds.",
    bg: "green.100",
  },
  {
    image: "/assets/shop.png",
    text: "We trial seeds nationally to bring in top-performing products.",
    bg: "gray.100",
  },
  {
    image: "/assets/map.png",
    text: "Fast, accurate seed delivery across India.",
    bg: "green.50",
  },
];

const WhyChooseSDS = () => {
  return (
    <Box id="why-sds" py={20} px={6} bg="white">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        WHY CHOOSE OUR QUALITY SEEDS?
      </Text>
      <Text maxW="3xl" textAlign="center" mx="auto" mb={12} color="gray.600">
        Providing food for the growing global population in a safe and
        sustainable way. Our mission is to help farmers meet challenges through
        innovation and quality.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        {reasons.map((reason, i) => (
          <MotionBox
            key={i}
            bg={reason.bg}
            p={6}
            borderRadius="lg"
            boxShadow="md"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <VStack spacing={4}>
              <Image src={reason.image} boxSize="60px" alt="Icon" />
              <Text fontSize="md" textAlign="center">
                {reason.text}
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WhyChooseSDS;

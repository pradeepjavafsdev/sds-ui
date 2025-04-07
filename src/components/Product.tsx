import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Product = () => (
  <MotionBox
    p={10}
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    bg="gray.50"
  >
    <Heading mb={6}>Our Products</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      <VStack>
        <Text fontWeight="bold">Hybrid Vegetable Seeds</Text>
        <Text>High-quality hybrid seeds for maximum yield.</Text>
      </VStack>
      <VStack>
        <Text fontWeight="bold">Organic Seeds</Text>
        <Text>Certified organic seeds for sustainable farming.</Text>
      </VStack>
      <VStack>
        <Text fontWeight="bold">Cover Crops</Text>
        <Text>Improve soil health with our premium cover crop seeds.</Text>
      </VStack>
    </SimpleGrid>
  </MotionBox>
);

export default Product;

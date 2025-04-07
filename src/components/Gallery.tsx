import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Gallery = () => (
  <MotionBox
    p={10}
    bg="gray.100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <Heading mb={6}>Gallery</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
      <Image src="https://source.unsplash.com/400x300/?seeds" alt="Seeds" />
      <Image src="https://source.unsplash.com/400x300/?farming" alt="Farming" />
      <Image src="https://source.unsplash.com/400x300/?agriculture" alt="Agriculture" />
    </SimpleGrid>
  </MotionBox>
);

export default Gallery;

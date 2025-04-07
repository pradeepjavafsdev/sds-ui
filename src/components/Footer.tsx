import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="green.500" color="white" textAlign="center" py={4} mt={10}>
      <Text>&copy; {new Date().getFullYear()} SeedCo. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;

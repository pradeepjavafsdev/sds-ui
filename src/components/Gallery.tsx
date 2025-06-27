import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const imageCount = 6; // Adjust based on how many images you have
const images = Array.from({ length: imageCount }, (_, i) => ({
  src: `/assets/gallery_pic${i + 1}.jpeg`,
  alt: `Gallery Image ${i + 1}`,
}));

const Gallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleImageClick = (img: { src: string; alt: string }) => {
    setSelectedImage(img);
    onOpen();
  };

  return (
    <MotionBox
      id="gallery"
      p={{ base: 6, md: 10 }}
      bg="gray.100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Heading mb={6} fontSize={{ base: "2xl", md: "3xl" }} textAlign="center">
        Gallery
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
        {images.map((img, index) => (
          <MotionBox
            key={index}
            whileHover={{ scale: 1.05 }}
            cursor="pointer"
            onClick={() => handleImageClick(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              borderRadius="md"
              objectFit="cover"
              loading="lazy"
              w="100%"
              h="200px"
            />
          </MotionBox>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="full" motionPreset="scale">
        <ModalOverlay />
        <ModalContent
          bg="blackAlpha.800"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ModalBody position="relative" p={0}>
            <IconButton
              icon={<CloseIcon />}
              position="absolute"
              top={4}
              right={4}
              colorScheme="whiteAlpha"
              variant="ghost"
              onClick={onClose}
              zIndex={2}
              aria-label="Close"
            />
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                objectFit="contain"
                maxH="90vh"
                mx="auto"
                loading="lazy"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default Gallery;

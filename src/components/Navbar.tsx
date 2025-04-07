import {
  Box,
  HStack,
  Text,
  Button,
  Image,
  IconButton,
  useDisclosure,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const bgColor = useColorModeValue("green.600", "green.900");
  const textColor = useColorModeValue("black", "white");

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => setLogoVisible(true), 300);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      bg={bgColor}
      color={textColor}
      px={6}
      py={4}
      position="sticky"
      top={0}
      zIndex={10}
      transition="all 0.3s ease"
    >
      <HStack justify="space-between">
        {/* Logo + Brand */}
        <VStack
          spacing={1}
          align="start"
          cursor="pointer"
          onClick={() => scrollToSection("hero")}
          transition="all 0.3s ease"
          transform={logoVisible ? "scale(1)" : "scale(0.7)"}
          opacity={logoVisible ? 1 : 0}
          transitionDelay="0.1s"
        >
          <HStack spacing={3} align="center">
            <Image
              src="/assets/logosds.png"
              alt="Logo"
              boxSize={{
                base: scrolled ? "35px" : "50px",
                md: scrolled ? "45px" : "70px",
              }}
              transition="all 0.3s ease"
            />
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{
                  base: scrolled ? "lg" : "xl",
                  md: scrolled ? "2xl" : "3xl",
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

        {/* Desktop Nav */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button
            variant="link"
            fontSize="sm"
            color={textColor}
            onClick={() => scrollToSection("products")}
          >
            Products
          </Button>
          <Button
            fontSize="sm"
            variant="link"
            color={textColor}
            onClick={() => scrollToSection("about")}
          >
            About Us
          </Button>
          <Button
            fontSize="sm"
            variant="link"
            color={textColor}
            onClick={() => scrollToSection("gallery")}
          >
            Gallery
          </Button>
        </HStack>

        {/* Mobile Menu */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          variant="ghost"
          color={textColor}
          onClick={onOpen}
        />
      </HStack>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={10}>
              <Button
                variant="ghost"
                onClick={() => {
                  scrollToSection("products");
                  onClose();
                }}
              >
                Products
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  scrollToSection("about");
                  onClose();
                }}
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  scrollToSection("gallery");
                  onClose();
                }}
              >
                Gallery
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

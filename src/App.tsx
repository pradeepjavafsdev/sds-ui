import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import WhyChooseSDS from "./components/WhyChooseSDS";
import HappyFarmers from "./components/HappyFarmers";
import AwardsAchievements from "./components/AwardsAchievements";

function App() {
  return (
    <Box>
      <Navbar />
      <Box id="hero">
        <Hero />
      </Box>

      <WhyChooseSDS />
      <Box id="products">
        <Product />
      </Box>
      <HappyFarmers />
      <AwardsAchievements />
      <Box id="gallery">
        <Gallery />
      </Box>
      <Box id="about">
        <AboutUs />
      </Box>
    </Box>
  );
}

export default App;

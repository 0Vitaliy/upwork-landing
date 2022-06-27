import Box from "@mui/material/Box"
import { Header } from '../components/Header';
import { MostAdvanced } from '../components/MostAdvanced';
import { CreativeDesign } from '../components/СreativeDesign';
import { ProfessionalExperience } from '../components/ProfessionalExperience';
import { ContactUs } from '../components/ContactUs';
import { Footer } from '../components/Footer';

const HomeScreen = () => {
  return (
    <Box>
      <Header />
      <MostAdvanced />
      <CreativeDesign />
      <ProfessionalExperience />
      <ContactUs />
      <Footer />
    </Box>)
}

export default HomeScreen;
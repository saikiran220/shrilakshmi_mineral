import AboutHeroSection from '../components/aboutComponents/AboutHeroSection';
import AboutSection from '../components/aboutComponents/AboutSection';
import ServicesSection from '../components/aboutComponents/ServicesSection';
import CTASection from '../components/aboutComponents/CTASection';
import ContactSection from '../components/homeComponents/ContactSection';
import StatsSection from '../components/homeComponents/StatsSection';
import TestimonialsComponent from '../components/homeComponents/TestimonialsComponent';
import '../styles/aboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <StatsSection/>
      <TestimonialsComponent/>
      <ContactSection/>
    </div>
  );
};

export default AboutPage;
import GlobalExportHeroSection from '../components/globalExportComponents/GlobalExportHeroSection';
import GlobalExportAboutSection from '../components/globalExportComponents/GlobalExportAboutSection';
import ExportHighlightsSection from '../components/globalExportComponents/ExportHighlightsSection';
import GlobalExportCTASection from '../components/globalExportComponents/GlobalExportCTASection';
import StatsSection from '../components/homeComponents/StatsSection';
import TestimonialsComponent from '../components/homeComponents/TestimonialsComponent';
import ContactSection from '../components/homeComponents/ContactSection';
import '../styles/globalExportPage.css';

const GlobalExportPage = () => {
  return (
    <div>
      <GlobalExportHeroSection />
      <GlobalExportAboutSection />
      <ExportHighlightsSection />
      <GlobalExportCTASection />
      <StatsSection />
      <TestimonialsComponent />
      <ContactSection />
    </div>
  );
};

export default GlobalExportPage; 
import GalleryHeroSection from '../components/galleryComponents/GalleryHeroSection';
import GalleryAboutSection from '../components/galleryComponents/GalleryAboutSection';
import GalleryGrid from '../components/galleryComponents/GalleryGrid';
import TestimonialsComponent from '../components/homeComponents/TestimonialsComponent';
import ContactSection from '../components/homeComponents/ContactSection';
import '../styles/galleryPage.css';

const GalleryPage = () => {
  return (
    <div>
      <GalleryHeroSection />
      <GalleryAboutSection />
      <GalleryGrid />
      <TestimonialsComponent />
      <ContactSection />
    </div>
  );
};

export default GalleryPage; 
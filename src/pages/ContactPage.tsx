import React from 'react';
import ContactHeroSection from '../components/contactComponents/ContactHeroSection';
import ContactFormSection from '../components/contactComponents/ContactFormSection';
import ContactSection from '../components/homeComponents/ContactSection';
import '../styles/contactPage.css';

const ContactPage = () => {
  return (
    <div>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactSection />
    </div>
  );
};

export default ContactPage; 
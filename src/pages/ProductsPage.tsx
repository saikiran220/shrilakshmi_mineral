import React from 'react';
import ProductsHeroSection from '../components/productsComponents/ProductsHeroSection';
import ProductsAboutSection from '../components/productsComponents/ProductsAboutSection';
import GraniteSection from '../components/productsComponents/GraniteSection';
import QuartzSection from '../components/productsComponents/QuartzSection';
import ProductsInfoSection from '../components/productsComponents/ProductsInfoSection';
import StatsSection from '../components/homeComponents/StatsSection';
import TestimonialsComponent from '../components/homeComponents/TestimonialsComponent';
import ContactSection from '../components/homeComponents/ContactSection';
import '../styles/productPage.css';

const ProductsPage = () => {
  return (
    <div>
      <ProductsHeroSection />
      <ProductsAboutSection />
      <GraniteSection />
      <QuartzSection />
      <ProductsInfoSection />
      <StatsSection />
      <TestimonialsComponent />
      <ContactSection />
    </div>
  );
};

export default ProductsPage;

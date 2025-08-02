
import HeroSection from "../components/homeComponents/HeroSection"
import ExportingComponent from "../components/homeComponents/ExportingComponent"
import PremiumComponent from "../components/homeComponents/PremiumComponent"
import OurProductsComponent from "../components/homeComponents/OurProductsComponent"
import CompetitorComponent from "../components/homeComponents/CompetitorComponent"
import TestimonialsComponent from "../components/homeComponents/TestimonialsComponent"
import ContactSection from "../components/homeComponents/ContactSection"

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ExportingComponent />
      <PremiumComponent />
      <OurProductsComponent />
      <CompetitorComponent />
      <TestimonialsComponent />
      <ContactSection />
    </div>
  )
}

export default HomePage
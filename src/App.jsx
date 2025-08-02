import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import GalleryPage from "./pages/GalleryPage"
import GlobalExportPage from "./pages/GlobalExportPage"
import ProductsPage from "./pages/ProductsPage"
import MainNav from "./components/homeComponents/MainNav"
import ContactNav from "./components/homeComponents/ContactNav"
import Footer from "./components/homeComponents/Footer.jsx"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <ContactNav />
      <MainNav />
      <ScrollToTop />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/global-export" element={<GlobalExportPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

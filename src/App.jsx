import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Weddings from './pages/Weddings'
import CoupleShoot from './pages/CoupleShoot'
import WeddingFilms from './pages/WeddingFilms'
import FAQ from './pages/FAQ'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ApiTest from './pages/ApiTest'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/couple-shoots" element={<CoupleShoot />} />
        <Route path="/wedding-films" element={<WeddingFilms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/api-test" element={<ApiTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

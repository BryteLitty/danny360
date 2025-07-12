import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/sections/Header.tsx'
import Hero from './components/sections/Hero.tsx'
import About from './components/sections/About.tsx'
import Services from './components/sections/Services.tsx'
import Vision from './components/sections/Vision.tsx'
import Contact from './components/sections/Contact.tsx'
import Footer from './components/sections/Footer.tsx'
import Modal from './components/common/Modal.tsx'
import EasyFi from './pages/EasyFi.tsx'
import { useState } from 'react'
import { type Service } from './data/services'

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const closeModal = () => {
    setSelectedService(null)
  }

  const MainLayout = () => (
    <>
      <Header />
      <Hero />
      
      {/* Section Divider - Hero only */}
      <div className="relative py-8 bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.3)]"></div>
          </div>
        </div>
      </div>
      
      <About />
      <Services onServiceClick={setSelectedService} />
      <Vision />
      <Contact />
      
      {/* Section Divider - Footer only */}
      <div className="relative py-8 bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_10px_rgba(220,38,38,0.3)]"></div>
          </div>
        </div>
      </div>
      
      <Footer />
      
      {selectedService && (
        <Modal 
          service={selectedService} 
          onClose={closeModal}
        />
      )}
    </>
  )

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/easy-fi" element={<EasyFi />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

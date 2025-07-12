import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Vision from './components/sections/Vision'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import Modal from './components/common/Modal'
import { useState } from 'react'

function App() {
  const [selectedService, setSelectedService] = useState(null)

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Section Divider - Hero only */}
      <div className="relative py-8 bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_10px_rgba(251,146,60,0.3)]"></div>
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
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_10px_rgba(251,146,60,0.3)]"></div>
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
    </div>
  )
}

export default App

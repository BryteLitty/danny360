import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { services, type Service } from '@/data/services'
import { useNavigate } from 'react-router-dom'
import { 
  FaGlobe, 
  FaLink, 
  FaShoppingCart, 
  FaPalette, 
  FaHammer, 
  FaShieldAlt, 
  FaUsers 
} from 'react-icons/fa'

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  FaGlobe: <FaGlobe className="w-full h-full" />,
  FaLink: <FaLink className="w-full h-full" />,
  FaShoppingCart: <FaShoppingCart className="w-full h-full" />,
  FaPalette: <FaPalette className="w-full h-full" />,
  FaHammer: <FaHammer className="w-full h-full" />,
  FaShieldAlt: <FaShieldAlt className="w-full h-full" />,
  FaUsers: <FaUsers className="w-full h-full" />
}

interface ServicesProps {
  onServiceClick: (service: Service) => void
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const navigate = useNavigate()

  const handleServiceClick = (service: Service) => {
    if (service.isExternal) {
      // Navigate to Easy-Fi page
      navigate(service.externalUrl!)
    } else {
      // Open modal
      onServiceClick(service)
    }
  }

  return (
    <section id="services" className="services-section py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of services designed to meet all your needs. 
            Click on any service to learn more about what we offer.
          </p>
        </div>
        
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 bg-black shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] border border-orange-500/20 hover:border-orange-500/40"
              onClick={() => handleServiceClick(service)}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-orange-400 group-hover:text-orange-400 p-4">
                  {iconMap[service.icon]}
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                  {service.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.tagline}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-[0_0_15px_rgba(251,146,60,0.3)] hover:shadow-[0_0_25px_rgba(251,146,60,0.6)] backdrop-blur-sm"
                >
                  {service.isExternal ? 'Visit Site' : 'Learn More'}
                  {service.isExternal ? (
                    <span className="ml-2">↗</span>
                  ) : (
                    <span className="ml-2">→</span>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Ready to get started with any of our services?
          </p>
          <Button 
            size="lg"
            className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 text-lg font-bold transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl border-2 border-orange-500 hover:border-orange-400"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services 
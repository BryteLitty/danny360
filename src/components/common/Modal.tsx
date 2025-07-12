import { 
  FaGlobe, 
  FaLink, 
  FaShoppingCart, 
  FaPalette, 
  FaHammer, 
  FaShieldAlt, 
  FaUsers,
  FaTimes
} from 'react-icons/fa'
import { type Service } from '@/data/services'

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

interface ModalProps {
  service: Service
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ service, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" 
      onClick={handleOverlayClick}
    >
      <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full mx-4 relative border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 shadow-lg p-5">
            {iconMap[service.icon]}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
          <p className="text-red-400 text-lg">{service.tagline}</p>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-300 text-center leading-relaxed">
            {service.description}
          </p>
          
          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-lg font-semibold text-white mb-2">Coming Soon</h4>
            <p className="text-gray-400 text-sm">
              We're working hard to bring you this amazing service. Stay tuned for updates!
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-all duration-200 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] border-2 border-red-500 hover:border-red-400 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal 
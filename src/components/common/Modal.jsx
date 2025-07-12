import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
const iconMap = {
  FaGlobe: <FaGlobe className="w-full h-full" />,
  FaLink: <FaLink className="w-full h-full" />,
  FaShoppingCart: <FaShoppingCart className="w-full h-full" />,
  FaPalette: <FaPalette className="w-full h-full" />,
  FaHammer: <FaHammer className="w-full h-full" />,
  FaShieldAlt: <FaShieldAlt className="w-full h-full" />,
  FaUsers: <FaUsers className="w-full h-full" />
}

const Modal = ({ service, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      e.preventDefault()
      onClose()
    }
  }

  const handleCloseClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onClose()
  }

  return (
    <div 
      className="modal-container fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      <Card className="relative max-w-lg mx-4 w-full max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-300 bg-black border border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.3),inset_0_0_10px_rgba(249,115,22,0.2)] rounded-xl">
        <CardHeader className="text-center pb-4">
          <button
            onClick={handleCloseClick}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-orange-500 text-4xl border border-orange-500/50 shadow-[0_0_10px_rgba(249,115,22,0.3)] p-4">
            {iconMap[service.icon]}
          </div>
          
          <CardTitle className="text-2xl font-bold text-white">
            {service.name}
          </CardTitle>
          
          <p className="text-lg text-orange-500 font-medium">
            {service.tagline}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">About This Service</h3>
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
          
          <div className="bg-black/30 border-l-2 border-orange-500/50 p-4 rounded-r-lg shadow-[0_0_5px_rgba(249,115,22,0.2)]">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🚧</span>
              <div>
                <h4 className="font-semibold text-orange-500">Coming Soon</h4>
                <p className="text-gray-300 text-sm">
                  We're working hard to bring you this amazing service. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleCloseClick}
              variant="outline" 
              className="w-32 bg-transparent border border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-[0_0_5px_rgba(249,115,22,0.2)]"
            >
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Modal 
import { FaGlobe, FaWifi, FaRocket, FaHeadset } from 'react-icons/fa'
import { Button } from '../components/ui/button'
import easyFiLogo from '../assets/images/ezay fi.png'

const EasyFi = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#000] text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 relative px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-[#1E3A5F] to-[#0A1A2F] opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <img 
              src={easyFiLogo} 
              alt="Easy-Fi Logo" 
              className="h-24 mx-auto mb-8"
            />
            <p className="text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
              High-speed internet connectivity for modern homes and businesses
            </p>
            <div className="flex flex-col items-center space-y-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-xl text-2xl font-extrabold transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(251,146,60,0.4)] hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] border-4 border-orange-400 hover:border-orange-500 w-full max-w-lg">
                Join the Waitlist
              </Button>
              <p className="text-lg text-blue-200 font-medium">
                Be the first to know when we launch in your area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Now a row at the bottom */}
      <section className="bg-[#142A47] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FeatureCard
              icon={<FaRocket className="h-6 w-6 text-orange-500" />}
              title="Lightning Fast"
              description="Up to 1Gbps speeds"
            />
            <FeatureCard
              icon={<FaWifi className="h-6 w-6 text-orange-500" />}
              title="Reliable"
              description="99.9% uptime guarantee"
            />
            <FeatureCard
              icon={<FaGlobe className="h-6 w-6 text-orange-500" />}
              title="Wide Coverage"
              description="Major cities covered"
            />
            <FeatureCard
              icon={<FaHeadset className="h-6 w-6 text-orange-500" />}
              title="24/7 Support"
              description="Always here to help"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 rounded-lg bg-[#0A1A2F] border border-blue-800/50 transition-all duration-300">
      <div className="flex items-center mb-2">
        <div className="mr-3">{icon}</div>
        <h3 className="text-lg font-semibold text-blue-50">{title}</h3>
      </div>
      <p className="text-sm text-blue-200">{description}</p>
    </div>
  )
}

export default EasyFi 
import { FaBullseye, FaStar, FaLightbulb } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="about-section py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Danny360
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Danny360 is a unified ecosystem of innovative services designed to simplify 
              and enhance every aspect of modern life and business operations.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              From high-speed internet connectivity to creative design solutions, from construction 
              services to strategic business consulting, we bring together diverse expertise under 
              one trusted brand. Our mission is to provide comprehensive, integrated solutions 
              that empower individuals and businesses to thrive in an increasingly connected world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-black rounded-lg shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40">
              <div className="text-4xl mb-4 text-orange-500">
                <FaBullseye className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300">
                To deliver exceptional, integrated solutions that exceed expectations and drive success.
              </p>
            </div>
            
            <div className="text-center p-6 bg-black rounded-lg shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40">
              <div className="text-4xl mb-4 text-orange-500">
                <FaStar className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading one-stop solution provider, transforming how people and businesses operate.
              </p>
            </div>
            
            <div className="text-center p-6 bg-black rounded-lg shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40">
              <div className="text-4xl mb-4 text-orange-500">
                <FaLightbulb className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
              <p className="text-gray-300">
                Innovation, integrity, and excellence in everything we do, always putting our clients first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
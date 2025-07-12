const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Each of our brands stands alone as a leader in its respective field, 
              yet together they form a powerful ecosystem of integrated solutions.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe that true innovation happens when diverse expertise comes together 
              with a shared purpose. Our unified approach allows us to deliver solutions 
              that are not just excellent individually, but extraordinary when combined.
            </p>
          </div>
          

          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-6 rounded-xl shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Integrated Solutions
                  </h4>
                  <p className="text-gray-300">
                    Our services work seamlessly together, creating synergies that 
                    deliver more value than the sum of their parts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black p-6 rounded-xl shadow-[0_0_20px_rgba(251,146,60,0.3)] hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Single Point of Contact
                  </h4>
                  <p className="text-gray-300">
                    One relationship, multiple solutions. Simplify your vendor 
                    management with our comprehensive service portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision 
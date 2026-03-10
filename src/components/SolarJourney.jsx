import React from 'react';

const SolarJourney = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-linear-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Geometric Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large Circle */}
        <div className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 border-[3px] border-[#7d2e3d]/10 rounded-full"></div>
        
        {/* Triangle */}
        <div className="absolute top-1/4 -left-16 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[150px] border-b-[#4a7c59]/5 rotate-12"></div>
        
        {/* Small Circles */}
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#d4af37]/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-[#8f3545]/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-[#7d2e3d] to-[#8f3545] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#7d2e3d] via-[#d4af37] to-[#8f3545]">
                Your Solar Journey
              </h2>
            </div>
          </div>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From consultation to installation, we guide you every step of the way towards sustainable energy independence
          </p>
        </div>

        {/* Timeline Content */}
        <div className="space-y-24 sm:space-y-32">
          {/* Step 1 - Consultation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#7d2e3d]/5 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="hidden lg:flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-[#7d2e3d] to-[#8f3545] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Free Consultation</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our solar experts analyze your energy needs, roof structure, and location to design the perfect solar solution. We provide detailed projections on savings, ROI, and environmental impact tailored specifically for you.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#7d2e3d]/10 text-[#7d2e3d] rounded-full text-sm font-semibold">Site Assessment</span>
                  <span className="px-4 py-2 bg-[#7d2e3d]/10 text-[#7d2e3d] rounded-full text-sm font-semibold">Energy Analysis</span>
                  <span className="px-4 py-2 bg-[#7d2e3d]/10 text-[#7d2e3d] rounded-full text-sm font-semibold">Custom Design</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-[#d4af37]/20 rounded-full"></div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6135116/pexels-photo-6135116.jpeg" 
                  alt="Solar Consultation" 
                  className="rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Mobile-only heading overlay */}
                <div className="absolute bottom-0 left-0 right-0 lg:hidden bg-linear-to-t from-black/80 via-black/50 to-transparent rounded-b-3xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-[#7d2e3d] to-[#8f3545] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Free Consultation</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Installation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute top-1/2 -left-12 w-0 h-0 border-t-[60px] border-t-transparent border-b-[60px] border-b-transparent border-r-[80px] border-r-[#4a7c59]/10"></div>
              <div className="relative">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1671808063267-d30c942da824?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Solar Installation" 
                  className="rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Mobile-only heading overlay */}
                <div className="absolute bottom-0 left-0 right-0 lg:hidden bg-linear-to-t from-black/80 via-black/50 to-transparent rounded-b-3xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-[#4a7c59] to-[#7d2e3d] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Professional Installation</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#4a7c59]/5 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="hidden lg:flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-[#4a7c59] to-[#7d2e3d] rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Professional Installation</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our certified technicians handle everything from permits to final connection. Using premium equipment and proven techniques, we ensure your solar system is installed safely, efficiently, and built to last decades.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#4a7c59]/10 text-[#4a7c59] rounded-full text-sm font-semibold">Certified Team</span>
                  <span className="px-4 py-2 bg-[#4a7c59]/10 text-[#4a7c59] rounded-full text-sm font-semibold">Quality Materials</span>
                  <span className="px-4 py-2 bg-[#4a7c59]/10 text-[#4a7c59] rounded-full text-sm font-semibold">Safety First</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Monitoring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-[#d4af37]/5 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="hidden lg:flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-linear-to-br from-[#d4af37] to-[#8f3545] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">Ongoing Support</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Monitor your system's performance in real-time through our advanced dashboard. Our dedicated support team provides regular maintenance, troubleshooting, and optimization to maximize your energy production and savings.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#d4af37]/10 text-[#8f3545] rounded-full text-sm font-semibold">24/7 Monitoring</span>
                  <span className="px-4 py-2 bg-[#d4af37]/10 text-[#8f3545] rounded-full text-sm font-semibold">Maintenance</span>
                  <span className="px-4 py-2 bg-[#d4af37]/10 text-[#8f3545] rounded-full text-sm font-semibold">Performance Reports</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-[#7d2e3d]/20 rounded-full"></div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/7579179/pexels-photo-7579179.jpeg" 
                  alt="Solar Monitoring" 
                  className="rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Mobile-only heading overlay */}
                <div className="absolute bottom-0 left-0 right-0 lg:hidden bg-linear-to-t from-black/80 via-black/50 to-transparent rounded-b-3xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-[#d4af37] to-[#8f3545] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Ongoing Support</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Circle */}
        <div className="mt-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-br from-[#7d2e3d]/5 to-[#d4af37]/5 rounded-full blur-3xl"></div>
          <div className="relative inline-block">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-linear-to-br from-[#7d2e3d] via-[#8f3545] to-[#d4af37] rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 mx-auto">
              <div className="text-center text-white">
                <div className="text-5xl sm:text-6xl font-bold mb-2">3</div>
                <div className="text-lg sm:text-xl font-semibold">Simple Steps</div>
                <div className="text-sm opacity-90">to Solar Power</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarJourney;

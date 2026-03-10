import React from 'react';

const FloatingStats = () => {
  return (
    <section className="py-16 sm:py-20 bg-linear-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#7d2e3d]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#4a7c59]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Stats Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Projects Completed */}
          <div 
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#7d2e3d]/10 hover:border-[#7d2e3d]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            style={{
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '0s'
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#7d2e3d] to-[#8f3545] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#7d2e3d] mb-1">300+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Projects</div>
            </div>
          </div>

          {/* MW Installed */}
          <div 
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#4a7c59]/10 hover:border-[#4a7c59]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            style={{
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '0.5s'
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#4a7c59] to-[#7d2e3d] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#4a7c59] mb-1">250 MW</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Installed</div>
            </div>
          </div>

          {/* CO₂ Reduced */}
          <div 
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#d4af37]/10 hover:border-[#d4af37]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            style={{
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '1s'
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#d4af37] to-[#8f3545] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-1">725t</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">CO₂ Saved</div>
            </div>
          </div>

          {/* Happy Clients */}
          <div 
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-[#8f3545]/10 hover:border-[#8f3545]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            style={{
              animation: 'float 3s ease-in-out infinite',
              animationDelay: '1.5s'
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#8f3545] to-[#d4af37] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#8f3545] mb-1">290+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingStats;


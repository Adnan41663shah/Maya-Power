import React from 'react';

const ProductTieUps = () => {
  const tieUps = [
    {
      category: 'Solar PV Modules',
      brands: 'TATA, Premier Energys, Adani, UTL, Renew, Renewsys, Waaree, Vikram, ECE, Novasys'
    },
    {
      category: 'Solar Inverter',
      brands: 'TATA, Premier Energys, DEYE, Polycab, Sungrow, Goodwe, Solaredge, Growatt, V Sole, Solic, Sofar'
    },
    {
      category: 'Solar Battery',
      brands: 'Exide, Luminous, Livguard, Sukam, V Sole'
    },
    {
      category: 'DC/AC Cables',
      brands: 'Polycab, KEI, Apar'
    },
    {
      category: 'Module Mounting Structure (MMS)',
      brands: 'Fortune, Vikrant, Apollo, JSW'
    },
    {
      category: 'Balance Of Systems (BOS)',
      brands: 'Havells, Finder, Sibass, Elmex, Pheonix'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-cyan-50 rounded-full blur-3xl opacity-30" />
            <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-30" />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
            <span className="text-cyan-600 font-semibold tracking-wider uppercase text-sm">Trusted Partners</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7d2e3d] to-[#8f3545]">Tie-Ups</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#7d2e3d] to-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tieUps.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-cyan-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#7d2e3d] to-[#8f3545] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors">
                    {item.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                    {item.brands.split(',').map((brand, idx) => (
                        <span 
                            key={idx}
                            className="inline-block px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-200 group-hover:bg-cyan-50 group-hover:border-cyan-100 group-hover:text-cyan-800 transition-colors duration-300"
                        >
                            {brand.trim()}
                        </span>
                    ))}
                </div>
            </div>
          ))}
          
          {/* Fill empty space if odd number of items on lg screens */}
          {tieUps.length % 3 !== 0 && (
            <div className="hidden lg:block lg:col-span-1 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">Partner with Us</h3>
                  <p className="text-cyan-100/80 mb-6 text-sm">Join our network of trusted brands and sustainable energy solutions.</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] rounded-full font-bold text-sm shadow-lg hover:shadow-[#7d2e3d]/50 transition-all duration-300 transform hover:scale-105">
                      Contact Us
                  </button>
                </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductTieUps;

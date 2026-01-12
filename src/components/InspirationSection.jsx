import React, { useState } from 'react';

const InspirationSection = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const inspirations = [
    {
      id: 1,
      name: 'Mrs Maya Ukey',
      title: 'Mother of Mr Mayur Ukey',
      image: '/maya_ukey.png',
      shortDesc: 'The cherished inspiration behind our journey, Mrs. Maya Ukey laid the foundation of values and resilience that define us.',
      fullBio: `Mrs Maya Ukey was born on 11/06/1961 at Indu Pralhad Wasnik residence. She completed her primary education at the school in Misal Layout, Nagpur.
      
      On 11/11/1982, she got married to Mukunda Dhinuji Ukey.
      
      Address: D-316, Indira Nagar, Galli No. 4, Jaripatka, Nagpur – 440014.
      
      Maya Ukey serves as the foundational inspiration for Maya Power. Her vision for a cleaner, self-reliant India through sustainable energy practices has been the guiding light for our organization. She believed deeply in the power of nature and the responsibility we have to protect it for future generations. Her legacy inspires every project we undertake, pushing us to innovate and deliver excellence in the renewable energy sector.`
    },
    {
      id: 2,
      name: 'Sheetal Dalal',
      title: 'Mother of Mr Saurabh Dalal',
      image: '/sheetal_dalal.png',
      shortDesc: 'A beacon of innovation and compassion, guiding our operational excellence and customer-centric approach.',
      fullBio: `Sheetal Dalal embodies the spirit of innovation and resilience. Her approach to problem-solving and her unwavering dedication to quality have shaped the operational backbone of Maya Power. 
      
      She champions the idea that technology must serve people, leading to our customer-centric approach in solar installations. Her leadership style promotes compassion alongside professional excellence, ensuring that our team grows as a family.`
    },
    {
      id: 3,
      name: 'Jaideep N. Malaviya',
      title: 'Our Mentor',
      image: '/jaideep.png',
      shortDesc: 'Managing Director of Malaviya Solar Energy Consultancy, Board Director of ISES, and Founder-Secretary General of STFI.',
      fullBio: `Jaideep N. Malaviya, a professional in solar energy since 1996, is the Managing Director of Malaviya Solar Energy Consultancy, Board Director of International Solar Energy Society (Germany), and Founder-Secretary General of Solar Thermal Federation of India.
      
      He has over 32 years of experience in the solar energy industry as a consultant, researcher, trainer, and project developer, and has presented at over 100 Indian and international conferences. He worked as a Research Scientist at Tata Energy Research Institute (TERI), New Delhi. He was a Task Force member set up by the Government of India on Circular Economy in Solar Panels on policy framework by the Ministry of New and Renewable Energy, Ministry of Environment and Forests and Climate Change, and NITI Aayog.
      
      He is recognized by the International Solar Energy Society amongst the 250 global pioneers in research and industrial development. He is a recognized expert for accelerating the solar thermal market in India and advises on policy-related issues to national and state-based government agencies.
      
      Under his leadership, the Ministry of New and Renewable Energy operated the National Solar Energy Helpline for 9 years that addressed over 1,000,000 phone calls. He was the India Project Head of "Solar Payback" to assess the potential of industrial process heating applications through solar thermal and executed it on behalf of the Federal Government of Germany and the German Solar Association (BSW).
      
      His current focus is on Accelerating Rooftop Solar Photovoltaic systems and developing cost-effective recycling solutions for solar panels at the end of their life. He was one of the few invited by the European Photovoltaic Solar Energy Conference to present a paper on India’s roadmap for circularity in solar panels at the end of life.`
    }
  ];

  const openModal = (person) => {
    setSelectedPerson(person);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedPerson(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Inspiration
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The guiding lights seeking to empower our vision, driving our mission towards a sustainable and brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {inspirations.map((person) => (
            <div 
              key={person.id}
              className="group relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-cyan-200 transition-all duration-300 flex flex-col items-center h-full"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-8 rounded-full overflow-hidden border-[6px] border-white shadow-lg group-hover:border-cyan-50 transition-colors duration-300">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center text-balance">{person.name}</h3>
              <p className="text-cyan-600 font-semibold mb-4 text-sm tracking-wide uppercase text-center">{person.title}</p>
              
              <p className="text-gray-600 text-center text-sm leading-relaxed mb-8 line-clamp-4 flex-grow">
                {person.shortDesc}
              </p>

              <button
                onClick={() => openModal(person)}
                className="px-8 py-3 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform group-hover:translate-y-[-2px] mt-auto"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedPerson && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-fadeIn"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp flex flex-col my-8 max-h-[90vh]">
            
            {/* Header / Image Section */}
            <div className="relative h-48 sm:h-64 bg-slate-900 flex-shrink-0">
               <img
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 sm:left-10 text-white">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-1">{selectedPerson.name}</h3>
                  <p className="text-cyan-400 font-medium text-lg bg-slate-900/50 inline-block px-3 py-1 rounded-lg backdrop-blur-sm">
                    {selectedPerson.title}
                  </p>
                </div>
            </div>

            {/* Scrollable Bio Content */}
            <div className="p-6 sm:p-10 overflow-y-auto flex-grow">
              <div className="prose prose-lg text-gray-700 max-w-none">
                {selectedPerson.fullBio.split('\n').map((paragraph, idx) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;
                  return (
                    <p key={idx} className="mb-4 leading-relaxed">
                      {trimmed}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex-shrink-0">
               <p className="text-center text-gray-500 italic text-sm">Maya Power - Inspiration & Legacy</p>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default InspirationSection;

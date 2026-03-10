import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/SEO';

const ProjectsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const [visibleCards, setVisibleCards] = useState([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      id: 1,
      name: 'Mumbai Data Center Complex',
      location: 'Mumbai, Maharashtra, India',
      lat: 19.0760,
      lng: 72.8777,
      capacity: 5,
      co2Offset: 4500,
      annualEnergy: 8500,
      roi: 6.5,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
      challenge: 'Powering a massive data center with sustainable energy while maintaining 99.99% uptime.',
      solution: 'Implemented a 5MW solar array with integrated battery storage, reducing grid dependency by 85%.',
    },
    {
      id: 2,
      name: 'Pune Residential Community',
      location: 'Pune, Maharashtra, India',
      lat: 18.5204,
      lng: 73.8567,
      capacity: 1.2,
      homesPowered: 450,
      annualEnergy: 2100,
      co2Offset: 1200,
      image: 'https://images.unsplash.com/photo-1711224116673-fd729b3db180?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      challenge: 'Providing affordable clean energy to a residential community of 450 homes.',
      solution: 'Deployed a community solar program with rooftop installations and shared battery storage.',
    },
    {
      id: 3,
      name: 'Nagpur University Campus',
      location: 'Nagpur, Maharashtra, India',
      lat: 21.1458,
      lng: 79.0882,
      capacity: 2.8,
      annualSavings: 60,
      annualEnergy: 4200,
      co2Offset: 2800,
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      challenge: 'Reducing campus carbon footprint while maintaining budget constraints.',
      solution: 'Strategic rooftop and ground-mount installations across 15 campus buildings, achieving 60% utility cost reduction.',
    },
    {
      id: 4,
      name: 'Aurangabad Industrial Plant',
      location: 'Aurangabad, Maharashtra, India',
      lat: 19.8762,
      lng: 75.3433,
      capacity: 3.5,
      annualEnergy: 6200,
      co2Offset: 3500,
      roi: 5.2,
      image: 'https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      challenge: 'Powering a 24/7 manufacturing facility with renewable energy.',
      solution: 'Hybrid solar and storage system providing 75% of facility energy needs with zero downtime.',
    },
    {
      id: 5,
      name: 'Nashik Eco-Resort',
      location: 'Nashik, Maharashtra, India',
      lat: 19.9975,
      lng: 73.7898,
      capacity: 0.8,
      annualEnergy: 1400,
      co2Offset: 850,
      homesPowered: 120,
      image: 'https://images.unsplash.com/photo-1694782174716-9f3bf1d6a830?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      challenge: 'Off-grid renewable energy solution for a remote resort.',
      solution: 'Complete off-grid solar and battery system ensuring year-round power independence.',
    },
  ];

  // Title animation on mount
  useEffect(() => {
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  // Scroll-triggered animations for cards
  useEffect(() => {
    const observers = cardsRef.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 50);
            observer.unobserve(ref);
          }
        },
        { threshold: 0.05 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);


  return (
    <>
      <SEO
        title="Our Projects - Solar Installations Portfolio"
        description="Explore Maya Power's solar project portfolio across Maharashtra: data centers, residential communities, university campuses, industrial plants, and more. Real-world impact through sustainable energy."
        path="/projects"
      />
      <section
        id="projects"
        className="py-16 sm:py-20 md:py-24 lg:py-32 bg-linear-to-b from-white via-gray-50 to-white min-h-screen"
        aria-label="Projects portfolio section"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        {/* Modern Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
          <div className="text-left order-2 lg:order-1">
             <div className="inline-block px-4 py-1.5 bg-[#7d2e3d]/10 border border-[#7d2e3d]/30 rounded-full mb-6">
                <p className="text-sm font-semibold text-[#7d2e3d] tracking-wide uppercase">
                  Our Work & Achievements
                </p>
             </div>
             <h1
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight opacity-0 transition-all duration-500"
                style={{ transform: 'translateY(30px)' }}
              >
                Impact <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7d2e3d] to-[#8f3545]">Portfolio</span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed opacity-0 transition-transform duration-500"
                style={{ transform: 'translateY(20px)' }}
              >
                Showcasing Real-World Impact Through Sustainable Energy Solutions. Explore our diverse portfolio of solar installations that are transforming the future.
              </p>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-500 order-1 lg:order-2 h-64 sm:h-80 md:h-96 lg:h-auto">
             <img 
               src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
               alt="Solar Project Highlights" 
               className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-500"
             />
             <div className="absolute inset-0 bg-linear-to-tr from-[#7d2e3d]/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Project Showcase Gallery */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#7d2e3d] via-[#d4af37] to-[#7d2e3d] mb-8 sm:mb-12 text-center">
            Featured Projects
          </h2>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {projects.map((project, index) => {
              const isVisible = visibleCards.includes(index);
              return (
                <div
                  key={project.id}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center border-b-2 border-gray-100 pb-12 sm:pb-16 md:border-0 md:pb-0 last:border-0 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  } ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transition: `all 0.8s ease-out ${index * 0.15}s`,
                  }}
                >
                  {/* Image Section */}
                  <div
                    className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-[#d4af37] text-sm sm:text-base font-medium">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    {/* Challenge & Solution */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full mb-2">
                          Challenge
                        </span>
                        <p className="text-gray-700 text-sm sm:text-base">{project.challenge}</p>
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-2">
                          Solution
                        </span>
                        <p className="text-gray-700 text-sm sm:text-base">{project.solution}</p>
                      </div>
                    </div>

                    {/* Data Visualization Panel */}
                    <div className="bg-linear-to-br from-gray-900 to-black rounded-xl p-6 sm:p-8 shadow-2xl border-2 border-[#7d2e3d]/30">
                      <h4 className="text-[#d4af37] font-bold text-lg sm:text-xl mb-6">
                        Impact Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {/* Capacity */}
                        <div className="text-center">
                          <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3">
                            <svg className="transform -rotate-90 w-full h-full">
                              <circle
                                cx="50%"
                                cy="50%"
                                r="40%"
                                fill="none"
                                stroke="rgba(6, 182, 212, 0.2)"
                                strokeWidth="8"
                              />
                              <circle
                                cx="50%"
                                cy="50%"
                                r="40%"
                                fill="none"
                                stroke="url(#gradient1)"
                                strokeWidth="8"
                                strokeDasharray={`${(project.capacity / 5) * 251.2} 251.2`}
                                className="transition-all duration-1000"
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <p className="text-2xl sm:text-3xl font-bold text-[#d4af37]">
                                  {project.capacity}
                                </p>
                                <p className="text-xs text-gray-400">MW</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-400">Capacity</p>
                        </div>

                        {/* CO2 Offset */}
                        <div className="text-center">
                          <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-3">
                            <svg className="transform -rotate-90 w-full h-full">
                              <circle
                                cx="50%"
                                cy="50%"
                                r="40%"
                                fill="none"
                                stroke="rgba(6, 182, 212, 0.2)"
                                strokeWidth="8"
                              />
                              <circle
                                cx="50%"
                                cy="50%"
                                r="40%"
                                fill="none"
                                stroke="url(#gradient2)"
                                strokeWidth="8"
                                strokeDasharray={`${(project.co2Offset / 5000) * 251.2} 251.2`}
                                className="transition-all duration-1000"
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <p className="text-xl sm:text-2xl font-bold text-[#d4af37]">
                                  {project.co2Offset}
                                </p>
                                <p className="text-xs text-gray-400">Tons/Year</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-400">CO₂ Offset</p>
                        </div>

                        {/* Annual Energy */}
                        <div className="text-center">
                          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
                            <p className="text-2xl sm:text-3xl font-bold text-[#d4af37] mb-1">
                              {project.annualEnergy}
                            </p>
                            <p className="text-xs text-gray-400">MWh/Year</p>
                          </div>
                        </div>

                        {/* Additional Metric */}
                        <div className="text-center">
                          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
                            {project.annualSavings ? (
                              <>
                                <p className="text-2xl sm:text-3xl font-bold text-[#d4af37] mb-1">
                                  {project.annualSavings}%
                                </p>
                                <p className="text-xs text-gray-400">Cost Savings</p>
                              </>
                            ) : project.homesPowered ? (
                              <>
                                <p className="text-2xl sm:text-3xl font-bold text-[#d4af37] mb-1">
                                  {project.homesPowered}
                                </p>
                                <p className="text-xs text-gray-400">Homes Powered</p>
                              </>
                            ) : (
                              <>
                                <p className="text-2xl sm:text-3xl font-bold text-[#d4af37] mb-1">
                                  {project.roi}
                                </p>
                                <p className="text-xs text-gray-400">Year ROI</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Gradient Definitions */}
                      <svg className="absolute w-0 h-0">
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7d2e3d" />
                            <stop offset="100%" stopColor="#8f3545" />
                          </linearGradient>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7d2e3d" />
                            <stop offset="100%" stopColor="#d4af37" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectsPage;


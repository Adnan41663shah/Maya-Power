import React, { useEffect, useRef, useState } from 'react';
import { useModal } from '../context/ModalContext';

const Services = () => {
  const totalCards = 6 + 5; // EPC services (6) + Decentralized services (5)
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);
  const { openModal } = useModal();

  const epcServices = [
    {
      id: 1,
      title: 'Feasibility Study',
      description: 'Comprehensive site assessment and technical analysis to determine the viability of solar installations. We evaluate solar potential, site conditions, and economic feasibility.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      image: 'https://plus.unsplash.com/premium_photo-1726743809701-67e8600f7670?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-[#7d2e3d] to-[#8f3545]',
    },
    {
      id: 2,
      title: 'Resource & Technology Evaluation',
      description: 'Advanced assessment of solar resources and technology selection. We analyze irradiance data, weather patterns, and recommend optimal solar technologies for maximum efficiency.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      color: 'from-[#8f3545] to-[#4a7c59]',
    },
    {
      id: 3,
      title: 'System Design & Detailed Engineering',
      description: 'Expert engineering and design services for solar systems. Our team creates detailed technical designs, electrical schematics, and structural plans ensuring optimal performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      color: 'from-[#7d2e3d] to-[#d4af37]',
    },
    {
      id: 4,
      title: 'Installation and Commissioning',
      description: 'Professional installation and commissioning services. We ensure safe, efficient installation with comprehensive testing and system optimization for peak performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1751486403890-793880b12adb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-[#4a7c59] to-[#7d2e3d]',
    },
    {
      id: 5,
      title: 'Regulatory/Policy Advisory',
      description: 'Expert guidance on regulatory compliance and policy matters. We help navigate permits, approvals, and ensure full compliance with local and national regulations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      color: 'from-[#7d2e3d] to-[#8f3545]',
    },
    {
      id: 6,
      title: 'O&M and Performance Monitoring',
      description: 'Comprehensive operations and maintenance services with real-time performance monitoring. We ensure optimal system performance and maximize energy output through proactive maintenance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      color: 'from-[#8f3545] to-[#4a7c59]',
    },
  ];

  const decentralizedServices = [
    {
      id: 1,
      title: 'Solar PV Project-BOS Kits',
      description: 'Complete Balance of System (BOS) kits for solar PV projects. We provide all necessary components including inverters, mounting systems, cables, and monitoring equipment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1680050977821-e4e9a2f09d55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-[#7d2e3d] to-[#8f3545]',
    },
    {
      id: 2,
      title: 'Grid Interactive Systems',
      description: 'Advanced grid-tied solar systems that seamlessly integrate with the utility grid. These systems allow for net metering and energy export capabilities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: 'https://plus.unsplash.com/premium_photo-1720715202838-7bf7004f55bc?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-[#8f3545] to-[#7d2e3d]',
    },
    {
      id: 3,
      title: 'Solar Pumps',
      description: 'Efficient solar-powered water pumping solutions for agricultural and irrigation needs. Reliable, cost-effective systems that operate without grid connection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1633118244244-45fa4104942f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-[#7d2e3d] to-[#d4af37]',
    },
    {
      id: 4,
      title: 'Solar Street Lighting',
      description: 'Intelligent solar street lighting systems with automatic operation. Energy-efficient LED lights powered by solar panels with battery backup for all-night illumination.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1723693061758-9485c33b8832?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-[#4a7c59] to-[#8f3545]',
    },
    {
      id: 5,
      title: 'Solar High Mast',
      description: 'High-mast solar lighting solutions for large areas, highways, and public spaces. Powerful illumination systems with extended battery backup and smart controls.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      image: 'https://plus.unsplash.com/premium_photo-1680262688165-97ef560d1fd5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-[#7d2e3d] to-[#4a7c59]',
    },
  ];

  useEffect(() => {
    // Set up intersection observers for scroll animations
    const observers = [];
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px'
    };

    // Use a small delay to ensure all refs are set
    const timer = setTimeout(() => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
              observer.unobserve(ref);
            }
          },
          observerOptions
        );

        observer.observe(ref);
        observers.push(observer);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const ServiceCard = ({ service, index, sectionIndex }) => {
    // Calculate unique index: EPC services are 0-5, Decentralized are 6-10
    const cardIndex = sectionIndex === 0 ? index : epcServices.length + index;
    const isVisible = visibleSections.includes(cardIndex);

    return (
      <article
        ref={(el) => {
          if (el) {
            sectionRefs.current[cardIndex] = el;
          }
        }}
        className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#7d2e3d]/50 ${
          isVisible
            ? 'translate-y-0'
            : 'translate-y-10'
        }`}
        style={{
          transition: `all 0.5s ease-out ${index * 0.05}s`,
        }}
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Icon Badge */}
          <div className={`absolute top-4 right-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br ${service.color} text-white rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 relative">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#7d2e3d] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {service.description}
          </p>

          {/* Hover Arrow */}
          <div className="mt-4 flex items-center text-[#7d2e3d] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-semibold mr-2">Learn More</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      aria-label="Services section"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7d2e3d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a7c59]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7d2e3d] via-[#d4af37] to-[#7d2e3d] mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive solar energy solutions designed to power your future sustainably
          </p>
        </header>

        {/* EPC Services Section */}
        <section className="mb-16 sm:mb-20 md:mb-24" aria-labelledby="epc-services-heading">
          <div className="mb-8 sm:mb-12">
            <h2
              id="epc-services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            >
              EPC Service
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              End-to-end Engineering, Procurement, and Construction services for comprehensive solar project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {epcServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                sectionIndex={0}
              />
            ))}
          </div>
        </section>

        {/* Decentralized Energy Systems Section */}
        <section aria-labelledby="decentralized-services-heading">
          <div className="mb-8 sm:mb-12">
            <h2
              id="decentralized-services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            >
              Decentralized Energy Systems
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
              Innovative standalone and grid-interactive solar solutions for diverse energy needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {decentralizedServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                sectionIndex={1}
              />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div className="bg-gradient-to-r from-[#7d2e3d] via-[#8f3545] to-[#d4af37] rounded-2xl p-8 sm:p-12 md:p-16 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Go Solar?
            </h3>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your solar energy needs and discover the perfect solution for your project.
            </p>
            <button
              onClick={openModal}
              className="px-8 py-4 bg-white text-[#7d2e3d] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-base sm:text-lg cursor-pointer"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

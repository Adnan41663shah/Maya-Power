import React, { useEffect, useRef, useState } from 'react';

const WhyChooseUs = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  const benefits = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'RELIABILITY',
      description: 'Recognized by Solar Quarter, First View, Solar Storage.',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality First',
      description: 'We follow a 100+ point Quality Assurance Checklist. High-quality project documentation to ensure reliable after-sales support.',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'SERVICE SUPPORT',
      description: 'Guaranteed long-term support.',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'TECHNICAL STRENGTH',
      description: 'Strong expertise across the entire solar PV chain. Team member with 10+ years of background in Projects, Advisory and Manufacturing.',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'CUSTOMIZED BUSINESS MODELS',
      description: 'Flexible Plans to lower barriers to entry for lasting positive impact.',
    },
  ];

  useEffect(() => {
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  useEffect(() => {
    const observers = itemsRef.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
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
    <section
      id="why-choose-us"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden"
      aria-label="Why choose us section"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7d2e3d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a7c59]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7d2e3d] via-[#d4af37] to-[#7d2e3d] animate-gradient-shift mb-4 opacity-0 transition-all duration-500 uppercase"
            style={{ transform: 'translateY(30px)' }}
          >
            Maya Power Advantage
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Experience the difference with our comprehensive solar solutions designed for excellence
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const isVisible = visibleItems.includes(index);
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#7d2e3d]/50 transition-all duration-500 group ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transition: `all 0.6s ease-out ${index * 0.1}s`,
                }}
              >
                {/* Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#7d2e3d] to-[#8f3545] rounded-xl p-4 mb-6 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#7d2e3d]/30">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#7d2e3d] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


import React from 'react';
import { useEffect, useRef } from 'react';
import { useModal } from '../context/ModalContext';

const Hero = () => {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const graphicRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollCueRef = useRef(null);
  const { openModal } = useModal();

  useEffect(() => {
    const elements = [
      headlineRef.current,
      subheadlineRef.current,
      graphicRef.current,
      ctaRef.current,
      scrollCueRef.current,
    ];

    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 50);
      }
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white pt-16 md:pt-20 pb-32 sm:pb-40 md:pb-48 lg:pb-56"
      aria-label="Hero section"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7d2e3d]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4a7c59]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Central Animated Graphic - Background */}
      <div
        ref={graphicRef}
        className="absolute inset-0 flex items-center justify-center z-[1] opacity-0 transition-all duration-700"
        style={{ transform: 'translateY(30px)' }}
      >
        <div className="relative w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-[#7d2e3d]/40 rounded-full animate-spin-slow" />
          
          {/* Middle Ring */}
          <div className="absolute inset-8 border-4 border-[#4a7c59]/50 rounded-full animate-spin-reverse" />
          
          {/* Inner Solar Cell */}
          <div className="absolute inset-16 bg-gradient-to-br from-[#7d2e3d]/30 to-[#4a7c59]/30 rounded-lg transform rotate-45 animate-pulse-glow">
            <div className="absolute inset-2 bg-gradient-to-br from-[#7d2e3d]/50 to-[#4a7c59]/50 rounded-lg" />
            <div className="absolute inset-4 bg-white/80 rounded-lg grid grid-cols-3 grid-rows-3 gap-1 p-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#7d2e3d]/40 rounded animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          {/* Energy Flow Particles */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45) * (Math.PI / 180);
            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={i}
                className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-[#d4af37] rounded-full animate-float"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Central Content - Dynamic Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full py-8 sm:py-12 md:py-16 flex-1 flex flex-col items-center justify-center overflow-visible">
        {/* Headline */}
        <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 md:pb-5 overflow-visible">
          <h1
            ref={headlineRef}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7d2e3d] via-[#d4af37] to-[#7d2e3d] animate-gradient-shift opacity-0 transition-all duration-700"
            style={{ transform: 'translateY(30px)', lineHeight: '1.2' }}
          >
            THE SUN DOES NOT CHARGE A SUBSCRIPTION FEE
          </h1>
        </div>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto opacity-0 transition-all duration-700"
          style={{ transform: 'translateY(30px)' }}
        >
          Experience the next generation of sustainable energy with Maya Power’s advanced solar solutions.
          <br className="hidden sm:block" />
          <span className="text-cyan-600"> Clean energy. Infinite potential.</span>
        </p>

        {/* Primary CTA - Now part of content flow */}
        <div
          ref={ctaRef}
          className="opacity-0 transition-all duration-700 mt-4 sm:mt-6"
          style={{ transform: 'translateY(30px)' }}
        >
          <button
            onClick={openModal}
            className="inline-block px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#7d2e3d] via-[#8f3545] to-[#d4af37] text-white font-bold text-lg sm:text-xl rounded-lg hover:shadow-2xl hover:shadow-[#7d2e3d]/50 transition-all duration-300 hover:scale-110 animate-pulse-border cursor-pointer"
          >
            Get a Projection
          </button>
        </div>
      </div>

     

      {/* Faded Blurry Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-42 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white backdrop-blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7d2e3d]/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;


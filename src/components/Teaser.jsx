import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Teaser = () => {
  const sectionRef = useRef(null);
  const testimonialsRef = useRef([]);
  const ctaRef = useRef(null);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Business Owner, Mumbai',
      initials: 'RK',
      rating: 5,
      text: "Maya Power transformed our energy infrastructure completely. Not only did we reduce our carbon footprint by 85%, but we're also saving thousands monthly. The installation was seamless, and the team's expertise is unmatched.",
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Homeowner, Pune',
      initials: 'PS',
      rating: 5,
      text: "Excellent service from start to finish! The team was professional, knowledgeable, and helped us understand every step. Our electricity bills have dropped by 90%, and we're proud to contribute to a cleaner environment.",
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Factory Owner, Nagpur',
      initials: 'AP',
      rating: 5,
      text: "As a factory owner, energy costs were a major concern. Maya Power installed a 3MW system that now powers our entire facility. The ROI is incredible, and the maintenance support has been outstanding. Highly recommended!",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          testimonials.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTestimonials(prev => [...prev, index]);
            }, index * 50);
          });
          if (ctaRef.current) {
            setTimeout(() => {
              ctaRef.current.style.opacity = '1';
              ctaRef.current.style.transform = 'translateY(0)';
            }, 300);
          }
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="teaser"
      className="relative py-20 sm:py-24 md:py-32 bg-linear-to-br from-white via-gray-50 to-white overflow-hidden"
      aria-label="Testimonial and call to action section"
    >
      {/* Dynamic Background Shape */}
      <div className="absolute inset-0 bg-linear-to-r from-[#d4af37]/10 via-transparent to-[#7d2e3d]/10 transform -skew-y-2 origin-top" />
      <div className="absolute inset-0 bg-linear-to-l from-[#d4af37]/10 via-transparent to-[#4a7c59]/10 transform skew-y-2 origin-bottom" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#7d2e3d] via-[#d4af37] to-[#7d2e3d] mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Real experiences from satisfied customers who have transformed their energy future with Maya Power
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleTestimonials.includes(index);
            return (
              <article
                key={testimonial.id}
                ref={(el) => {
                  if (el) testimonialsRef.current[index] = el;
                }}
                className={`bg-linear-to-br from-white to-gray-50 backdrop-blur-xl border border-[#7d2e3d]/40 rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#7d2e3d]/20 transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transition: `all 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-[#7d2e3d] to-[#8f3545] rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold text-white shadow-lg">
                      {testimonial.initials}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="flex text-[#d4af37]">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="text-[#7d2e3d] font-semibold text-xs sm:text-sm">
                  — {testimonial.name}, {testimonial.role}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teaser;


import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
// import InspirationSection from '../components/InspirationSection';

const AboutPage = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionsRef = useRef([]);

  const values = [
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainability First',
      description: 'Committed to creating a greener future through innovative solar solutions.',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Innovation Driven',
      description: 'Leveraging cutting-edge technology to deliver superior energy solutions.',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Customer Centric',
      description: 'Putting our clients at the heart of everything we do.',
    },
    {
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Excellence',
      description: 'Striving for perfection in every project we undertake.',
    },
  ];

  const milestones = [
    { year: '2023', title: 'Company Founded', description: 'Started with a vision to revolutionize solar energy in Maharashtra' },
    { year: '2023', title: 'First Major Project', description: 'Completed 5MW solar installation in Nagpur' },
    { year: '2024', title: 'Regional Expansion', description: 'Expanded operations across Maharashtra' },
    { year: '2024', title: '100+ Projects', description: 'Reached milestone of 100 completed projects' },
    { year: '2025', title: '150+ MW Installed', description: 'Crossed 150MW total installed capacity' },
    { year: '2025', title: 'Industry Recognition', description: 'Awarded Best Solar Company in Maharashtra' },
    { year: '2026', title: '300+ Projects', description: 'Celebrated 300+ successful installations' },
  ];

  const team = [
    {
      name: 'Saurabh Dalal',
      role: 'Partner - Sales & Project Execution',
      education: [
        'Bachelor Of Business Administration - In HR And Finance',
        'Masters Of Business Administration - In Sales, Marketing And Operations'
      ],
      experience: '10+ years',
      responsibilities: [
        'Lead Business Operations, Administration and Business Strategy',
        'Lead Generation',
        'B2B, B2C Sales',
        'New Business Developments',
        'Finance Management',
        'Execution Strategy Development (PMP)'
      ],
    },
    {
      name: 'Satish Dalal',
      role: 'Partner - Installations And Execution',
      education: [
        'B.Com',
        'M.Com',
      ],
      experience: '25+ years in MSEDCL',
      responsibilities: [
        'Vendor Management, Contract Negotiations',
        'Project Executions and Logistics',
        'Project Management',
        'Responsible for Project Cost Control',
        'Lead Generations'
      ],
    },
    {
      name: 'Maya Padwad',
      role: 'Mother of Mr Saurabh Dalal',
      image: '/maya-padwad.png',
      fullBio: `Maya Padwad represents the true spirit of innovation, dedication, and resilience. She strongly believes that challenges are simply opportunities to find better solutions. With this mindset, she approaches every problem thoughtfully and focuses on delivering the best possible outcomes. Her commitment to maintaining high quality in every aspect of work has helped build a strong and reliable operational foundation for Maya Power.`,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Title animation
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

  // Scroll-triggered animations
  useEffect(() => {
    const observers = sectionsRef.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSections(prev => [...prev, index]);
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
    <div className="bg-white min-h-screen">
      <SEO
        title="About Us - Our Story, Mission & Leadership"
        description="Maya Power is a Central India–based solar solutions provider. Learn about our story, mission, vision, core values, and leadership team. Over 5 MW EPC projects and 300+ solar installations."
        path="/about"
      />
      {/* Hero Section */}
      <div className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Solar Panels Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p
            ref={subtitleRef}
            className="text-[#d4af37] font-bold tracking-wider uppercase mb-4 opacity-0 transition-all duration-500"
            style={{ transform: 'translateY(20px)' }}
          >
            Empowering Maharashtra
          </p>
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 transition-all duration-500 leading-tight"
            style={{ transform: 'translateY(30px)' }}
          >
            Powering a <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7d2e3d] to-[#8f3545]">Cleaner Future</span>
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Maya Power is dedicated to revolutionizing energy consumption with sustainable, cost-effective solar solutions for homes and businesses.
          </p>
        </div>
      </div>

      <section
        id="about"
        className="py-16 sm:py-20 md:py-24 bg-linear-to-b from-white via-gray-50 to-white"
        aria-label="About us section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Company Story Section */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[0] = el;
          }}
          className={`mb-16 sm:mb-20 md:mb-24 ${visibleSections.includes(0)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            } transition-all duration-500`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed text-">
                <p>
                  Maya Powers is a Central India–based solar solutions provider, committed to energizing the nation with clean, green, and eco-friendly energy alternatives. With over  5 MW of successful EPC projects and more than 300+ solar installations, including Solar Power Plants and Parks, Maya Powers has built a reputation for delivering reliable and sustainable solar energy systems across the region.

                  Our strength lies in combining technical expertise with practical execution. From  custom engineering and expert design to project integration and turnkey EPC solutions, our highly qualified team ensures every project meets the highest quality standards. 
                  <br /> <br />
                  We work with both private and public clients, helping them transition seamlessly to renewable energy.

                  Maya Powers’ vision is to not only contribute to solving India’s energy needs but also to drive the adoption of sustainable practices that create long-term value for our clients. With a proven track record, strong engineering capabilities, and a growing footprint in solar infrastructure, we continue to position ourselves as trusted Solar Energy Experts for diverse energy requirements.

                  Our approach is simple yet effective designing and delivering solar solutions that are reliable, scalable, and cost-efficient, while keeping sustainability at the core of every project.

                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop"
                alt="Maya Power Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Inspiration Section */}
        {/* <div className="mb-16 sm:mb-20 md:mb-24">
          <InspirationSection />
        </div> */}

        {/* Mission & Vision */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[1] = el;
          }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 sm:mb-20 md:mb-24 ${visibleSections.includes(1)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            } transition-all duration-500`}
        >
          <div className="bg-linear-to-br from-[#7d2e3d]/10 to-[#8f3545]/10 rounded-2xl p-8 sm:p-10 border-2 border-[#7d2e3d]/30">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#7d2e3d] mb-4">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To design and deliver reliable, scalable, and cost-efficient solar solutions through expert engineering, quality execution, and turnkey EPC services that help clients transition seamlessly to renewable energy.
            </p>
          </div>
          <div className="bg-linear-to-br from-[#4a7c59]/10 to-[#7d2e3d]/10 rounded-2xl p-8 sm:p-10 border-2 border-[#4a7c59]/30">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#4a7c59] mb-4">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To power India’s future with clean and sustainable solar energy by driving widespread adoption of renewable solutions that create long-term value for communities, businesses, and the environment.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[2] = el;
          }}
          className={`mb-16 sm:mb-20 md:mb-24 ${visibleSections.includes(2)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            } transition-all duration-500`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#7d2e3d]/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-[#7d2e3d] mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[3] = el;
          }}
          className={`mb-16 sm:mb-20 md:mb-24 ${visibleSections.includes(3)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            } transition-all duration-500`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#7d2e3d] to-[#8f3545] transform md:-translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-center"
                >
                  {/* Left Card (Even Index) */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 pl-12 md:pl-0 md:pr-8 md:text-right">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                          <div className="text-[#7d2e3d] font-bold text-lg sm:text-xl mb-2">{milestone.year}</div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
                        </div>
                      </div>
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-linear-to-r from-[#7d2e3d] to-[#8f3545] rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 shrink-0" />
                      {/* Empty Space on Right */}
                      <div className="flex-1 md:pl-8 hidden md:block" />
                    </>
                  ) : (
                    <>
                      {/* Empty Space on Left */}
                      <div className="flex-1 md:pr-8 hidden md:block" />
                      {/* Timeline Dot */}
                      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-linear-to-r from-[#7d2e3d] to-[#8f3545] rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 shrink-0" />
                      {/* Right Card (Odd Index) */}
                      <div className="flex-1 pl-12 md:pl-8 md:text-left">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                          <div className="text-[#7d2e3d] font-bold text-lg sm:text-xl mb-2">{milestone.year}</div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div
          ref={(el) => {
            if (el) sectionsRef.current[4] = el;
          }}
          className={`mb-16 sm:mb-20 md:mb-24 ${visibleSections.includes(4)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            } transition-all duration-500`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center px-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 text-base sm:text-lg text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
            Meet the leaders driving our vision for sustainable solar solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-[#7d2e3d]/20 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Header - name & role */}
                <div className="px-5 py-4 sm:px-3 sm:py-5 bg-linear-to-br from-[#7d2e3d] to-[#8f3545]">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#d4af37] font-medium text-xs sm:text-sm uppercase tracking-wider">{member.role}</p>
                </div>

                <div className="p-3 flex flex-col grow">
                  {member.fullBio ? (
                    <>
                      {member.image && (
                        <div className="mb-1">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-auto aspect-4/2 object-cover rounded-xl border border-[#7d2e3d]/15 shadow-sm mx-auto"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                        {member.fullBio.split('\n').map((paragraph, idx) => {
                          const trimmed = paragraph.trim();
                          if (!trimmed) return null;
                          return (
                            <p key={idx} className="leading-relaxed">
                              {trimmed}
                            </p>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Education</h4>
                        <ul className="space-y-1">
                          {member.education.map((edu, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm leading-snug">
                              <span className="text-[#7d2e3d] shrink-0 mt-0.5">•</span>
                              <span className="wrap-break-word">{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Experience</h4>
                        <p className="text-gray-800 font-semibold text-sm">{member.experience}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Responsibilities</h4>
                        <ul className="space-y-1.5">
                          {member.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm leading-snug">
                              <svg className="w-4 h-4 text-[#7d2e3d] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="wrap-break-word">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
      </section>
    </div>
  );
};

export default AboutPage;


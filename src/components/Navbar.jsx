import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Projects', href: '/projects', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
  ];

  const handleLinkClick = (e, href, isRoute) => {
    if (!isRoute) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90  shadow-lg shadow-[#7d2e3d]/20'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative inline-flex items-center gap-2 sm:gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              {/* Logo Image */}
              <img 
                src="/logo1.png" 
                alt="Maya Power Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transition-all duration-300 group-hover:scale-110"
              />

              {/* Text with Brand Colors */}
              <div className="relative flex flex-col">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-extrabold text-[#7d2e3d] group-hover:text-[#8f3545] transition-all duration-300 leading-tight">
                  MAYA POWER
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#7d2e3d] group-hover:text-[#8f3545] transition-all duration-300 tracking-wide">
                  ENERGISING BETTER
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                  className={`relative transition-colors duration-300 font-medium group cursor-pointer ${
                    isActive
                      ? 'text-[#7d2e3d]'
                      : 'text-gray-700 hover:text-[#7d2e3d]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                  className="relative text-gray-700 hover:text-[#7d2e3d] transition-colors duration-300 font-medium group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
            <button
              onClick={openModal}
              className="px-6 py-2.5 bg-gradient-to-r from-[#7d2e3d] via-[#8f3545] to-[#d4af37] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#7d2e3d]/50 transition-all duration-300 hover:scale-105 inline-block cursor-pointer"
            >
              Get a Projection
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[#7d2e3d] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#7d2e3d] transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#7d2e3d] transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none group cursor-pointer"
            aria-label="Close menu"
          >
            <span className="block w-6 h-0.5 bg-[#7d2e3d] transition-all duration-300 rotate-45 translate-y-2 group-hover:bg-[#8f3545]" />
            <span className="block w-6 h-0.5 bg-[#7d2e3d] transition-all duration-300 -rotate-45 -translate-y-2 group-hover:bg-[#8f3545]" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                className={`relative text-2xl font-semibold transition-colors duration-300 group cursor-pointer ${
                  isActive
                    ? 'text-[#7d2e3d]'
                    : 'text-gray-700 hover:text-[#7d2e3d]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] transition-all duration-300 rounded-full ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                className="relative text-2xl font-semibold text-gray-700 hover:text-[#7d2e3d] transition-colors duration-300 group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            );
          })}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal();
            }}
            className="px-8 py-3 bg-gradient-to-r from-[#7d2e3d] via-[#8f3545] to-[#d4af37] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#7d2e3d]/50 transition-all duration-300 text-lg hover:scale-105 inline-block cursor-pointer"
          >
            Get a Projection
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


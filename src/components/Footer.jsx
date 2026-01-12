import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const { addToast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For phone field, only allow digits and limit to 10 characters
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, ''); // Remove non-digits
      const limitedValue = digitsOnly.slice(0, 10); // Limit to 10 digits
      setFormData((prev) => ({
        ...prev,
        [name]: limitedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location.trim()) {
      addToast({ message: 'Please fill in all required fields.', type: 'error' });
      return;
    }
    
    // Validate phone number - must be exactly 10 digits
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      addToast({ message: 'Please enter a valid 10-digit phone number.', type: 'error' });
      return;
    }
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello! I'm interested in your solar panel services.

*Contact Information:*
Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim()}
Location: ${formData.location.trim()}

Please get back to me soon. Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (9270420922)
    const whatsappNumber = '9270420922';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    addToast({ message: 'Opening WhatsApp to send your inquiry...', type: 'success' });
    
    // Log for debugging
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
    });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about', isRoute: true },
      { name: 'Our Services', href: '/services', isRoute: true },
      { name: 'Projects', href: '/projects', isRoute: true },
    ],
    resources: [
      { name: 'FAQ', href: '#faq', isRoute: false },
      { name: 'Support', href: '#support', isRoute: false },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: '#' },
    { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', href: '#' },
    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', href: '#' },
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', href: '#' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Two Column Layout */}
        <div className="pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-20 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* LEFT SIDE - All Details */}
            <div className="lg:col-span-2">
              {/* Top Row: Maya Power, Company, Resources */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
                {/* Maya Power */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7d2e3d] via-[#d4af37] to-[#7d2e3d] mb-4">
                    Maya Power
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Harnessing the power of the sun to create a sustainable future. 
                    Clean energy solutions for tomorrow.
                  </p>
                </div>

                {/* Company Links */}
                <div>
                  <h4 className="text-white font-bold text-base mb-4">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        {link.isRoute ? (
                          <Link
                            to={link.href}
                            className="text-gray-300 hover:text-[#7d2e3d] transition-colors duration-300 text-sm relative group inline-block cursor-pointer"
                          >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] transition-all duration-300 group-hover:w-full" />
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-gray-300 hover:text-[#7d2e3d] transition-colors duration-300 text-sm relative group inline-block cursor-pointer"
                          >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] transition-all duration-300 group-hover:w-full" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h4 className="text-white font-bold text-base mb-4">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        {link.isRoute ? (
                          <Link
                            to={link.href}
                            className="text-gray-300 hover:text-[#7d2e3d] transition-colors duration-300 text-sm relative group inline-block cursor-pointer"
                          >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] transition-all duration-300 group-hover:w-full" />
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-gray-300 hover:text-[#7d2e3d] transition-colors duration-300 text-sm relative group inline-block cursor-pointer"
                          >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7d2e3d] to-[#8f3545] transition-all duration-300 group-hover:w-full" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          
              {/* Office Addresses Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                {/* Registered Office */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#7d2e3d] to-[#8f3545] rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-white font-bold text-base">
                      Registered Office
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      <p className="mb-1">Ground Floor, Plot No - 50, Mauli,</p>
                      <p className="mb-1">Lokmanya Gruha Nirman Society,</p>
                      <p className="mb-1">Behind Besa, Jagannath Nagar,</p>
                      <p className="mb-1">Besa, Nagpur, Maharashtra 440037</p>
                    </div>
                    
                    <div className="pt-2  space-y-2">
                      <a
                        href="tel:9579323242"
                        className="flex items-start text-sm text-gray-300 hover:text-[#7d2e3d] transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2 text-[#7d2e3d] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <span className="text-xs text-gray-400 block">Customer Support:</span>
                          <span className="font-medium">9579323242</span>
                        </div>
                      </a>
                      <a
                        href="tel:9270420922"
                        className="flex items-start text-sm text-gray-300 hover:text-[#7d2e3d] transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2 text-[#7d2e3d] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <span className="text-xs text-gray-400 block">Sales & Enquiry:</span>
                          <span className="font-medium">9270420922</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Branch Office */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#4a7c59] to-[#7d2e3d] rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-bold text-base">
                      Branch Office
                    </h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      <p className="mb-1">T301, Ashoka Mall, Bund Garden Road,</p>
                      <p className="mb-1">Near HDFC Bank,</p>
                      <p className="mb-1">Pune, Maharashtra</p>
                    </div>
                    
                    <div className="pt-2 space-y-2">
                      <a
                        href="tel:9823688050"
                        className="flex items-start text-sm text-gray-300 hover:text-[#7d2e3d] transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2 text-[#7d2e3d] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <span className="text-xs text-gray-400 block">Sales & Enquiry:</span>
                          <span className="font-medium">9823688050</span>
                        </div>
                      </a>
                      <a
                        href="tel:9579323242"
                        className="flex items-start text-sm text-gray-300 hover:text-[#7d2e3d] transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2 text-[#7d2e3d] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <span className="text-xs text-gray-400 block">Customer Support:</span>
                          <span className="font-medium">9579323242</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* RIGHT SIDE - Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 sm:p-6 border border-gray-700 h-full">
                <h4 className="text-white font-bold text-lg sm:text-xl mb-2">
                  Get In Touch
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-5">
                  Fill out the form and we'll get back to you via WhatsApp
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="footer-name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="footer-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-3 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7d2e3d] focus:border-[#7d2e3d] text-sm text-white placeholder-gray-500 transition-all duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="footer-email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="footer-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-3 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7d2e3d] focus:border-[#7d2e3d] text-sm text-white placeholder-gray-500 transition-all duration-300"
                    />
                  </div>

                  {/* Phone and Location - Side by side */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="footer-phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="footer-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10 digits"
                        required
                        pattern="[0-9]{10}"
                        maxLength="10"
                        className="w-full px-3 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7d2e3d] focus:border-[#7d2e3d] text-sm text-white placeholder-gray-500 transition-all duration-300"
                      />
                    </div>

                    {/* Location Field */}
                    <div>
                      <label htmlFor="footer-location" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
                        Location <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="footer-location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Your location"
                        required
                        className="w-full px-3 py-2.5 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7d2e3d] focus:border-[#7d2e3d] text-sm text-white placeholder-gray-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#7d2e3d] via-[#8f3545] to-[#d4af37] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#7d2e3d]/50 transition-all duration-300 hover:scale-[1.02] text-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-2 ">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              © {currentYear} Maya Power. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
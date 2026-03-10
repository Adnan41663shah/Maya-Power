import React, { useState, useEffect } from 'react';
import { useToast } from '../context/ToastContext';

const ProjectionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    location: '',
  });

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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

  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.fullname.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.location.trim()) {
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
    const whatsappMessage = `Hello! I'm interested in getting a solar panel projection.

*Contact Information:*
Full Name: ${formData.fullname.trim()}
Email: ${formData.email.trim()}
Phone: ${formData.phone.trim()}
Location: ${formData.location.trim()}

Please provide me with a projection. Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (9270420922)
    const whatsappNumber = '9823688050';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    addToast({ message: 'Opening WhatsApp to send your request...', type: 'success' });
    
    // Log for debugging
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      location: '',
    });
    
    // Close modal
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#7d2e3d] to-[#8f3545]">
            Get a Projection
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-full p-1 cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Full Name Field */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-base text-gray-900 placeholder-gray-400 transition-all duration-300"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-base text-gray-900 placeholder-gray-400 transition-all duration-300"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="10-digit Phone Number"
              required
              pattern="[0-9]{10}"
              maxLength="10"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-base text-gray-900 placeholder-gray-400 transition-all duration-300"
            />
          </div>

          {/* Location Field */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter your location"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-base text-gray-900 placeholder-gray-400 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-linear-to-r from-[#7d2e3d] via-[#8f3545] to-[#d4af37] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#7d2e3d]/50 transition-all duration-300 hover:scale-105 text-base cursor-pointer mt-6"
          >
            Submit & Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectionModal;


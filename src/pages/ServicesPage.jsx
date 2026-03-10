import React, { useEffect } from 'react';
import Services from '../components/Services';
import SEO from '../components/SEO';

const ServicesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Solar Services - EPC, Rooftop & Industrial Solutions"
        description="Maya Power offers end-to-end solar services: EPC, rooftop solar, industrial solar solutions, O&M, and consultancy. Comprehensive solar energy solutions across Maharashtra."
        path="/services"
      />
      <Services />
    </>
  );
};

export default ServicesPage;


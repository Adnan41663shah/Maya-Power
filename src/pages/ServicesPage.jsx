import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Services />
  );
};

export default ServicesPage;


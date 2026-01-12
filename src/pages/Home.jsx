import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Teaser from '../components/Teaser';
import ProductTieUps from '../components/ProductTieUps';
import SolarJourney from '../components/SolarJourney';

const Home = () => {
  useEffect(() => {
    // Scroll to top when navigating to home
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ProductTieUps />
      <SolarJourney />
      <Teaser />
    </>
  );
};

export default Home;


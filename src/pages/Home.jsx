import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Teaser from '../components/Teaser';
import ProductTieUps from '../components/ProductTieUps';
import SolarJourney from '../components/SolarJourney';
import SEO from '../components/SEO';

const Home = () => {
  useEffect(() => {
    // Scroll to top when navigating to home
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Maya Power - Solar Energy Solutions in Maharashtra"
        description="Harnessing the power of the sun for a sustainable future. Maya Power provides solar panel installations, EPC projects, and renewable energy solutions across Maharashtra. Reduce carbon footprint and energy costs."
        path="/"
      />
      <Hero />
      <WhyChooseUs />
      <ProductTieUps />
      <SolarJourney />
      <Teaser />
    </>
  );
};

export default Home;


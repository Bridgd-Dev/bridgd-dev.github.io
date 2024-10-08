import React,  { useEffect } from 'react';
import Hero from '../components/Hero';
import KeyValue from '../components/KeyValue';
import FeaturedProjects from '../components/FeaturedProjects';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <KeyValue />
      <FeaturedProjects />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
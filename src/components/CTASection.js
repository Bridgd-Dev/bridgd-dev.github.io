import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-banner">
      <h2>Ready to bridge the gap between education and the real world?</h2>
      <Link to="/get-started" className="cta-btn">Get Involved</Link>
    </section>
  );
};

export default CTASection;
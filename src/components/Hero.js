import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id = "about">
      <div className="hero-content">
        <h1 className="hero-headline">Bridging Education with Real-World Projects</h1>
        <h2 className="hero-subheadline">Empowering students, educators, and businesses through project-based learning.</h2>
        <div className="cta-buttons">
          <Link to="/projects" className="cta-student">Explore Projects</Link>
          <button className="cta-business">Post a Project</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
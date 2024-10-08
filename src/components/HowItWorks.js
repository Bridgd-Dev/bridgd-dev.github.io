import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How Bridg’d Works</h2>
      <div className="steps-container">
        <div className="step">
          <h3>Step 1: Real Projects</h3>
          <p>Businesses post real-world projects, seeking innovative solutions from fresh perspectives.</p>
        </div>
        <div className="step">
          <h3>Step 2: Match Your Skills</h3>
          <p>Students apply to projects based on their skills and passions, ensuring the perfect match for both parties.</p>
        </div>
        <div className="step">
          <h3>Step 3: Guided Collaboration</h3>
          <p>Work collaboratively with your team, supported by guidance from educators to ensure impactful results.</p>
        </div>
        <div className="step">
          <h3>Step 4: Deliver Impact</h3>
          <p>Deliver solutions, gain real-world experience, and create a positive impact in the industry.</p>
        </div>
      </div>

      <div className="gamification-subheader">
        <h3>Collaborative Gamification on Bridg’d</h3>
        <p>
          Students earn experience points, badges, and corporate endorsements as they complete projects. The platform highlights the power of teamwork, where students and contributors can work together to solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faGraduationCap, faUsers, faGamepad } from '@fortawesome/free-solid-svg-icons';
import './KeyValue.css';

const KeyValue = () => {
  return (
    <section className="key-value" id="key-value">
      <h2>Why Choose Bridg’d?</h2>
      <div className="key-columns">
        <div className="column">
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <h3>Real-world experience</h3>
          <p>Acquire hands-on skills that prepare you for real challenges. Learn how to apply your knowledge practically in various environments.</p>
        </div>
        <div className="column">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <h3>Enhance learning</h3>
          <p>Boost your academic achievements through innovative methods. Experience tailored educational strategies that make a difference.</p>
        </div>
        <div className="column">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <h3>Collaborative Teams</h3>
          <p>Engage with diverse teams across multiple disciplines. Cultivate collaboration skills essential for future career success.</p>
        </div>
        <div className="column">
          <FontAwesomeIcon icon={faGamepad} className="icon" />
          <h3>Gamification</h3>
          <p>Earn rewards such as badges and certifications for your achievements. Experience a fun, engaging way to track your progress.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyValue;
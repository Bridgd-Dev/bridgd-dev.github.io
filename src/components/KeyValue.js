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
          <p>Gain practical skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="column">
          <FontAwesomeIcon icon={faGraduationCap} className="icon" />
          <h3>Enhance learning</h3>
          <p>Improve educational outcomes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="column">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <h3>Collaborative Teams</h3>
          <p>Work with multidisciplinary teams. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="column">
          <FontAwesomeIcon icon={faGamepad} className="icon" />
          <h3>Gamification</h3>
          <p>Earn experience points, badges, and endorsements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyValue;
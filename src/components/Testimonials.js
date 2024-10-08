import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Partners Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial">
          <div className="avatar-placeholder"></div>
          <p>"Bridg'd connected us with motivated students who exceeded expectations."</p>
          <strong>John Doe, Company XYZ</strong>
        </div>
        <div className="testimonial">
          <div className="avatar-placeholder"></div>
          <p>"The projects facilitated a collaborative learning experience."</p>
          <strong>Jane Smith, Nonprofit ABC</strong>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
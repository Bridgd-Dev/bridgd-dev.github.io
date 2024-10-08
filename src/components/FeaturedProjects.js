import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  return (
    <section className="featured-projects" id="projects">
      <h2>Explore Our Impactful Projects</h2>

      <h3 className="section-title">Social Impact Projects</h3>
      <div className="project-grid">
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>Sustainable Water Solutions</h3>
          <p>Focus Area: Sustainability</p>
          <Link to="/projects/sustainable-water-solutions" className="btn">Learn More</Link>
        </div>
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>Community Health Initiative</h3>
          <p>Focus Area: Health</p>
          <Link to="/projects/community-health-initiative" className="btn">Learn More</Link>
        </div>
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>Green Energy Solutions</h3>
          <p>Focus Area: Energy</p>
          <Link to="/projects/green-energy-solutions" className="btn">Learn More</Link>
        </div>
      </div>

      <h3 className="section-title">Client-Based Projects</h3>
      <div className="project-grid">
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>Custom Software Development</h3>
          <p>Client: Tech Solutions Inc.</p>
          <Link to="/projects/custom-software-development" className="btn">Learn More</Link>
        </div>
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>Web Application for E-Commerce</h3>
          <p>Client: ShopSmart Online</p>
          <Link to="/projects/web-application-ecommerce" className="btn">Learn More</Link>
        </div>
        <div className="project-card">
          <div className="image-placeholder"></div>
          <h3>CRM Integration System</h3>
          <p>Client: Global Enterprises</p>
          <Link to="/projects/crm-integration-system" className="btn">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
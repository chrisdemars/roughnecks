import React from 'react';

const Services = () => {
  return (
    <section className="services-wrapper">
      <div className="wrapper">
        <div className="interior-image-section">
          <img src={'./services.jpg'} alt="" />
        </div>
        <div className="services-section">
          <h2>Services</h2>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import BookButton from './BookButton';

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
            <li>Haircut | $25</li>
            <li>Haircut with Beard Trim | $35</li>
            <li>Haircut with a Straigh Razor Shave | $40</li>
            <li>Beard Trim | $15</li>
          </ul>
          <p>For more services click the button below to book your spot!</p>
          <BookButton />
        </div>
      </div>
    </section>
  );
};

export default Services;

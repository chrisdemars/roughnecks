import React from 'react';

const PrimaryFooter = () => {
  return (
    <section className="primary-footer-wrapper">
      <div className="wrapper">
        <div className="hours-section">
          <h2>Hours</h2>
          <ul>
            <li>Haircut | $25</li>
            <li>Haircut with Beard Trim | $35</li>
            <li>Haircut with a Straigh Razor Shave | $40</li>
            <li>Beard Trim | $15</li>
          </ul>
        </div>
        <div className="location-section">
          <h2>Location</h2>
        </div>
        <div className="primary-footer-image-section">
          <img src={'./chair.jpg'} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PrimaryFooter;

import React from 'react';
import logo from '../images/circle-logo.svg';

import BookButton from './BookButton';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="wrapper">
        <section className="hero">
          <div className="about-section">
            <h1>Welcome to Roughnecks!</h1>
            <p>
              Here at Roughnecks, we offer a wide array of men’s cuts and styles
              along with straight razor work to make any haircut service
              complete. Book your appointment now!
            </p>
            <p>Appointments are encouraged and guaranteed.</p>
            <p>Walk-ins are welcome however, may result in waiting.</p>
            <BookButton />
          </div>
          <div className="logo-section">
            <img src={logo} alt="Roughnecks Barbershop Logo" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

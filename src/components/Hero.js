import React from 'react';
import logo from '../images/circle-logo.svg';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="wrapper">
        <section className="hero">
          <div className="logo-section">
            <img src={logo} alt="Roughnecks Barbershop Logo" />
          </div>
          <div className="about-section">
            <h1>Welcome to Roughnecks Barbershop!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              laudantium repudiandae maiores possimus eligendi, nostrum quaerat
              ratione maxime a! Illo.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

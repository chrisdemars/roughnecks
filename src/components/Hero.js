import React from 'react';
import BookButton from './BookButton';
// import StoreButton from './StoreButton';
import logo from '../images/circle-logo.svg';

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='wrapper'>
        <section className='hero'>
          <div className='about-section'>
            <h1>Welcome to Roughnecks!</h1>
            <p>
              Here at Roughnecks, we offer a wide array of men’s cuts and styles
              along with straight razor work to make any haircut service
              complete. Book your appointment now!
            </p>
            <p>
              To provide a more sanitary work environment, and to keep everyone
              as safe as possible, our services will be{' '}
              <strong>APPOINTMENT ONLY.</strong>
            </p>
            <BookButton />
            {/* <StoreButton /> */}
          </div>
          <div className='logo-section'>
            <img src={logo} alt='Roughnecks Barbershop Logo' />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

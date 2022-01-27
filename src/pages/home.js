import React from 'react';
import Hero from '../components/Hero';
import BarberHeadshots from '../components/BarberHeadshots';
import PrimaryFooter from '../components/PrimaryFooter';
import SecondaryFooter from '../components/SecondaryFooter';
import NotificationBanner from '../components/NotificationBanner';

function Home() {
  return (
    <>
      <NotificationBanner />
      <Hero />
      <BarberHeadshots />
      <PrimaryFooter />
      <SecondaryFooter />
    </>
  );
}

export default Home;

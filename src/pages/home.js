import React from 'react';
import Hero from '../components/Hero';
import BarberHeadshots from '../components/BarberHeadshots';
import Map from '../components/Map';
import PrimaryFooter from '../components/PrimaryFooter';
import SecondaryFooter from '../components/SecondaryFooter';
import NotificationBanner from '../components/NotificationBanner';

function Home (){

  return (
      <>
      <NotificationBanner/>
        <Hero />
        <BarberHeadshots />
        <Map />
        <PrimaryFooter />
        <SecondaryFooter />
      </>
  );
}

export default Home;
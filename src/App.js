import React from 'react';
import Hero from './components/Hero';
import BarberHeadshots from './components/BarberHeadshots';
import Testimony from './components/Testimony';
import Map from './components/Map';
import PrimaryFooter from './components/PrimaryFooter';
import SecondaryFooter from './components/SecondaryFooter';

import '../src/styles.scss';

function App() {
  return (
    <div>
      <Hero />
      <BarberHeadshots />
      <Testimony />
      <Map />
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  );
}

export default App;

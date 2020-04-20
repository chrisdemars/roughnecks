import React from 'react';
import Hero from './components/Hero';
import Testimony from './components/Testimony';
import Services from './components/Services';
import Map from './components/Map';
import PrimaryFooter from './components/PrimaryFooter';
import SecondaryFooter from './components/SecondaryFooter';

import '../src/styles.scss';

function App() {
  return (
    <div>
      <Hero />
      <Testimony />
      <Services />
      <Map />
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  );
}

export default App;

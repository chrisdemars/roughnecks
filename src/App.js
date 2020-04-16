import React from 'react';
import Hero from './components/Hero';
import Testimony from './components/Testimony';
import Services from './components/Services';
import PrimaryFooter from './components/PrimaryFooter';
import SecondaryFooter from './components/SecondaryFooter';

import '../src/styles.scss';

function App() {
  return (
    <div>
      <Hero />
      <Testimony />
      <Services />
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  );
}

export default App;

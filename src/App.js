import React from 'react';
import Hero from './components/Hero';
import Testimony from './components/Testimony';
import Services from './components/Services';
import PrimaryFooter from './components/PrimaryFooter';
import SecondaryFooter from './components/SecondaryFooter';

import './styles.css';

import { useMediaPredicate } from 'react-media-hook';

function App() {
  const isMedium = useMediaPredicate('(min-width: 480px)');
  const isLarge = useMediaPredicate('(min-width: 860px)');
  const breakpoint = isLarge ? 'large' : isMedium ? 'medium' : 'small';
  return (
    <div className={`app-container ${breakpoint}`}>
      <Hero />
      <Testimony />
      <Services />
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimony from "./components/Testimony";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./styles.css";

import { useMediaPredicate } from "react-media-hook";

function App() {
  const isMedium = useMediaPredicate("(min-width: 480px)");
  const isLarge = useMediaPredicate("(min-width: 860px)");
  const breakpoint = isLarge ? "large" : isMedium ? "medium" : "small";
  return (
    <div className={`app-container ${breakpoint}`}>
      <Header />
      <Hero />
      <Testimony />
      <Services />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import HeroImage from "../hero.jpg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <img src={HeroImage} alt="" />
      </section>
    </>
  );
};

export default Hero;

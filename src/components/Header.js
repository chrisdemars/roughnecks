import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="Roughnecks Barbershop" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

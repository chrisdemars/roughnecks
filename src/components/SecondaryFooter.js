import React from 'react';

const SecondaryFooter = () => {
  return (
    <footer className="secondary-footer-wrapper">
      <div className="wrapper">
        <div className="secondary-footer-section copyright">
          <p>&copy; Copyright 2020, Roughnecks Barbershop</p>
        </div>
        <div className="secondary-footer-section props">
          <p>
            Design & Development by{' '}
            <a
              href="http://chrisdemars.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris DeMars
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SecondaryFooter;

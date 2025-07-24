import React from 'react';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">CONECTATUMARCA</div>
        <nav>
          <a href="#contacto" className="cta-button-header">Contáctanos ahora</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

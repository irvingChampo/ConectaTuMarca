import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <h1>CONECTATUMARCA: Tu Presencia Digital Profesional y Rápida.</h1>
        <p className="subtitle">
          Creamos landing pages personalizadas y accesibles para impulsar tu negocio.
        </p>
        <a href="#contacto" className="cta-button-main">Contáctanos ahora</a>
      </div>
    </section>
  );
};

export default Hero;
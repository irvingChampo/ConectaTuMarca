import React from 'react';
import '../Styles/Cta.css';

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <h2>¿Listo para llevar tu negocio al siguiente nivel?</h2>
        <a href="https://wa.me/5219612743191?text=Hola,%20quisiera%20una%20cotización%20para%20mi%20landing%20page." target="_blank" rel="noopener noreferrer" className="cta-button-main">
          Obtenga una cotización
        </a>
      </div>
    </section>
  );
};

export default Cta;
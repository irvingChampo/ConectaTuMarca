import React from 'react';
import '../Styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonial-card">
          <blockquote>
            "¡El equipo de CONECTATUMARCA transformó mi presencia en línea! Mi nueva landing page es rápida, profesional y ha incrementado mis contactos."
          </blockquote>
          <cite>- Emprendedor Satisfecho (¡Reemplazar con testimonio real!)</cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import '../Styles/Benefits.css';
import { FaPaintBrush, FaComments, FaRocket, FaBoxOpen } from 'react-icons/fa';

const benefitsData = [
    { icon: <FaPaintBrush/>, title: "Presencia Profesional", features: "Adaptado a tu branding para establecer credibilidad y autoridad." },
    { icon: <FaComments/>, title: "Conexión Directa", features: "Botón flotante de WhatsApp y formularios de contacto." },
    { icon: <FaRocket/>, title: "Visibilidad y Acceso", features: "Carga rápida y compatible con cualquier dispositivo." },
    { icon: <FaBoxOpen/>, title: "Solución Integral", features: "Dominio, Hosting, SSL, portafolio y tienda express." }
];

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        <h2>Beneficios y Características Clave</h2>
        <div className="benefits-grid">
          {benefitsData.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.features}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
import React from 'react';
import '../Styles/HowItWorks.css';
import { FaPhone, FaPalette, FaRocket } from 'react-icons/fa';

const steps = [
    { icon: <FaPhone />, title: "1. Contacto Inicial", description: "Nos cuentas tu idea y necesidades." },
    { icon: <FaPalette />, title: "2. Diseño Personalizado", description: "Creamos un diseño único para tu marca." },
    { icon: <FaRocket />, title: "3. Lanzamiento y Soporte", description: "Publicamos tu página y te damos soporte." }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2>Nuestro Proceso Simplificado</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
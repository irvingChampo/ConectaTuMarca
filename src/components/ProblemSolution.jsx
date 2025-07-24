import React from 'react';
import '../Styles/ProblemSolution.css';
import { FaExclamationCircle, FaLightbulb } from 'react-icons/fa';

const ProblemSolution = () => {
  return (
    <section className="problem-solution-section" style={{backgroundColor: 'var(--dark-bg-secondary)'}}>
      <div className="container">
        <div className="grid">
          <div className="card">
            <FaExclamationCircle className="icon" />
            <h3>El Problema</h3>
            <p>Miles de pequeños negocios operan únicamente a través de redes sociales, sin una página web propia que consolide su identidad y facilite la conversión de visitas en ventas.</p>
          </div>
          <div className="card solution-card">
            <FaLightbulb className="icon" />
            <h3>Nuestra Solución</h3>
            <p>En CONECTATUMARCA, diseñamos landing pages que te brindan una solución integral: diseño profesional, contacto directo con tus clientes, un portafolio o tienda express, y un canal directo desde tus redes sociales a ventas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
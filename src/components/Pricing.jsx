import React from 'react';
import '../Styles/Pricing.css';
import { FaCheckCircle } from 'react-icons/fa';

// Lista de características para mostrar en la tarjeta de precios
const features = [
  "1 página web con información del producto o servicio",
  "Compatible con computadoras y dispositivos móviles",
  "Botón flotante de Whatsapp y Chat personalizado",
  "Formulario de Contacto",
  "Enlace a Redes Sociales",
  "Métodos de Contacto (teléfono, email, dirección, etc.)",
  "Dirección y Mapa de Google Maps interactivo",
  "Tiempo de carga optimizado (rápido)",
  "Aviso de Privacidad",
  "Dominio, Hosting y certificado SSL gratis por 6 meses",
  "Tiempo de entrega: Rápida",
  "Logos personalizados (En caso de no contar con ellos)",
  "Carrusel de hasta 3 imágenes",
  "Animaciones suaves y microinteracciones",
  "Secciones ancladas para navegación fluida"
];

const Pricing = () => {
  return (
    <section id="precios" className="pricing-section">
      <div className="container">
        <h2>Un Plan Simple y Completo</h2>
        <div className="pricing-card">
          <div className="pricing-header">
            <h3>Paquete Landing Page Pro</h3>
            <p className="price"><span>$</span>5,500<span className="currency">MXN</span></p>
            <p className="payment-note">Pago único</p>
          </div>
          <div className="pricing-features">
            <h4>Todas las características incluidas:</h4>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" /> {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="pricing-footer">
             <a href="https://wa.me/5219612743191?text=Hola,%20quisiera%20contratar%20el%20paquete%20Landing%20Page%20Pro." target="_blank" rel="noopener noreferrer" className="cta-button-main">
              Contratar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
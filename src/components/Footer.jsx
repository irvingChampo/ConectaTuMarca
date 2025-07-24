import React from 'react';
import '../Styles/Footer.css';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = '5219612743191';
  const email = '231206@ids.upchiapas.edu.mx';

  return (
    <footer id="contacto" className="main-footer">
      <div className="container footer-container">
        <h3>¿Listo para conectar tu marca?</h3>
        <div className="contact-info">
          <a href={`https://wa.me/${whatsappNumber}?text=Hola,%20me%20interesa%20una%20landing%20page.`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> 961 274 3191
          </a>
          <a href={`mailto:${email}`}>
            <FaEnvelope /> 231206@ids.upchiapas.edu.mx
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CONECTATUMARCA. Todos los derechos reservados.</p>
          <p><a href="#">Aviso de Privacidad</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
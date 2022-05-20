import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer-name">&lt;/Nicole&gt;</div>

        <ul style={{listStyleType: 'none'}} className="footer-list">
            <li><a href="#main">Inicio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#experience">Experiencia</a></li>
        </ul>

        <div className="footer-social">
            <a href="https://www.linkedin.com/in/yesica-nicole-gonzalez/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/YesicaGonzalezN" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        </div>
        <div className="footer-copy">
            <small>&copy; Nicole González - Todos los derechos reservados.</small>
        </div>   
    </footer>
  )
}

export default Footer;
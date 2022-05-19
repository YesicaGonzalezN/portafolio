import React from 'react';
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
        <div className="nav-left">
            <div className="nav-name">&lt;/Nicole&gt;</div>
            <span>toggle</span>
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Inicio</li>
                    <li>Sobre mi</li>
                    <li>Proyectos</li>
                    <li>Experiencia</li>
                </ul>
            </div>
            <button className="button nav-button">Contáctame</button>
        </div>
    </div>
  )
}

export default Nav
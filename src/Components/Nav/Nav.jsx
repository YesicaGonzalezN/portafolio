import React from 'react';
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
        <div className="nav-left">
            <div className="nav-name">&lt;/Nicole&gt;</div>
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul className="menu-items" style={{listStyleType: 'none'}}>
                    <li><a href="#main">Inicio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#contact">Contáctame</a></li>
                </ul>
            </div>
        </div>
        <span className="btn-menu">
            <i class="fa fa-bars"></i>
        </span>
    </div>
  )
}

export default Nav
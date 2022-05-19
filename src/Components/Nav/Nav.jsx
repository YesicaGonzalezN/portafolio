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
                <ul style={{listStyleType: 'none'}}>
                    <li><a href=".">Inicio</a></li>
                    <li><a href=".">About</a></li>
                    <li><a href=".">Proyectos</a></li>
                    <li><a href=".">Experiencia</a></li>
                </ul>
            </div>
            <button className="button nav-button">Contáctame</button>
        </div>
        <span className="btn-menu">
            <i class="fa fa-bars"></i>
        </span>
    </div>
  )
}

export default Nav
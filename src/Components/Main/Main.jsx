import React from 'react';
import './Main.css';
import character from '../../img/character.png';
import CV from '../../assets/CVYesica Gonzalez-DesarrolloWeb.pdf';

const Main = () => {
  return (
    <div id="main">
        <div className="main-left">
            <div className="main-name">
                <span>Hola! Soy</span>
                <span>Nicole González</span>
                <span>Desarrolladora Web Front End</span>
            </div>
            <a href={CV} className="main-button">Descargar CV</a>
            <div className="main-icons">
            <a href="https://github.com/YesicaGonzalezN" target="_blank" rel="noreferrer">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yesica-nicole-gonzalez/" target="_blank" rel="noreferrer">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            </div>
        </div>
        <div className="main-right">
            <div className="circle">
              <span></span>
              <span></span>
              <span></span>
              <div className="content">
                <img src={character} alt="Img Character" className="img-circle"/>
              </div>
            </div>
        </div>
        <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        </section>
    </div>
  )
}

export default Main;
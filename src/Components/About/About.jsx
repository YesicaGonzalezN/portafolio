import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about">
        <div className="title">
        <h3>¡Conoceme!</h3>
        <h2>Sobre Mi</h2>
        </div>

        <div className="container about-container">
            <div className="about-content">
                 <div className="about-cards">
                     <div className="about-bg-card">
                     <article className="about-card">
                        <i class="fa-solid fa-briefcase"></i>
                         <h4>Experiencia</h4>
                         <small>2 años</small>
                     </article>
                     </div>
                     <div className="about-bg-card">
                     <article className="about-card">
                        <i class="fa-solid fa-code"></i>
                         <h4>Conocimientos</h4>
                         <small>HTML, CSS, JavaScript, React, Node.js</small>
                     </article>
                     </div>
                     <div className="about-bg-card">
                     <article className="about-card">
                        <i class="fa-solid fa-palette"></i>
                         <h4>Diseño</h4>
                         <small>Photoshop, Adobe Illustrator</small>
                     </article>
                     </div>
                 </div>
                    <div className="about-text">
                 <p>Hola! soy Nicole González, tengo 26 años y soy Desarrolladora Front End. Actualmente me estoy formando para convertirme en Full Stack. Inicie en el mundo de la programación hace dos años de manera autodidacta, nunca me imaginé la pasión que me iba a generar. Por este motivo hace un año decidí empezar a certificarme para demostrar mis conocimientos y poder conseguir mi primer experiencia laboral en el increíble mundo IT.
                     Me considero una persona dinámica, responsable y muy trabajadora, con muchas ganas de seguir aprendiendo nuevas tecnologías.</p>
                     </div>
            </div>
        </div>
    </div>
  )
}

export default About;
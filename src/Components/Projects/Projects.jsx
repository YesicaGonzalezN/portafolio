import React from 'react';
import './Projects.css';
import Aqualife from '../../img/aqualife.png';
import Lista from '../../img/lista.png';
import Calculadora from '../../img/calculadora.png';

const Projects = () => {
  return (
   <div id="projects">
       <div className="title">
           <h3>Proyectos</h3>
       </div>

       <div className="cards">
            <div className="card">
                <div className="img-card">
                <img src={Aqualife} alt="Aqualife" />
                </div>
                <div className="content-card">
                    <div className="details">
                        <h2>AquaLife</h2>
                        <h3>Aplicación Web</h3>
                        <div className="data">
                        <p>Aplicación Web para calcular el agua que se debe tomar diariamente. Cuenta 
                            con un calculador de IMC.
                        </p>
                        </div>
                        <div className="btn-action">
                            <a href='https://github.com/YesicaGonzalezN/AquaLife.github.io' target='_blank' rel="noreferrer">GitHub</a>
                            <a href='https://aqualife.vercel.app/' target='_blank' rel="noreferrer">Deploy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="img-card">
                <img src={Lista} alt="Lista de Tareas" />
                </div>
                <div className="content-card">
                    <div className="details">
                        <h2>Lista de Tareas</h2>
                        <h3>Aplicación Web</h3>
                        <div className="data">
                        <p>Aplicación Web para agregar notas diarias, tiene la funcionalidad de marcarlas como "realizadas" o "sin realizar".
                        </p>
                        </div>
                        <div className="btn-action">
                            <a href='https://github.com/YesicaGonzalezN/LISTA-DE-TAREAS' target='_blank' rel="noreferrer">GitHub</a>
                            <a href='https://lista-de-tareas-two.vercel.app/' target='_blank' rel="noreferrer">Deploy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="img-card">
                    <img src={Calculadora} alt="Calculadora React" />
                </div>
                <div className="content-card">
                    <div className="details">
                        <h2>Calculadora</h2>
                        <h3>Aplicación Web</h3>
                        <div className="data">
                        <p>Calculadora funcional realizada puramente con React, tiene las operaciones de suma, resta, multiplicación y división.
                        </p>
                        </div>
                        <div className="btn-action">
                            <a href='https://github.com/YesicaGonzalezN/calculadora-react' target='_blank' rel="noreferrer">GitHub</a>
                            <a href='https://calculadora-react-blond.vercel.app/' target='_blank' rel="noreferrer">Deploy</a>
                        </div>
                    </div>
                </div>
            </div>
       </div>
   </div>
  )
}

export default Projects;
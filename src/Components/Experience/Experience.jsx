import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div id="experience">
        <div className="title">
        <h2>Mis Skills</h2>
        </div>
        <div>
        <ul className="skills">
            <li><a href="."><i class="fa-brands fa-html5"></i></a></li>
            <li><a href="."><i class="fa-brands fa-css3"></i></a></li>
            <li><a href="."><i class="fa-brands fa-js"></i></a></li>
            <li><a href="."><i class="fa-brands fa-react"></i></a></li>
            <li><a href="."><i class="fa-brands fa-node-js"></i></a></li>
            <li><a href="."><i class="fa-brands fa-github"></i></a></li>
            <li><a href="."><i class="fa-brands fa-bootstrap"></i></a></li>
        </ul>
        </div>
    </div>
  )
}

export default Experience;
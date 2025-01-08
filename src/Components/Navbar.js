import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../assets/mail.png';
import inicio from '../assets/inicio.png';
import projetosicon from '../assets/projetosicon.png';
import euicon from '../assets/eu.png';
import arrow from '../assets/arrow.png';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="logo">
        <img className='icons' src={mail} alt="email" />
        <a href="mailto:pedro.lbtb@gmail.com">pedro.lbtb@gmail.com</a>
        <img className='arrow-icon' src={arrow} alt="arrow" />
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <img className='icons' src={inicio} alt="inicio" style={{width: "1.5em", marginBottom: "0.2em"}}/>
          <Link className='underline' to="/">Início</Link>
        </div>
        <div className="nav-item">
          <img className='icons' src={projetosicon} alt="inicio" style={{width: "1.5em", marginBottom: "0.2em"}}/>
          <Link className='underline' to="/projects">Projetos</Link>
        </div>
        <div className="nav-item">
        <img className='icons' src={euicon} alt="inicio" style={{width: "1.5em", marginBottom: "0.2em"}}/>
          <Link className='underline' to="/about">Sobre</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
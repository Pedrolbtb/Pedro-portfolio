import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import mail from '../assets/mail.png';
import inicio from '../assets/inicio.png';
import projetosicon from '../assets/projetosicon.png';
import euicon from '../assets/eu.png';
import arrow from '../assets/arrow.png';

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className='nav'>
      <div className="logo">
        <img className='icons' src={mail} alt="email" />
        <a href="mailto:pedro.lbtb@gmail.com">pedro.lbtb@gmail.com</a>
        <img className='arrow-icon' src={arrow} alt="arrow" />
      </div>
      <div className="nav-links">
        <div className={`nav-item ${getLinkClass('/')}`}>
          <img className='icons' src={inicio} alt="inicio" style={{ width: "1.5em", marginBottom: "0.2em" }} />
          <Link className='underline' to="/">Início</Link>
        </div>
        <div className={`nav-item ${getLinkClass('/projects')}`}>
          <img className='icons' src={projetosicon} alt="projetos" style={{ width: "1.5em", marginBottom: "0.2em" }} />
          <Link className='underline' to="/projects">Projetos</Link>
        </div>
        <div className={`nav-item ${getLinkClass('/about')}`}>
          <img className='icons' src={euicon} alt="sobre" style={{ width: "1.5em", marginBottom: "0.2em" }} />
          <Link className='underline' to="/about">Sobre</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

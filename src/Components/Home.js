import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import transition from '../transition';
import fotominha from '../assets/fotominha.png';
import circuloroxo from '../assets/circuloroxo.png';
import circulosemnada from '../assets/circulosemnada.png';
import mail from '../assets/mail.png';
import 'font-awesome/css/font-awesome.min.css';
import arrow from '../assets/arrow.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const fullText = "Sou um desenvolvedor front-end e UI/UX Designer e editor de vídeos, apaixonado por inovação e arte, sempre em busca de criar experiências digitais únicas e impactantes.";

  useEffect(() => {
    // Bloqueando o scroll no body e html
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden'; // Também bloqueia o scroll no HTML
  
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Start cursor blinking after typing is done
        setInterval(() => {
          setIsCursorVisible(prev => !prev);
        }, 500); // Blinking interval
      }
    }, 50);
  
    return () => {
      // Permitindo o scroll novamente
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto'; // Restaurando o overflow no HTML
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfólio</title>
      </Helmet>
      <div className='containerHome'>
        <div className="text-content text-contentMob">
          <h1 className='h1Portfolio'>
            <span className="highlight">Olá, eu sou o</span> <br />Pedro Bomfim
          </h1>
          <h2 className="euHome">
            {displayedText}
            <span style={{ visibility: isCursorVisible ? 'visible' : 'hidden' }}>|</span>
          </h2>
        </div>
        <div className="image-content">
          <img className="fotominha" src={fotominha} alt="Pedro Bomfim" />
          <img className="circuloroxo" src={circuloroxo} alt="circuloroxo" />
          <img className="circulosemnada" src={circulosemnada} alt="circulosemnada" />
        </div>
        <div className="links-content">
          <h3><a href="https://github.com/Pedrolbtb">GitHub</a>
          <img className='arrow-iconlink' src={arrow} alt="arrow" />
          </h3>
          <h3><a href="https://www.linkedin.com/in/pedro-henrique-lopes-batista-teixeira-bomfim-46bb88174/">LinkedIn</a>
          <img className='arrow-iconlink' src={arrow} alt="arrow" /></h3>
        </div>
      </div>

{/*------------------------------------MOBILE--------------------------------*/ }

<div className='containerHomeMob'>
<div style={{marginLeft: '10%', marginTop: '5%', gap: '10%'}} className='conteudoHorizontalHomeMob'>
  <h3>
    <a href="https://github.com/Pedrolbtb"><FontAwesomeIcon className='iconsMobile' icon={faGithub} /></a>
  </h3>
  <h3>
    <a href="https://www.linkedin.com/in/pedro-henrique-lopes-batista-teixeira-bomfim-46bb88174/"><FontAwesomeIcon  className='iconsMobile' icon={faLinkedin} /></a>
   </h3>
</div>
  <div style={{marginTop: '5%'}} className='topoHomeMob'>
  <img className='fotominhaMob' src={fotominha} alt="Pedro Bomfim" />
    <h1 className='h1PortfolioMob'>
      <span className="highlight" >Olá, eu sou o</span> <br />Pedro Bomfim
    </h1>
    <h2 className='euHomeMob'>
      {displayedText}
      <span style={{ visibility: isCursorVisible ? 'visible' : 'hidden' }}>|</span>
    </h2>
    <div>
      <h3 className='h3PortfolioMob'>contate-me</h3>
      <div style={{marginBottom: '25%'}} className="conteudoHorizontalHomeMob">
      <img className='icons' src={mail} alt="email" />
      <a  href="mailto:pedro.lbtb@gmail.com">pedro.lbtb@gmail.com</a>
      </div>
    </div>
  </div>
  <div>
  </div>
</div>

    </>
  );
}

export default transition(Home);

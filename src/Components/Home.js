import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import transition from '../transition';
import fotominha from '../assets/fotominha.png';
import circuloroxo from '../assets/circuloroxo.png';
import circulosemnada from '../assets/circulosemnada.png';
import arrow from '../assets/arrow.png';
import '../styles/home.module.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const fullText = "Sou um desenvolvedorfront-end</span> e <span style={{color: '#7a3bee'}}>UI/UX Designer</span>, apaixonado por inovação e arte, sempre em busca de criar experiências digitais únicas e impactantes.";
  useEffect(() => {
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

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfólio</title>
      </Helmet>

      <div className='containerHome'>
        <div className="text-content">
          <h1><span className="highlight">Olá,eu sou o</span> <br />Pedro Bomfim</h1>
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
    </>
  );
}

export default transition(Home);

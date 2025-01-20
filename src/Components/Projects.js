import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import transition from '../transition';
import { Link } from 'react-router-dom';
import vihvaapp from '../assets/vihvaapp.jpg';
import vihvaweb from '../assets/vihvaweb.jpg';
import vihvawatch from '../assets/vihvawatch.jpg';
import edicao from '../assets/edicaocapa.jpg';
import linkbar from './LinkBar'
import arrow from '../assets/arrow.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const fullText = "Aqui estão projetos que trabalhei e desenvolvi, contendo aplicações com diversas linguagens como Kotlin, HTML, CSS e JavaScript e edições de vídeos.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Start cursor blinking after typing is done
        const cursorInterval = setInterval(() => {
          setIsCursorVisible(prev => !prev);
        }, 500); // Blinking interval
        return () => clearInterval(cursorInterval); // Clean up the blinking interval
      }
    }, 50);

    return () => clearInterval(typingInterval); // Cleanup typing interval
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projetos</title>
      </Helmet>
      <div className='containerHome'>
      <div className="text-content">
        <h1 className='h1Portfolio'><span className="highlight">Esses são os</span> <br /> meus Projetos</h1>
        <h2 className="euHome" style={{top: "55%"}}>
          {displayedText}
          <span style={{ visibility: isCursorVisible ? 'visible' : 'hidden' }}>|</span>
        </h2>
      </div>

      <div className="containerProjects">
  <div className="imageProjects">
  <Link to="/VihvaApp">
    <div className="overlay">
      <img className="projects-content" src={vihvaapp} alt="Vihva app" />
      <div className="overlay-text">Ver mais de Vihva App</div>
    </div>
    </Link>
  </div>
  <div className="imageProjects">
    <Link to="/VihvaWeb">
    <div className="overlay">
      <img className="projects-content" src={vihvaweb} alt="Vihva Web" />
      <div className="overlay-text">Ver mais de Vihva Medical Center</div>
    </div>
    </Link>
  </div>
  <div className="imageProjects">
    <Link to="/VihvaWatch">
    <div className="overlay">
      <img className="projects-content" src={vihvawatch} alt="Vihva Watch" />
      <div className="overlay-text">Ver mais de Vihva Watch</div>
    </div>
    </Link>
  </div>
  <div className="imageProjects">
    <Link to="/Edicao">
    <div className="overlay">
      <img style={{border: '1px solid white'}} className="projects-content" src={edicao} alt="Edição de vídeos" />
      <div className="overlay-text">Ver mais edições de vídeos</div>
    </div>
    </Link>
  </div>
</div>
<div className="links-content">
          <h3><a href="https://github.com/Pedrolbtb">GitHub</a>
          <img className='arrow-iconlink' src={arrow} alt="arrow" />
          </h3>
          <h3><a href="https://www.linkedin.com/in/pedro-henrique-lopes-batista-teixeira-bomfim-46bb88174/">LinkedIn</a>
          <img className='arrow-iconlink' src={arrow} alt="arrow" /></h3>
        </div>
        </div>


      {/* ---------------------------------- MOBILE ----------------------------- */}

      <div className='containerAboutMob'>
<div style={{marginLeft: '10%', marginTop: '5%', gap: '10%'}} className='conteudoHorizontalHomeMob'>
  <h3>
    <a href="https://github.com/Pedrolbtb"><FontAwesomeIcon className='iconsMobile' icon={faGithub} /></a>
  </h3>
  <h3>
    <a href="https://www.linkedin.com/in/pedro-henrique-lopes-batista-teixeira-bomfim-46bb88174/"><FontAwesomeIcon  className='iconsMobile' icon={faLinkedin} /></a>
   </h3>
  </div>
  <div style={{marginTop: '10%'}} className='topoHomeMob'>
    <h1 className='h1PortfolioMob'>
      <span className="highlight" >Esses são os</span> <br />meus projetos
    </h1>
    <h2 style={{width: '90%'}} className='euHomeMob'>
      {displayedText}
      <span style={{ visibility: isCursorVisible ? 'visible' : 'hidden' }}>|</span>
    </h2>
  </div>
  <div className="containerProjects">
  <div style={{ marginLeft: '5%'}} className="imageProjects">
  <Link to="/VihvaApp">
    <div className="overlay">
      <img className="projects-content" src={vihvaapp} alt="Vihva app" />
      <div className="overlay-text">Ver mais de Vihva App</div>
    </div>
    </Link>
  </div>
  <div style={{ marginLeft: '5%'}} className="imageProjects">
    <Link to="/VihvaWeb">
    <div className="overlay">
      <img className="projects-content" src={vihvaweb} alt="Vihva Web" />
      <div className="overlay-text">Ver mais de Vihva Medical Center</div>
    </div>
    </Link>
  </div>
  <div style={{ marginLeft: '5%'}} className="imageProjects">
    <Link to="/VihvaWatch">
    <div className="overlay">
      <img className="projects-content" src={vihvawatch} alt="Vihva Watch" />
      <div className="overlay-text">Ver mais de Vihva Watch</div>
    </div>
    </Link>
  </div>
  <div style={{ marginLeft: '5%'}} className="imageProjects">
    <Link to="/Edicao">
    <div className="overlay">
      <img style={{border: '1px solid white'}} className="projects-content" src={edicao} alt="Edição de vídeos" />
      <div className="overlay-text">Ver mais edições de vídeos</div>
    </div>
    </Link>
  </div>
</div>
  </div>


    </>
  );
};

export default transition(Projects);

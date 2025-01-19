import React from 'react'
import transition from '../transition'
import './../styles/about.css';
import { Helmet } from 'react-helmet';
import arrow from './../assets/arrow.png';
import curriculo from './../assets/Curriculo Pedro Bomfim.pdf';

function baixarPDF() {
  const link = document.createElement('a');
  link.href = curriculo;
  link.download = curriculo;
  link.click();
};

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sobre</title>
      </Helmet>
      
      <div className="containerAbout">
        <div className="conteudoHorizontalAbout">
          
          {/* Habilidades Section */}
          <div className="containerHabilidades">
            <h1 className="sectionTitle">Habilidades</h1>
            <p className="habilidades">
              Tenho experiência no desenvolvimento de aplicações utilizando <span className="highlight">Kotlin</span>, 
              <span className="highlight"> HTML</span>, <span className="highlight">CSS</span> e <span className="highlight">JavaScript</span>, 
              além de trabalhar com ferramentas como <span className="highlight">React</span>. Também sou familiarizado com 
              <span className="highlight"> bancos de dados NoSQL</span>, como o Firebase da Google. Meu conhecimento se estende a 
              elementos de design, incluindo os conceitos de UI/UX, psicologia das cores e tipografia. 
              <br />
              Além disso, possuo experiência na <span className="highlight">edição de vídeos</span> em formatos verticais para 
              plataformas como TikTok, Shorts e Reels, vídeos horizontais de conteúdo e na criação de vídeos profissionais 
              voltados para conteúdos mais sérios.
            </p>
          </div>

          {/* Jornada Section */}
          <div className="containerJornada">
            <h1 className="sectionTitle">Jornada</h1>
            <p className="habilidades">
              Formado pela ETEC João Belarmino no curso técnico em Desenvolvimento de Sistemas (2022-2024), possuo uma 
              sólida base em programação e desenvolvimento de software.
            </p>
            <div className="buttonContainer">
              <button className="buttonDownload" onClick={baixarPDF}>Baixe o meu Currículo!</button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="links-contentA">
          <h3>
            <a href="https://github.com/Pedrolbtb">GitHub</a>
            <img className="arrow-iconlink" src={arrow} alt="arrow" />
          </h3>
          <h3>
            <a href="https://www.linkedin.com/in/pedro-henrique-lopes-batista-teixeira-bomfim-46bb88174/">LinkedIn</a>
            <img className="arrow-iconlink" src={arrow} alt="arrow" />
          </h3>
        </div>
      </div>

      {/* ---------------------------------- MOBILE ----------------------------- */}
      
      
      <div>
      <div className='linkHorizontalMob'>
        <h3>
          <a href="https://github.com/Pedrolbtb"><i class="fa-brands fa-github"></i></a>
        </h3>
        <h3>
          <a href="https://www.linkedin.com/in/pedro-henrique-lopes-batista-teixeira-bomfim-46bb88174/"><i class="fa-brands fa-linkedin"></i></a>
        </h3>
    </div>
        <div>
          <div className='topoHomeMob'>
            <h1 className='h1PortfolioMob'>Habilidades</h1>
            <p  className='euHomeMob'>
              Tenho experiência no desenvolvimento de aplicações utilizando <span className="highlightr">Kotlin</span>, 
              <span className="highlightr"> HTML</span>, <span className="highlightr">CSS</span> e <span className="highlightr">JavaScript</span>, 
              além de trabalhar com ferramentas como <span className="highlightr">React</span>. Também sou familiarizado com 
              <span className="highlightr"> bancos de dados NoSQL</span>, como o Firebase da Google. Meu conhecimento se estende a 
              elementos de design, incluindo os conceitos de UI/UX, psicologia das cores e tipografia. 
              <br />
              Além disso, possuo experiência na <span className="highlightr">edição de vídeos</span> em formatos verticais para 
              plataformas como TikTok, Shorts e Reels, vídeos horizontais de conteúdo e na criação de vídeos profissionais 
              voltados para conteúdos mais sérios.
            </p>
          </div>
          <div style={{marginTop: '10%'}} className='topoHomeMob'>
            <h1 className='h1PortfolioMob'>Jornada</h1>
            <p className='euHomeMob'>
              Formado pela ETEC João Belarmino no curso técnico em Desenvolvimento de Sistemas (2022-2024), possuo uma 
              sólida base em programação e desenvolvimento de software.
            </p>
            <div>
              <button className='buttonDownloadMob' onClick={baixarPDF}>Baixe o meu Currículo!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(About);

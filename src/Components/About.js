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
      <div className="conteudoHorizontalAbout">
        <div style={{width: "45%", marginRight: "5%", marginLeft: "3%"}}>
        <h1 style={{ marginTop: "2%", fontSize: "3em"}}>Habilidades</h1>
        <p className='habilidades'>Tenho experiência no desenvolvimento de aplicações utilizando <span style={{color: "#7a3bee"}}>Kotlin</span>, <span style={{color: "#7a3bee"}}>HTML</span>, <span style={{color: "#7a3bee"}}>CSS</span> e <span style={{color: "#7a3bee"}}>JavaScript</span>, além de trabalhar com ferramentas como <span style={{color: "#7a3bee"}}>React</span>. Também sou familiarizado com  <span style={{color: "#7a3bee"}}>bancos de dados NoSQL</span>, como o Firebase da Google. Meu conhecimento se estende a elementos de design, incluindo os conceitos de UI/UX, psicologia das cores e tipografia. <br />
         Além disso, possuo experiência na  <span style={{color: "#7a3bee"}}>edição de vídeos</span> em formatos verticais para plataformas como TikTok, Shorts e Reels, vídeos horizontais de conteúdo e na criação
          de vídeos profissionais voltados para conteúdos mais sérios. </p>
        </div>
      <div className='containerJornada'>
        <h1 style={{marginTop: "2%", fontSize: "3em"}}>Jornada</h1>
        <p className='habilidades'>Formado pela ETEC João Belarmino no curso técnico em Desenvolvimento de Sistemas (2022-2024), possuo uma sólida base em programação e desenvolvimento de 
          software.</p>
          <div className='buttonContainer'>
            <button className="buttonDownload" onClick={baixarPDF}>Baixe o meu Currículo!</button>
          </div>
      </div>
      </div>
      <div className="links-contentA" >
          <h3>
            <a href="https://github.com/Pedrolbtb">GitHub</a>
            <img className='arrow-iconlink' src={arrow} alt="arrow" style={{marginTop: "25%"}} />
          </h3>
          <h3>
            <a href="https://www.linkedin.com/in/pedro-henrique-lopes-batista-teixeira-bomfim-46bb88174/">LinkedIn</a>
            <img className='arrow-iconlink' src={arrow} alt="arrow" style={{marginTop: "20%"}}/>
          </h3>
        </div>
    </div>
  )
}

export default transition(About)
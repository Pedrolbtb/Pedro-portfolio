import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import transitionVihvaapp from '../transitionVihvaapp';
import inicio from '../assets/inicio.jpg';
import perfil from '../assets/perfil.jpg';
import calendario from '../assets/calendario.jpg';
import alarme from '../assets/alarme.jpg';
import obsremedio from '../assets/obsremedio.jpg';
import vihvaApp from '../assets/vihvaweb.jpg';
import html from '../assets/htmllogo.png';
import waves from '../assets/waveweb.svg';
import './../styles/vihvaweb.css';

const VihvaWeb = () => {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);

  const containerAnimation = {
    hidden: {
      y: -1000,
    },
    show: {
      y: 0,
      transition: {
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        duration: 1,
      },
    },
  };

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Remove observer after showing
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    sectionsRef.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    imagesRef.current.forEach(image => {
      if (image) {
        observer.observe(image);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vihva Medical Center</title>
      </Helmet>
      <div className='vihvaapp-wrapper'>
        <section ref={el => sectionsRef.current[0] = el} className="hidden">
          <motion.div className="containerTitulo" variants={containerAnimation} initial="hidden" animate="show">
            <h1 className='TituloContainerWeb'>Vihva Medical Center</h1>
          </motion.div>
        </section>
        <section ref={el => sectionsRef.current[1] = el} className='secaoHorizontal hidden'>
          <div className='conteudoHorizontal'>
            <div className="overlayPort">
            <img className='imagemVihvaapp' src={vihvaApp} alt="Vihva App" />
            <div className="overlayPort-text">Vihva foi meu projeto de TCC do meu ano de formatura (2024)</div>
            </div>
            <div>
              <p>O Vihva Medical Center é uma plataforma inovadora que apoia médicos no acompanhamento contínuo de pacientes com doenças crônicas. Com o aplicativo Android Vihva, profissionais de saúde monitoram a saúde diária dos pacientes, oferecendo atendimento personalizado e eficiente, assegurando controle rigoroso e preciso das condições ao longo do tempo.</p>
              <h2 style={{marginBottom: "0.5%"}}>Linguagens Utilizadas</h2>
              <img className='logoLinguagensH' src={html} alt="Kotlin Logo" />
            </div>
          </div>
        </section>
        <img className='wavewebazul' src={waves} alt="Wave" />
        <div style={{ backgroundColor: '#6196A8' }}>
          <h1 ref={el => sectionsRef.current[2] = el} className='SubtituloPagina hidden'>Galeria de Imagens</h1>
          <section ref={el => sectionsRef.current[3] = el} className='fotosHorizontal hidden'>
            <div className='SliderHorizontal'>
            <iframe 
                src="https://imageslidergenerator.shahmirfaisal.com/slider?image=https%3A%2F%2Fi.ibb.co%2FfDw02xx%2Fcalendarioweb.jpg&image=https%3A%2F%2Fi.ibb.co%2FMZ9ZtKh%2Finicioweb.jpg&image=https%3A%2F%2Fi.ibb.co%2F6B2rfvm%2Fmedicamentosweb.jpg&image=https%3A%2F%2Fi.ibb.co%2F5K4g8zg%2Fpacienteweb.jpg&image=https%3A%2F%2Fi.ibb.co%2FM7zbtWy%2Fperfilweb.jpg&animationType=fade&autoPlay=false&radioButtonType=circle&radioButtonSize=20&radioButtonGap=10&arrowsType=arrow-ios&arrowsBackground=visible&arrowsBackgroundVisibility=150&arrowsSize=35&arrowsOffset=1&arrowsColor=%23ffffff" 
                style={{ border: 'none', width: '200%', height: '500px' }} 
                title="Image Slider"
              ></iframe></div>
          </section>
          <section ref={el => sectionsRef.current[4] = el} className='AprendizadosHorizontal hidden'>
            <div className='containerAprendizados'>
              <h1 className='SubtituloPagina' style={{ marginTop: '5%' }}>Aprendizados</h1>
              <p className='aprendizadosText'>O desenvolvimento do Vihva foi meu primeiro projeto utilizando React, proporcionando uma excelente oportunidade para expandir significativamente minhas habilidades em HTML, CSS e JavaScript. Além disso, a integração do Firebase como banco de dados foi fundamental para aprimorar meus conhecimentos em soluções de backend, consolidando uma experiência prática e enriquecedora no desenvolvimento web.
</p>
            </div>
          </section>
          <section ref={el => sectionsRef.current[5] = el} className="hidden">
            <div className='ButtonsHorizontal'>
              <Link to="/projects"><button className='buttonOutrosProjetos'>Outros Projetos</button></Link>
              <a href="https://github.com/BuenoSamu/Vihva_Medical_Center"><button className='buttonGitVihva'>Repositório no GitHub</button></a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default transitionVihvaapp(VihvaWeb);
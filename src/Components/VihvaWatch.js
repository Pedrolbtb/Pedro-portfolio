import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import transitionVihvaapp from '../transitionVihvaapp';
import alarme from '../assets/loginwatch.png';
import obsremedio from '../assets/iniciowatch.png';
import vihvaApp from '../assets/vihvawatch.jpg';
import kotlin from '../assets/kotlinlogo.png';
import waves from '../assets/wavewatch.svg';
import './../styles/vihvawatch.css';

const VihvaWatch = () => {
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
        <title>Vihva Watch</title>
      </Helmet>
      <div className='vihvaapp-wrapper'>
        <section ref={el => sectionsRef.current[0] = el} className="hidden">
          <motion.div className="containerTitulo" variants={containerAnimation} initial="hidden" animate="show">
            <h1 className='TituloContainer'>Vihva Watch</h1>
          </motion.div>
        </section>
        <section ref={el => sectionsRef.current[1] = el} className='secaoHorizontal hidden'>
          <div className='conteudoHorizontal'>
            <div className="overlayPort">
            <img className='imagemVihvaapp' src={vihvaApp} alt="Vihva App" />
            <div className="overlayPort-text">Vihva foi meu projeto de TCC do meu ano de formatura (2024)</div>
            </div>
            <div>
              <p>O Vihva Watch é um aplicativo para smartwatches criado com o objetivo de oferecer uma solução moderna e eficiente para o gerenciamento de corridas e caminhadas. Com uma interface intuitiva, o aplicativo reúne ferramentas indispensáveis para simplificar e otimizar o controle de seus percursos, garantindo praticidade e eficiência na rotina de seus usuários.</p>
              <h2>Linguagens Utilizadas</h2>
              <img className='logoLinguagens' src={kotlin} alt="Kotlin Logo" />
            </div>
          </div>
        </section>
        <img className='wavewebazul' src={waves} alt="Wave" />
        <div style={{ backgroundColor: '#6196A8' }}>
          <h1 ref={el => sectionsRef.current[2] = el} className='SubtituloPagina hidden'>Galeria de Imagens</h1>
          <section ref={el => sectionsRef.current[3] = el} className='fotosHorizontal hidden'>
            <div className='galeriaHorizontal'>
              <img ref={el => imagesRef.current[2] = el} className='printVihvawatch hidden' src={alarme} alt="Alarme"/>
              <img ref={el => imagesRef.current[3] = el} className='printVihvawatch hidden' src={obsremedio} alt="Observação de Remédio" />
            </div>
          </section>
          <section ref={el => sectionsRef.current[4] = el} className='AprendizadosHorizontal hidden'>
            <div className='containerAprendizados'>
              <h1 className='SubtituloPagina' style={{ marginTop: '5%' }}>Aprendizados</h1>
              <p className='aprendizadosText'>O desenvolvimento do Vihva Watch foi um marco importante, pois representou o meu primeiro projeto para uma plataforma tão distinta quanto os smartwatches. Essa experiência, no entanto, se revelou uma excelente oportunidade de aprendizado, permitindo-me explorar as particularidades dessa plataforma e, ao mesmo tempo, perceber as semelhanças com os celulares tradicionais.</p>
            </div>
          </section>
          <section ref={el => sectionsRef.current[5] = el} className="hidden">
            <div className='ButtonsHorizontal'>
              <Link to="/projects"><button className='buttonOutrosProjetos'>Outros Projetos</button></Link>
              <a href="https://github.com/Pedrolbtb/Vihva-Watch"><button className='buttonGitVihva'>Repositório no GitHub</button></a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default transitionVihvaapp(VihvaWatch);

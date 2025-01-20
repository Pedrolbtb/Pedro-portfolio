import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swiper from 'swiper';
import transitionVihvaapp from '../transitionVihvaapp';
import inicio from '../assets/inicio.jpg';
import perfil from '../assets/perfil.jpg';
import calendario from '../assets/calendario.jpg';
import alarme from '../assets/alarme.jpg';
import obsremedio from '../assets/obsremedio.jpg';
import vihvaApp from '../assets/vihvaapp.jpg';
import kotlin from '../assets/kotlinlogo.png';
import waves from '../assets/wave.svg';
import arrowup from '../assets/arrowup.png';

const VihvaApp = () => {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const mobileSectionsRef = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target); 
            }
          });
        },
        { threshold: 0.1 } 
      );
  
      mobileSectionsRef.current.forEach(section => {
        if (section) {
          observer.observe(section);
        }
      });
  
      return () => observer.disconnect();
    }, []);

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
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
    <div className='aparecimentomob'>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vihva App</title>
      </Helmet>
      <div className='vihvaapp-wrapper'>
        <section ref={el => sectionsRef.current[0] = el} className="hidden">
          <motion.div className="containerTitulo" variants={containerAnimation} initial="hidden" animate="show">
            <h1 className='TituloContainer'>Vihva App</h1>
          </motion.div>
        </section>
        <section ref={el => sectionsRef.current[1] = el} className='secaoHorizontal hidden'>
          <div className='conteudoHorizontal'>
            <div className="overlayPort">
            <img className='imagemVihvaapp' src={vihvaApp} alt="Vihva App" />
            <div className="overlayPort-text">Vihva foi meu projeto de TCC do meu ano de formatura (2024)</div>
            </div>
            <div>
              <p>O Vihva é um aplicativo para dispositivos android criado com o objetivo de oferecer uma solução moderna e 
              eficiente para o gerenciamento da saúde. Com uma interface intuitiva e recursos avançados, o aplicativo reúne
               ferramentas indispensáveis para simplificar e otimizar o cuidado com a saúde, garantindo praticidade na rotina de seus usuários.</p>
              <h2>Linguagens Utilizadas</h2>
              <img  className='logoLinguagens' src={kotlin} alt="Kotlin Logo" />
            </div>
          </div>
        </section>
        <img className='waveazul' src={waves} alt="Wave" />
        <div style={{ backgroundColor: '#6196A8' }}>
          <h1 ref={el => sectionsRef.current[2] = el} className='SubtituloPagina hidden'>Galeria de Imagens</h1>
          <section ref={el => sectionsRef.current[3] = el} className='fotosHorizontal hidden'>
            <div className='galeriaHorizontal'>
              <img ref={el => imagesRef.current[0] = el} className='printVihvaapp hidden' src={inicio} alt="Início" />
              <img ref={el => imagesRef.current[1] = el} className='printVihvaapp hidden' src={perfil} alt="Perfil" />
              <img ref={el => imagesRef.current[2] = el} className='printVihvaapp hidden' src={alarme} alt="Alarme"/>
              <img ref={el => imagesRef.current[3] = el} className='printVihvaapp hidden' src={obsremedio} alt="Observação de Remédio" />
              <img ref={el => imagesRef.current[4] = el} className='printVihvaapp hidden' src={calendario} alt="Calendário" />
            </div>
          </section>
          <section ref={el => sectionsRef.current[4] = el} className='AprendizadosHorizontal hidden'>
            <div className='containerAprendizados'>
              <h1 className='SubtituloPagina' style={{ marginTop: '5%' }}>Aprendizados</h1>
              <p className='aprendizadosText'>O desenvolvimento do Vihva foi uma experiência extremamente enriquecedora, 
              marcando meu primeiro grande projeto utilizando a linguagem Kotlin. Esse desafio não apenas ampliou significativamente 
              meu domínio sobre a linguagem, mas também me proporcionou uma imersão prática no uso de APIs. Além disso, a colaboração 
              constante com a equipe ao longo do projeto foi fundamental para o meu crescimento profissional, permitindo-me 
              aprimorar habilidades de trabalho em grupo e comunicação eficaz.</p>
            </div>
          </section>
          <section ref={el => sectionsRef.current[5] = el} className="hidden">
            <div className='ButtonsHorizontal'>
              <Link to="/projects"><button className='buttonOutrosProjetos'>Outros Projetos</button></Link>
              <a href="https://github.com/Pedrolbtb/Vihva-app"><button className='buttonGitVihva'>Repositório no GitHub</button></a>
            </div>
          </section>
        </div>
      </div>
      </div>

      
 {/* ---------------------------------- MOBILE ----------------------------- */}
  

 <div className='vihvaappMobContainer'>
        <div className="containerTituloMob hidden" ref={el => mobileSectionsRef.current[0] = el}>
          <h1 className="TituloContainerMob">Vihva App</h1>
        </div>
        <section>
          <div className='topoHomeMob hidden' ref={el => mobileSectionsRef.current[1] = el}>
            <img className='imagemVihvaappMob' src={vihvaApp} alt="Vihva App" />
            <div className='topoHomeMob'>
              <p className='euVihvaMob'>O Vihva é um aplicativo para dispositivos android criado com o objetivo de oferecer uma solução moderna e 
              eficiente para o gerenciamento da saúde. Com uma interface intuitiva e recursos avançados, o aplicativo reúne
              ferramentas indispensáveis para simplificar e otimizar o cuidado com a saúde, garantindo praticidade na rotina de seus usuários.</p>
              <h2 className='linguagensMob'>Linguagens Utilizadas</h2>
              <img  className='logoLinguagensMob' src={kotlin} alt="Kotlin Logo" />
            </div>
          </div>
        </section>
        <img className='waveazul hidden' ref={el => mobileSectionsRef.current[2] = el} src={waves} alt="Wave" />
        <div style={{ backgroundColor: '#6196A8' }} className='hidden' ref={el => mobileSectionsRef.current[3] = el}>
          <h1 className='SubtituloPaginaMob'>Galeria de Imagens</h1>
          <section>
            <div>
              <img className='printVihvaappMob hidden' ref={el => mobileSectionsRef.current[4] = el} src={inicio} alt="Início" />
              <img className='printVihvaappMob hidden' ref={el => mobileSectionsRef.current[5] = el} src={perfil} alt="Perfil" />
              <img className='printVihvaappMob hidden' ref={el => mobileSectionsRef.current[6] = el} src={alarme} alt="Alarme"/>
              <img className='printVihvaappMob hidden' ref={el => mobileSectionsRef.current[8] = el} src={calendario} alt="Calendário" />
            </div>
          </section>
          <h1 className='SubtituloPaginaMob'>Aprendizados</h1>
          <p className='aprendizadosVihvaMob hidden' ref={el => mobileSectionsRef.current[9] = el}>O desenvolvimento do Vihva foi uma experiência extremamente enriquecedora, 
              marcando meu primeiro grande projeto utilizando a linguagem Kotlin. Esse desafio não apenas ampliou significativamente 
              meu domínio sobre a linguagem, mas também me proporcionou uma imersão prática no uso de APIs. Além disso, a colaboração 
              constante com a equipe ao longo do projeto foi fundamental para o meu crescimento profissional, permitindo-me 
              aprimorar habilidades de trabalho em grupo e comunicação eficaz.</p>
          <div className="buttonsHorizontal hidden" ref={el => mobileSectionsRef.current[10] = el}>
            <Link style={{marginBottom: '5%'}} to="/projects"><button className='buttonOutrosProjetosMob'>Outros Projetos</button></Link>
            <a href="https://github.com/Pedrolbtb/Vihva-app"><button className='buttonGitVihvaMob'>Repositório no GitHub</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default transitionVihvaapp(VihvaApp);

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import './../styles/edicao.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import transitionEdicao from '../transitionEdicao';
import capcut from '../assets/capcut.png';
import drinks from '../assets/drinks.jpg';
import badroom from '../assets/badroom.jpg';
import premiere from '../assets/premiere.png';
import arrow from '../assets/arrowdown.svg';
import after from '../assets/aftereffects.png';

const line1Animation = {
  hidden: { x: -1000 },
  show: {
    x: 0,
    transition: {
      delay: 0.1,
      ease: [0.87, 0, 0.13, 1],
      duration: 1,
    },
  },
};

const line2Animation = {
  hidden: { x: 1000 },
  show: {
    x: 0,
    transition: {
      delay: 0.1,
      ease: [0.87, 0, 0.13, 1],
      duration: 1,
    },
  },
};

const line3Animation = {
  hidden: { y: -1000, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: [0.87, 0, 0.13, 1],
      duration: 1,
    },
  },
};

const line4Animation = {
  hidden: { y: 1000, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: [0.87, 0, 0.13, 1],
      duration: 1,
    },
  },
};

const Edicao = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className='containerPretoEdicao'>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edição de vídeos</title>
      </Helmet>
      <section>
        <div style={{ height: '5em' }} className="conteudoHorizontalEdicao"></div>
        <div className="conteudoHorizontalEdicao">
          <motion.div
            className='linha1titulo hidden'
            initial="hidden"
            animate="show"
            variants={line1Animation}
            ref={el => sectionsRef.current[0] = el}
          >
            <h1 className='tituloedicao'>Edições</h1>
          </motion.div>
          <motion.div
            className='linha4titulo hidden'
            initial="hidden"
            animate="show"
            variants={line4Animation}
            ref={el => sectionsRef.current[1] = el}
          >
            <h1 className='tituloedicao'>de </h1>
          </motion.div>
        </div>
        <div className="conteudoHorizontalEdicao">
          <motion.div
            className='linha2titulo hidden'
            initial="hidden"
            animate="show"
            variants={line2Animation}
            ref={el => sectionsRef.current[2] = el}
          >
            <h1 className='titulo2edicao'>vídeo</h1>
          </motion.div>
          <motion.div
            className='linha3titulo hidden'
            initial="hidden"
            animate="show"
            style={{height: '12.7em'}}
            variants={line3Animation}
            ref={el => sectionsRef.current[3] = el}
          ></motion.div>
        </div>
        <div style={{ height: '13.4em', marginBottom: '5%' }} className="conteudoHorizontalEdicao">
          <img className='arrowdown hidden' src={arrow} alt="" ref={el => sectionsRef.current[4] = el} />
        </div>
      </section>
      <section>
        <div className="conteudoHorizontal">
          <div className="overlayPortE">
            <img className='imagemEdicao hidden' style={{ width: '70%' }} src={badroom} alt="Bad Room Studio" ref={el => sectionsRef.current[5] = el} />
            <div className="overlayPortE-text">Estúdio brasileiro de jogos</div>
          </div>
          <div>
            <p style={{ color: 'whitesmoke' }} className="hidden" ref={el => sectionsRef.current[6] = el}>
              Tive o orgulho de editar o vídeo de anúncio da demonstração do jogo de terror "Two Sisters", do Estúdio
              brasileiro Bad Room. Esse projeto desafiador destacou minhas habilidades em edição, criando uma narrativa visual impactante que capturou
              a essência do jogo e gerou entusiasmo pelo lançamento.
            </p>
            <h2 style={{ color: '#A790E0', marginBottom: '0' }} className="hidden" ref={el => sectionsRef.current[7] = el}>Softwares Utilizados</h2>
            <img className='logoLinguagensE hidden' src={capcut} alt="CapCut Logo" ref={el => sectionsRef.current[8] = el} />
          </div> 
        </div>
        <div>
          <h1 className='SubtituloPaginaEdicao hidden' ref={el => sectionsRef.current[9] = el}>Vídeo em que trabalhei</h1>
          <iframe
            className='videosHorizontal hidden'
            src="https://www.youtube.com/embed/fN06Y3QNrXo?modestbranding=1&controls=1&showinfo=0&rel=0&fs=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            ref={el => sectionsRef.current[10] = el}
          ></iframe>
        </div>
      </section>
      <hr style={{ border: 'none', height: '2px', backgroundColor: '#313131', marginTop: '5%' }} />
      <section>
        <div className="conteudoHorizontal" style={{ marginTop: '5%' }}>
          <div className="overlayPortE">
            <img className='imagemEdicao hidden' style={{ width: '70%' }} src={drinks} alt="Drinks & Petiscos" ref={el => sectionsRef.current[11] = el} />
            <div className="overlayPortE-text">Canal especializado na criação de Drinks</div>
          </div>
          <div>
            <p style={{ color: 'whitesmoke' }} className="hidden" ref={el => sectionsRef.current[12] = el}>
              Com mais de 50 vídeos editados para o canal Drinks & Petiscos, tive a oportunidade de trabalhar em uma variedade
              de formatos, tanto horizontais quanto verticais. Ao longo desse processo, busquei sempre equilibrar o ritmo dinâmico e a qualidade visual,
              garantindo que cada vídeo se destacasse e fosse atraente para o público.
            </p>
            <h2 style={{ color: '#A790E0', marginBottom: '0' }} className="hidden" ref={el => sectionsRef.current[13] = el}>Softwares Utilizados</h2>
            <img className='logoLinguagensE hidden' src={premiere} alt="Adobe Premiere Logo" ref={el => sectionsRef.current[14] = el} />
            <img className='logoLinguagensE hidden' src={after} alt="Adobe After Effects Logo" ref={el => sectionsRef.current[15] = el} />
          </div>
        </div>
        <div>
          <h1 className='SubtituloPaginaEdicao hidden' ref={el => sectionsRef.current[16] = el}>Vídeos em que trabalhei</h1>
          <iframe className='videosHorizontal hidden' width="560" height="315" src="https://www.youtube.com/embed/UmfjTbGEcAI?si=_4Nq3FpuOGEBVjTK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ref={el => sectionsRef.current[17] = el}></iframe>
          <iframe className='videosVertical hidden' width="464" height="824" src="https://www.youtube.com/embed/WAFESlQwtvI" title="Nesta receita só faltou a Brooke Shields!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ref={el => sectionsRef.current[18] = el}></iframe>
        </div>
      </section>
      <section>
        <div style={{padding: '2%'}} className='ButtonsHorizontal'>
          <Link to="/projects"><button style={{transition: '0.5s'}} className='buttonOutrosProjetos hidden' ref={el => sectionsRef.current[19] = el}>Outros Projetos</button></Link>
        </div>
      </section>
    </div>
  );
}

export default transitionEdicao(Edicao);

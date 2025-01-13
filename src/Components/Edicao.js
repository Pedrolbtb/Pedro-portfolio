import React from 'react';
import { Helmet } from 'react-helmet';
import './../styles/edicao.css';
import capcut from '../assets/capcut.png';
import vihvaApp from '../assets/vihvaapp.jpg';
import wave from '../assets/waveedicao.svg';
import drinks from '../assets/capadrinks.png'
import badroom from '../assets/badroom.jpg'

const Edicao = () => {
  return (
    <div style={{ backgroundColor: '#1E1E1E', height: '500vh' }}>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edição de vídeos</title>
      </Helmet>
      <section>
      <div style={{height: '5em'}} className="conteudoHorizontalEdicao"></div>
      <div className="conteudoHorizontalEdicao">
          <div className='linha1titulo'>
            <h1 className='tituloedicao'>Edições</h1>
          </div>
          <div className='linha4titulo'>
            <h1 className='tituloedicao'>de </h1>
          </div>
          </div>
          <div className="conteudoHorizontalEdicao">
          <div className='linha2titulo'>
            <h1 className='titulo2edicao'>vídeo</h1>
          </div>
          <div className='linha3titulo'>
          </div>
        </div>
        <div style={{height: '13.4em', marginBottom: '5%'}} className="conteudoHorizontalEdicao"></div>
      </section>
      <section>
        <div className="conteudoHorizontal">
            <div className="overlayPort">
            <img className='imagemVihvaapp' style={{width: '70%'}} src={badroom} alt="Vihva App" />
            <div className="overlayPort-text">Estúdio brasileiro de jogos</div>
            </div>
            <div>
              <p style={{color: 'whitesmoke'}}>Tive o orgulho de editar o vídeo de anúncio da demonstração do jogo de terror "Two Sisters", do Estúdio  
                brasileiro Bad Room. Esse projeto desafiador destacou minhas habilidades em edição, criando uma narrativa visual impactante que capturou 
                a essência do jogo e gerou entusiasmo pelo lançamento. </p>
              <h2 style={{color: '#A790E0', marginBottom: '0'}}>Softwares Utilizados</h2>
              <img style={{width: "8%", marginTop: '-5  %', marginLeft: '1.2%'}} className='logoLinguagens' src={capcut} alt="CapCut Logo" />
            </div>
          </div>
        <div>
        </div>
        <div>
          <h1 className='SubtituloPaginaEdicao'>
            Vídeo em que trabalhei
          </h1>
        <iframe
          className='videosHorizontal' 
          src="https://www.youtube.com/embed/fN06Y3QNrXo?modestbranding=1&controls=1&showinfo=0&rel=0&fs=0" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
        </div>
      </section>
      <hr style={{border: 'none', height: '2px', backgroundColor: '#313131', marginTop: '5%'}} />

      <section>
        <div className="conteudoHorizontal" style={{marginTop: '5%'}}>
            <div className="overlayPort">
            <img className='imagemVihvaapp' style={{width: '120%'}} src={drinks} alt="Vihva App" />
            <div className="overlayPort-text">Estúdio brasileiro de jogos</div>
            </div>
            <div>
              <p style={{color: 'whitesmoke'}}>Com mais de 50 vídeos editados para o canal Drinks & Petiscos, tive a oportunidade de trabalhar em uma variedade
                 de formatos, tanto horizontais quanto verticais. Ao longo desse processo, busquei sempre equilibrar o ritmo dinâmico e a qualidade visual, 
                 garantindo que cada vídeo se destacasse e fosse atraente para o público.</p>
              <h2 style={{color: '#1E1E1E', marginBottom: '0'}}>Softwares Utilizados</h2>
              <img style={{width: "8%", marginTop: '-5  %', marginLeft: '1.2%'}} className='logoLinguagens' src={capcut} alt="CapCut Logo" />
            </div>
          </div>
      </section>
    </div>
  );
}

export default Edicao;

import React from 'react';
import { Helmet } from 'react-helmet';
import './../styles/edicao.css';

const Edicao = () => {
  return (
    <div style={{backgroundColor: '#1E1E1E', height: '100vh'}}>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Edição de vídeos</title>
      </Helmet>
      <section>
        <div>
          <div className='linha1titulo'>
            <h1 className='tituloedicao'>Edições de </h1>
          </div>
          <div className='linha2titulo'>
            <h1 className='titulo2edicao'>vídeo</h1>
            <hr className='vertical-hr' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Edicao;
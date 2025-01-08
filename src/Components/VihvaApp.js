import React from 'react';
import { Helmet } from 'react-helmet';
import transitionVihvaapp from '../transitionVihvaapp';
import inicio from '../assets/inicio.jpg';
import obsremedio from '../assets/obsremedio.jpg';


const VihvaApp = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vihva App</title>
      </Helmet>
      <div className='containerHome'>
      <div>
        <section>
            <div className="slider-wrapper">
                <div className="slider">
                    <img id='slide-1' src={inicio} alt="print inicio" />
                    <img id='slide-2' src={obsremedio} alt="print obsremedio" />
                </div>
                <div className="slider-nav">
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>

                </div>
            </div>
        </section>
      </div>
      </div>
    </>
  );
}

export default transitionVihvaapp(VihvaApp);
import React from 'react';
import '/styles/anuncio.css';

function Anuncio(props) {
    const more = props.more;
  
    return (
      <section className='ad'>
        <div className='add'>
            <p>Best seller of the week</p>
            <h1>Iced Coffee Sweet Heaven</h1>
          <button className='button'>
            Mas informacion
            <div className='img'>
                <img src='./public/akar-icons_arrow-right.svg'></img>
            </div>
            
          </button>
        </div>
        <ul className='imagen'>
            <img src='./public/navidad.svg'></img>
          </ul>

      </section>
    );
  }
  
  export default Anuncio;
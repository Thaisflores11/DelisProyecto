import React from 'react'
import '/styles/Fondo.css'

function FondoT(props) {
    const fondoT=props.fondoT;

  return (
    <section>
        
        <div >
            <img src={fondoT.logo} alt="" />
        </div>
        <div className='boton_1'>
            <button>
                <img src={fondoT.boton1} alt="" />
            </button>
            <button className='bt2'>
                <img src={fondoT.boton2} alt="" />
            </button>
            
        </div >
        
    </section>
  )
}


export default FondoT

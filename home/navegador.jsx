import React from 'react';
import '/styles/navegar.css';
function navegar(props) 
{
    const more=props.more
    return(
        
        <div className='navegar'>
            <div className='contenedor'>
                 <img src="casa.svg" alt="" />
                 
                 <img src="torta.svg" alt="" />
                 
                 <img src="sucusal.svg" alt="" />
                 <img src="comentarios.svg" alt="" />
            
                
            </div>
        </div>
    )
    
}
export default navegar 